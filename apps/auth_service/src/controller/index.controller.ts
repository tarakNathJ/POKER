import { prisma } from "@poker/database";
import { asyncFunction, api_error, api_responce } from "@handler/pocker";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { config } from "dotenv";

config();

// sign up controller

export const sign_up_controller = asyncFunction(async (req, res) => {
  const { email, name, password } = req.body;

  //chack email and name field are exist or not
  if ([email, name, password].some((field) => field?.trim() === "")) {
    throw new api_error(400, " required field are messing");
  }

  // chack, this email are exit in db of exit then return responce : sorry this email are exist in database
  const chack_email_in_out_database = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (chack_email_in_out_database) {
    throw new api_error(
      409,
      "this email id are all rady exist try anather  email "
    );
  }

  //  generate hash and chack hash are  generate or not
  const saltRounds = bcrypt.genSaltSync(10);

  const hash_password = bcrypt.hashSync(password, saltRounds);

  if (!hash_password) {
    return new api_error(400, "password hashing are failed , try again lata");
  }

  // add new entry in our  db

  const add_new_entry_in_our_db = await prisma.user.create({
    // @ts-ignore
    data: {
      name: name,
      email: email,
      password: hash_password,
      isActive: true,
      createAt: new Date(),
    },
    select: {
      email: true,
      id: true,
    },
  });
  if (!add_new_entry_in_our_db) {
    throw new api_error(400, "database entry  failed  try again");
  }
  const token = {
    email: add_new_entry_in_our_db.email,
  };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new api_error(400, " env not exist ");
  }

  const access_token = JWT.sign(token, secret, { expiresIn: "1d" });
  if (!access_token) {
    throw new api_error(400, "  failed to create  access token  ");
  }

  return res.status(201).json(
    new api_responce(
      201,
      {
        access_token,
        email: add_new_entry_in_our_db.email,
        id: add_new_entry_in_our_db.id,
      },
      " sign up success fully "
    )
  );
});

// login controller

export const login_controller = asyncFunction(async (req, res) => {
  const { email, password } = req.body;

  // chack required fields
  // chack user email id  are exit or not
  // then chack password
  // create access token
  // return responce
  if ([email, password].some((field) => field.trim() === "")) {
    throw new api_error(400, "all field are required");
  }

  const chack_email_in_out_db = await prisma.user.findFirst({
    where: {
      email: email,
      is_active: true,
    },
    select: {
      password: true,
      email: true,
      id: true,
    },
  });
  if (!chack_email_in_out_db) {
    throw new api_error(404, "user not found ");
  }

  const matching_password_and_hash = bcrypt.compareSync(
    password,
    chack_email_in_out_db.password
  );
  if (!matching_password_and_hash) {
    throw new api_error(401, "Invalid credentials. Password does not match");
  }
  const token = {
    email: chack_email_in_out_db.email,
  };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new api_error(400, " env not exist ");
  }
  const access_token = JWT.sign(token, secret, { expiresIn: "1d" });
  if (!access_token) {
    throw new api_error(400, "  failed to create  access token  ");
  }

  return res.status(200).json(
    new api_responce(
      200,
      {
        access_token,
        email: chack_email_in_out_db.email,
        id: chack_email_in_out_db.id,
      },
      " login success fully"
    )
  );
});

// forgot password
export const change_user_password = asyncFunction(async (req, res) => {
  // chack fields
  // chack email are exist or not then compare this  password
  // if  password match  then hash new password and update on our database
  // return responce
  const { email, old_password, new_password } = req.body;

  if (
    [email, old_password, new_password].some((field) => field.trim() === "")
  ) {
    throw new api_error(400, "all field are required ");
  }

  const chack_email_in_out_db = await prisma.user.findFirst({
    where: {
      email: email,
      is_active: true,
    },
    select: {
      password: true,
    },
  });
  if (!chack_email_in_out_db) {
    throw new api_error(404, "this email are not  exit ");
  }

  const matching_password_and_hash = bcrypt.compareSync(
    old_password,
    chack_email_in_out_db.password
  );
  if (!matching_password_and_hash) {
    throw new api_error(401, "Invalid credentials. Password does not match");
  }

  //  generate hash and chack hash are  generate or not
  const saltRounds = bcrypt.genSaltSync(10);

  const hash_password = bcrypt.hashSync(new_password, saltRounds);

  if (!hash_password) {
    return new api_error(400, "password hashing are failed , try again lata");
  }

  const update_user_password = await prisma.user.update({
    where: {
      email: email,
    },
    // @ts-ignore
    data: {
      password: hash_password,
    },
    select: {
      email: true,
    },
  });

  if (!update_user_password) {
    throw new api_error(400, "database entry  failed  try again");
  }

  return res
    .status(201)
    .json(
      new api_responce(
        201,
        { data: update_user_password },
        "success fully update your password"
      )
    );
});

