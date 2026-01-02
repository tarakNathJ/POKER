import { template } from "./cards_template.js";

class cards_suffle_algo {
  private cards_template: string[] = [];

  constructor() {
    if (!template || template.length === 0) {
      throw new Error.arguments("card template not exit");
    }
    this.cards_template = template;
  }

  public async directions(algo_number: number) {
    // cach user input are valid or not
    if (1 > algo_number && algo_number > 3) {
      throw new Error.arguments("invalid algo number");
    }

    //chack this number . and base on this number assine function
    let result;
    switch (algo_number) {
      case 1:
        result = await this.sattolos_algorithm();

        break;
      case 2:
        result = await this.merge_shuffle();

        break;
      case 3:
        result = await this.HEK_shuffle();

        break;
      default:
        result = null;
    }
    return result;
  }

  // deep copy in your card template
  private deepCopy() {
    return structuredClone
      ? structuredClone(this.cards_template)
      : JSON.parse(JSON.stringify(this.cards_template));
  }

  // Sattolo's Algorithm , Reservoir Sampling ,MergeShuffle ,Shuffling by Sorting, HEK Shuffle  : to shuffle your card
  private async sattolos_algorithm() {
    const Deck = await this.deepCopy();

    for (let i = Deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [Deck[i], Deck[j]] = [Deck[j], Deck[i]];
    }
    return { cards: Deck, algo_name: "Sattolo's Algorithm" };
  }

  //****************************************************

  private async merge_shuffle() {
    const arr = this.deepCopy();

    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    const shuffled = [];

    while (left.length || right.length) {
      if (Math.random() < 0.5 && left.length) {
        shuffled.push(left.shift());
      } else if (right.length) {
        shuffled.push(right.shift());
      }
    }
    return { cards: shuffled, algo_name: "MergeShuffle" };
  }
  //******************************************************** */

  private async HEK_shuffle() {
    const arr = this.deepCopy();
    const shuffled = arr
      .map((card: any) => ({ card, key: crypto.randomUUID() }))
      .sort((a: any, b: any) => a.key.localeCompare(b.key))
      .map((obj: any) => obj.card);

    return { cards: shuffled, algo_name: "HEK Shuffle" };
  }
}

export default cards_suffle_algo;
