# Matrix Package

## Overview

The **Matrix Package** (`@poker/matrix`) is a shared utility package providing common helper functions, algorithms, data structures, and constants used across all services in the POKER monorepo. It serves as a centralized library for reusable code.

## Architecture

```
packages/matrix/
├── src/
│   ├── algorithms/              # Algorithms and computations
│   │   ├── shuffle.ts           # Shuffling algorithms
│   │   ├── hash.ts              # Hashing utilities
│   │   ├── random.ts            # Random number generation
│   │   └── index.ts
│   ├── constants/               # Application constants
│   │   ├── cards.ts             # Card-related constants
│   │   ├── game.ts              # Game-related constants
│   │   ├── errors.ts            # Error codes and messages
│   │   └── index.ts
│   ├── formatters/              # Data formatters
│   │   ├── currency.ts          # Currency formatting
│   │   ├── date.ts              # Date formatting
│   │   ├── card.ts              # Card formatting
│   │   └── index.ts
│   ├── validators/              # Validation utilities
│   │   ├── email.ts
│   │   ├── password.ts
│   │   ├── username.ts
│   │   └── index.ts
│   ├── helpers/                 # General helpers
│   │   ├── string.ts
│   │   ├── array.ts
│   │   ├── object.ts
│   │   └── index.ts
│   ├── types/                   # Shared TypeScript types
│   │   ├── common.ts
│   │   ├── game.ts
│   │   ├── user.ts
│   │   └── index.ts
│   ├── crypto/                  # Cryptographic utilities
│   │   ├── encryption.ts
│   │   ├── hashing.ts
│   │   └── index.ts
│   └── index.ts                 # Main export
├── tests/
├── package.json
└── tsconfig.json
```

## Features

### Core Utilities

- **Algorithms**: Shuffling, sorting, searching
- **Constants**: Game rules, card definitions, error codes
- **Formatters**: Currency, date, time, card display
- **Validators**: Email, password, username validation
- **Crypto**: Encryption, hashing, random generation
- **Type Definitions**: Shared TypeScript types
- **Helpers**: String, array, object manipulation

## Installation

```json
{
  "dependencies": {
    "@poker/matrix": "workspace:*"
  }
}
```

## Usage

### Constants

```typescript
import {
  CARD_RANKS,
  CARD_SUITS,
  HAND_RANKINGS,
  GAME_TYPES,
  POKER_ACTIONS
} from '@poker/matrix';

// Card constants
console.log(CARD_RANKS); // ['2', '3', '4', ..., 'K', 'A']
console.log(CARD_SUITS); // ['H', 'D', 'C', 'S']

// Hand rankings
console.log(HAND_RANKINGS);
/*
{
  ROYAL_FLUSH: 10,
  STRAIGHT_FLUSH: 9,
  FOUR_OF_A_KIND: 8,
  FULL_HOUSE: 7,
  FLUSH: 6,
  STRAIGHT: 5,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  ONE_PAIR: 2,
  HIGH_CARD: 1
}
*/

// Game types
console.log(GAME_TYPES);
/*
{
  TEXAS_HOLDEM: 'texas-holdem',
  OMAHA: 'omaha',
  SEVEN_CARD_STUD: 'seven-card-stud'
}
*/

// Poker actions
console.log(POKER_ACTIONS); // ['fold', 'check', 'call', 'bet', 'raise', 'all-in']
```

### Constants Implementation