export const addBalance = asyncFunction(
  asyncFunction(async (req, res) => {
    const { balance } = req.body;
    // @ts-ignore
    const userId: number = req.user.id;

    // chack data are exist or not
    //db:if balance exist then update otherwise create
    // return responce

    if (!balance) {
      throw new api_error(400, "all field are required");
    }

    const if_balance_Table_exist_then_update_otherwise_create =
      await prisma.balance.upsert({
        where: {
          user_id: userId,
        },
        update: {
          amount: { increment: balance },
        },
        create: {
          user_id: userId,
          amount: balance,
          createAt: new Date(),
        },
        select: {
          amount: true,
          updateAt: true,
        },
      });

    return res
      .status(201)
      .json(
        new api_responce(
          201,
          if_balance_Table_exist_then_update_otherwise_create,
          "success fully add balance"
        )
      );
  })
);

export const addChips = asyncFunction(
  asyncFunction(async (req, res) => {
    const { chips } = req.body;
    // @ts-ignore
    const userId: number = req.user.id;

    // chack data are exist or not
    //db:if balance exist then decrement balance  then  | if chips table exist  then update chips otherwise create table and add chips
    // return responce

    if (!chips) {
      throw new api_error(400, "all field are required");
    }

    const chack_balance_exist_then_buy_chips = await prisma.$transaction(
      async (tx) => {
        await tx.balance.update({
          where: {
            user_id: userId,
            amount: { gt: chips },
          },
          data: {
            amount: {
              decrement: chips,
            },
          },
        });

        const if_balance_Table_exist_then_update_otherwise_create =
          await tx.chip.upsert({
            where: {
              user_id: userId,
            },
            update: {
              count: { increment: chips },
            },
            create: {
              user_id: userId,
              count: chips,
              createAt: new Date(),
            },
            select: {
              count: true,
              updateAt: true,
            },
          });
        return if_balance_Table_exist_then_update_otherwise_create;
      }
    );

    if (!chack_balance_exist_then_buy_chips) {
      throw new api_error(401, "db Operation failed");
    }
    return res
      .status(201)
      .json(
        new api_responce(
          201,
          chack_balance_exist_then_buy_chips,
          "success fully add balance"
        )
      );
  })
);

export const convert_chips_to_balance = asyncFunction(async (req, res) => {
  const { chips } = req.body;
  // @ts-ignore
  const userId: number = req.user.id;

  // chack chips exist or not
  //then if user chips table chips exist then decrement ther chips and then update balance
  //then return responce
  if (!chips) {
    throw new api_error(400, "all field are required");
  }

  const decrease_chips_and_update_balance = await prisma.$transaction(
    async (tx) => {
      await tx.chip.update({
        where: {
          user_id: userId,
          count: { gte: chips },
        },
        data: {
          count: {
            decrement: chips,
          },
        },
      });

      const update_user_balance = await tx.balance.update({
        where: {
          user_id: userId,
        },
        data: {
          amount: { increment: chips },
        },
        select: {
          amount: true,
          updateAt: true,
        },
      });

      return update_user_balance;
    }
  );

  if (!decrease_chips_and_update_balance) {
    throw new api_error(400, " db update error");
  }

  return res
    .status(201)
    .json(
      new api_responce(
        201,
        decrease_chips_and_update_balance,
        "success fully  convert chips"
      )
    );
});
export const get_user_balance = asyncFunction(async (req, res) => {
  //@ts-ignore
  const userId: number = req.user.id;

  const get_user_balance = await prisma.balance.findFirst({
    where: {
      user_id: userId,
    },
    select: {
      amount: true,
    },
  });

  if (!get_user_balance) {
    throw new api_error(401, "db Operation failed");
  }
  return res
    .status(200)
    .json(
      new api_responce(200, get_user_balance, " success fully get balance ")
    );
});

export const get_user_chips = asyncFunction(async (req, res) => {
  //@ts-ignore
  const userId: number = req.user.id;

  const get_user_balance = await prisma.chip.findFirst({
    where: {
      user_id: userId,
    },
    select: {
      count: true,
    },
  });

  if (!get_user_balance) {
    throw new api_error(401, "db Operation failed");
  }
  return res
    .status(200)
    .json(
      new api_responce(200, get_user_balance, " success fully get all chips ")
    );
});

export const get_user_profile = asyncFunction(async (req, res) => {
  // @ts-ignore
  const userId: number = req.user.id;

  const user_profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email: true,
      updateAt: true,
      balances: {
        select: {
          amount: true,
        },
      },
      chips: {
        select: {
          count: true,
        },
      },
    },
  });

  if (!user_profile) {
    throw new api_error(401, "db Operation failed");
  }
  return res
    .status(200)
    .json(
      new api_responce(200, user_profile, "success fully get user profile")
    );
});
