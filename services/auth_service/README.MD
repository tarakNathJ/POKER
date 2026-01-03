# Auth Service

## Overview

The **Auth Service** is a microservice responsible for handling all authentication and authorization operations in the POKER application. It provides secure user registration, login, token management, and session handling functionalities.

## Architecture

This service is built as part of the POKER TurboRepo monorepo and follows a microservices architecture pattern.

```
auth_service/
├── src/
│   ├── controllers/       # Request handlers
│   ├── services/          # Business logic
│   ├── models/            # Data models
│   ├── middleware/        # Authentication middleware
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions
│   └── config/            # Configuration files
├── tests/                 # Test files
├── package.json
└── tsconfig.json
```

## Features

### Core Functionality

- **User Registration**: Secure user account creation with email verification
- **User Login**: JWT-based authentication with refresh tokens
- **Password Management**: Password hashing (bcrypt), reset, and recovery
- **Token Management**: JWT token generation, validation, and refresh

- **Multi-Factor Authentication (MFA)**: Optional 2FA support
- **Role-Based Access Control (RBAC)**: User permissions and roles

### Security Features

- Password hashing with bcrypt
- JWT tokens with expiration
- Refresh token rotation
- Rate limiting on authentication endpoints
- Account lockout after failed attempts
- Email verification for new accounts
- Secure password reset flow
- CORS configuration
- Input validation and sanitization

## API Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "player123",
  "email": "player@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "data": {
    "userId": "uuid-here",
    "email": "player@example.com"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "player@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "accessToken": "jwt-token-here",
    "refreshToken": "refresh-token-here",
    "user": {
      "id": "uuid-here",
      "username": "player123",
      "email": "player@example.com",
      "role": "player"
    }
  }
}
```

#### Refresh Token
```http
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "refresh-token-here"
}
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer <access-token>
```

#### Verify Email
```http
GET /api/auth/verify-email?token=<verification-token>
```

### Password Management

#### Forgot Password
```http
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "player@example.com"
}
```

#### Reset Password
```http
POST /api/auth/reset-password
Content-Type: application/json

{
  "token": "reset-token-here",
  "newPassword": "NewSecurePass123!"
}
```

#### Change Password
```http
PUT /api/auth/change-password
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "currentPassword": "SecurePass123!",
  "newPassword": "NewSecurePass456!"
}
```

### User Profile

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <access-token>
```

#### Update Profile
```http
PUT /api/auth/profile
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "avatar": "url-to-avatar"
}
```