```typescript
// src/constants/cards.ts
export const CARD_RANKS = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10',
  'J', 'Q', 'K', 'A'
] as const;

export const CARD_SUITS = ['H', 'D', 'C', 'S'] as const;

export const CARD_RANK_VALUES: Record<string, number> = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
  '7': 7, '8': 8, '9': 9, '10': 10,
  'J': 11, 'Q': 12, 'K': 13, 'A': 14
};

export const CARD_UNICODE: Record<string, Record<string, string>> = {
  'H': {
    'A': '🂱', 'K': '🂾', 'Q': '🂽', 'J': '🂻',
    '10': '🂺', '9': '🂹', '8': '🂸', '7': '🂷',
    '6': '🂶', '5': '🂵', '4': '🂴', '3': '🂳', '2': '🂲'
  },
  'D': {
    'A': '🃁', 'K': '🃎', 'Q': '🃍', 'J': '🃋',
    '10': '🃊', '9': '🃉', '8': '🃈', '7': '🃇',
    '6': '🃆', '5': '🃅', '4': '🃄', '3': '🃃', '2': '🃂'
  },
  'C': {
    'A': '🃑', 'K': '🃞', 'Q': '🃝', 'J': '🃛',
    '10': '🃚', '9': '🃙', '8': '🃘', '7': '🃗',
    '6': '🃖', '5': '🃕', '4': '🃔', '3': '🃓', '2': '🃒'
  },
  'S': {
    'A': '🂡', 'K': '🂮', 'Q': '🂭', 'J': '🂫',
    '10': '🂪', '9': '🂩', '8': '🂨', '7': '🂧',
    '6': '🂦', '5': '🂥', '4': '🂤', '3': '🂣', '2': '🂢'
  }
};

// src/constants/game.ts
export const HAND_RANKINGS = {
  ROYAL_FLUSH: 10,
  STRAIGHT_FLUSH: 9,
  FOUR_OF_A_KIND: 8,
  FULL_HOUSE: 7,
  FLUSH: 6,
  STRAIGHT: 5,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  ONE_PAIR: 2,
  HIGH_CARD: 1
} as const;

export const GAME_TYPES = {
  TEXAS_HOLDEM: 'texas-holdem',
  OMAHA: 'omaha',
  SEVEN_CARD_STUD: 'seven-card-stud',
  FIVE_CARD_DRAW: 'five-card-draw'
} as const;

export const POKER_ACTIONS = [
  'fold',
  'check',
  'call',
  'bet',
  'raise',
  'all-in'
] as const;

export const GAME_ROUNDS = [
  'preflop',
  'flop',
  'turn',
  'river',
  'showdown'
] as const;

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 10;

export const DEFAULT_BLINDS = {
  small: 10,
  big: 20
};
```

### Algorithms

#### Shuffle Algorithm

```typescript
import { shuffleArray, fisherYatesShuffle } from '@poker/matrix';

// Basic shuffle
const deck = [...cards];
const shuffled = shuffleArray(deck);

// Cryptographically secure shuffle
const secureShuffled = fisherYatesShuffle(deck, true);
```

#### Implementation

```typescript
// src/algorithms/shuffle.ts
import crypto from 'crypto';

/**
 * Fisher-Yates shuffle algorithm
 * @param array - Array to shuffle
 * @param secure - Use crypto-secure random
 */
export function fisherYatesShuffle<T>(
  array: T[],
  secure: boolean = false
): T[] {
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j: number;
    
    if (secure) {
      // Cryptographically secure random
      const randomBytes = crypto.randomBytes(4);
      const randomValue = randomBytes.readUInt32BE(0);
      j = Math.floor((randomValue / 0xFFFFFFFF) * (i + 1));
    } else {
      // Standard Math.random
      j = Math.floor(Math.random() * (i + 1));
    }
    
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Alias for convenience
export const shuffleArray = fisherYatesShuffle;

/**
 * Generate shuffle seed for provably fair gaming
 */
export function generateShuffleSeed(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Create shuffle hash for verification
 */
export function createShuffleHash(seed: string, deckId: string): string {
  return crypto
    .createHash('sha256')
    .update(seed + deckId)
    .digest('hex');
}
```

#### Random Number Generation

```typescript
// src/algorithms/random.ts
import crypto from 'crypto';

/**
 * Generate cryptographically secure random integer
 */
export function secureRandomInt(min: number, max: number): number {
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const maxValid = Math.floor(0x100 ** bytesNeeded / range) * range - 1;
  
  let randomValue: number;
  
  do {
    const randomBytes = crypto.randomBytes(bytesNeeded);
    randomValue = 0;
    for (let i = 0; i < bytesNeeded; i++) {
      randomValue = (randomValue << 8) + randomBytes[i];
    }
  } while (randomValue > maxValid);
  
  return min + (randomValue % range);
}

/**
 * Generate random UUID v4
 */
export function generateUUID(): string {
  return crypto.randomUUID();
}

/**
 * Generate random string
 */
export function generateRandomString(
  length: number,
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string {
  let result = '';
  const charsetLength = charset.length;
  
  for (let i = 0; i < length; i++) {
    const randomIndex = secureRandomInt(0, charsetLength - 1);
    result += charset[randomIndex];
  }
  
  return result;
}
```

### Formatters

```typescript
import {
  formatCurrency,
  formatDate,
  formatTimeAgo,
  formatCard,
  formatCardUnicode
} from '@poker/matrix';

// Currency formatting
formatCurrency(1500); // "$1,500"
formatCurrency(1500, 'EUR'); // "€1,500"

// Date formatting
formatDate(new Date()); // "Jan 03, 2025"
formatTimeAgo(new Date(Date.now() - 3600000)); // "1 hour ago"

// Card formatting
formatCard({ rank: 'A', suit: 'H' }); // "A♥"
formatCardUnicode({ rank: 'K', suit: 'S' }); // "🂮"
```

#### Implementation

```typescript
// src/formatters/currency.ts
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount);
}

export function formatChips(chips: number): string {
  if (chips >= 1000000) {
    return `${(chips / 1000000).toFixed(1)}M`;
  }
  if (chips >= 1000) {
    return `${(chips / 1000).toFixed(1)}K`;
  }
  return chips.toString();
}

// src/formatters/date.ts
export function formatDate(date: Date, format: string = 'MMM DD, YYYY'): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return format
    .replace('MMM', month)
    .replace('DD', day)
    .replace('YYYY', year.toString());
}

export function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  
  return 'just now';
}

// src/formatters/card.ts
import { CARD_UNICODE } from '../constants';

const SUIT_SYMBOLS: Record<string, string> = {
  'H': '♥',
  'D': '♦',
  'C': '♣',
  'S': '♠'
};

export function formatCard(card: { rank: string; suit: string }): string {
  return `${card.rank}${SUIT_SYMBOLS[card.suit]}`;
}

export function formatCardUnicode(card: { rank: string; suit: string }): string {
  return CARD_UNICODE[card.suit][card.rank];
}

export function formatHand(cards: Array<{ rank: string; suit: string }>): string {
  return cards.map(formatCard).join(' ');
}
```

### Validators

```typescript
import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
  validatePasswordStrength
} from '@poker/matrix';

// Email validation
isValidEmail('player@example.com'); // true
isValidEmail('invalid-email'); // false

// Password validation
isValidPassword('SecurePass123!'); // true
isValidPassword('weak'); // false

// Username validation
isValidUsername('player_123'); // true
isValidUsername('ab'); // false (too short)

// Password strength
validatePasswordStrength('SecurePass123!');
/*
{
  valid: true,
  strength: 'strong',
  score: 4,
  feedback: []
}
*/
```

#### Implementation

```typescript
// src/validators/email.ts
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// src/validators/password.ts
export interface PasswordStrength {
  valid: boolean;
  strength: 'weak' | 'medium' | 'strong' | 'very-strong';
  score: number;
  feedback: string[];
}

export function isValidPassword(password: string): boolean {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

export function validatePasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  // Length check
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  else feedback.push('Use at least 12 characters');

  // Complexity checks
  if (/[A-Z]/.test(password)) score++;
  else feedback.push('Include uppercase letters');

  if (/[a-z]/.test(password)) score++;
  else feedback.push('Include lowercase letters');

  if (/[0-9]/.test(password)) score++;
  else feedback.push('Include numbers');

  if (/[^A-Za-z0-9]/.test(password)) score++;
  else feedback.push('Include special characters');

  // Common patterns check
  if (/123|abc|password/i.test(password)) {
    score--;
    feedback.push('Avoid common patterns');
  }

  const strengthMap = ['weak', 'weak', 'medium', 'medium', 'strong', 'very-strong'];
  const strength = strengthMap[Math.min(score, 5)] as any;

  return {
    valid: score >= 4,
    strength,
    score,
    feedback
  };
}

// src/validators/username.ts
export function isValidUsername(username: string): boolean {
  return (
    username.length >= 3 &&
    username.length <= 50 &&
    /^[a-zA-Z0-9_]+$/.test(username)
  );
}

export function sanitizeUsername(username: string): string {
  return username
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, '')
    .slice(0, 50);
}
```

### Helper Functions

```typescript
import {
  capitalize,
  truncate,
  slugify,
  uniqueArray,
  groupBy,
  deepClone,
  isEmpty
} from '@poker/matrix';

// String helpers
capitalize('hello world'); // "Hello World"
truncate('Very long text...', 10); // "Very long..."
slugify('Hello World!'); // "hello-world"

// Array helpers
uniqueArray([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
groupBy([{age: 20}, {age: 30}, {age: 20}], 'age');
// { 20: [{age: 20}, {age: 20}], 30: [{age: 30}] }

// Object helpers
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
isEmpty({}); // true
isEmpty({ a: 1 }); // false
```

#### Implementation

```typescript
// src/helpers/string.ts
export function capitalize(str: string): string {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

// src/helpers/array.ts
export function uniqueArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// src/helpers/object.ts
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) result[key] = obj[key];
  });
  return result;
}

export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result as Omit<T, K>;
}
```

### Cryptographic Utilities

```typescript
import {
  hashPassword,
  comparePassword,
  encrypt,
  decrypt,
  generateToken
} from '@poker/matrix';

// Password hashing
const hashed = await hashPassword('myPassword123');
const isValid = await comparePassword('myPassword123', hashed); // true

// Encryption
const encrypted = encrypt('secret data', 'encryption-key');
const decrypted = decrypt(encrypted, 'encryption-key'); // "secret data"

// Token generation
const token = generateToken(32); // Random 32-byte token
```

#### Implementation

```typescript
// src/crypto/hashing.ts
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function hashString(str: string, algorithm: string = 'sha256'): string {
  return crypto.createHash(algorithm).update(str).digest('hex');
}

// src/crypto/encryption.ts
export function encrypt(text: string, key: string): string {
  const algorithm = 'aes-256-cbc';
  const iv = crypto.randomBytes(16);
  const keyBuffer = crypto.scryptSync(key, 'salt', 32);
  
  const cipher = crypto.createCipheriv(algorithm, keyBuffer, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return iv.toString('hex') + ':' + encrypted;
}

export function decrypt(encryptedText: string, key: string): string {
  const algorithm = 'aes-256-cbc';
  const [ivHex, encrypted] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const keyBuffer = crypto.scryptSync(key, 'salt', 32);
  
  const decipher = crypto.createDecipheriv(algorithm, keyBuffer, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

export function generateToken(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex');
}
```

### Type Definitions

```typescript
// src/types/common.ts
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type UUID = string;
export type Timestamp = Date | string;

export interface PaginationParams {
  page: number;
  limit: number;
  skip?: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

// src/types/game.ts
export interface Card {
  rank: string;
  suit: string;
  value?: number;
  unicode?: string;
}

export type GameType = 'texas-holdem' | 'omaha' | 'seven-card-stud';
export type GameStatus = 'waiting' | 'active' | 'paused' | 'completed';
export type PlayerStatus = 'active' | 'folded' | 'all-in' | 'sitting-out';
export type PokerAction = 'fold' | 'check' | 'call' | 'bet' | 'raise' | 'all-in';
export type GameRound = 'preflop' | 'flop' | 'turn' | 'river' | 'showdown';

export interface HandRanking {
  rank: number;
  name: string;
  cards: Card[];
  description: string;
}
```

## Testing

```typescript
// tests/algorithms/shuffle.test.ts
import { fisherYatesShuffle } from '../src/algorithms/shuffle';

describe('Shuffle Algorithm', () => {
  it('should shuffle array', () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = fisherYatesShuffle(original);
    
    expect(shuffled).toHaveLength(original.length);
    expect(shuffled.sort()).toEqual(original);
  });

  it('should not mutate original array', () => {
    const original = [1, 2, 3];
    fisherYatesShuffle(original);
    expect(original).toEqual([1, 2, 3]);
  });
});
```

## Best Practices

1. **Keep functions pure** when possible
2. **Type everything** with TypeScript
3. **Test thoroughly**, especially algorithms
4. **Document complex functions** with JSDoc
5. **Use constants** instead of magic numbers
6. **Handle edge cases** properly
7. **Make utilities tree-shakeable**
8. **Keep dependencies minimal**

## Dependencies

```json
{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "crypto": "built-in"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6"
  }
}
```

## Contributing

When adding new utilities:

1. Add to appropriate directory
2. Export from index files
3. Add TypeScript types
4. Write tests
5. Update documentation

## License

[MIT License](../../LICENSE)

---

**Note**: Shared across all POKER services