# Database Package

## Overview

The **Database Package** (`@poker/database`) is a shared package providing unified database models, schemas, migrations, and connection management for all services in the POKER monorepo. It ensures consistency across microservices and provides a single source of truth for data structures.

## Architecture

```
packages/database/
├── src/
│   ├── models/              # ORM models
│   │   ├── User.ts
│   │   ├── Game.ts
│   │   ├── Player.ts
│   │   ├── Card.ts
│   │   ├── Transaction.ts
│   │   └── index.ts
│   ├── schemas/             # Validation schemas
│   │   ├── userSchema.ts
│   │   ├── gameSchema.ts
│   │   └── index.ts
│   ├── migrations/          # Database migrations
│   │   ├── 001_initial.ts
│   │   ├── 002_add_users.ts
│   │   └── ...
│   ├── seeds/               # Seed data
│   │   └── dev.ts
│   ├── config/              # Database configuration
│   │   ├── database.ts
│   │   └── connection.ts
│   └── utils/               # Database utilities
│       ├── query.ts
│       └── transaction.ts
├── prisma/                  # Prisma schema (if using Prisma)
│   └── schema.prisma
├── tests/
├── package.json
└── tsconfig.json
```

## Features

### Core Functionality

- **Unified Data Models**: Shared models across all services
- **Type Safety**: Full TypeScript support with type definitions
- **Connection Pooling**: Efficient database connection management
- **Migration System**: Version-controlled schema changes
- **Seed Data**: Development and testing data
- **Query Builders**: Reusable query functions
- **Transaction Support**: ACID transaction helpers
- **Validation**: Input validation with Zod or Joi
- **Soft Deletes**: Logical deletion support
- **Audit Trail**: Automatic created_at, updated_at tracking

### Supported ORMs

- **TypeORM**: Primary ORM (recommended)
- **Prisma**: Alternative ORM support
- **Sequelize**: Legacy support

## Database Schema

### Entity Relationship Diagram

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    Users    │◄──────│   Players   │──────►│    Games    │
└─────────────┘       └─────────────┘       └─────────────┘
       │                     │                      │
       │                     │                      │
       ▼                     ▼                      ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   Tokens    │       │   Actions   │       │    Cards    │
└─────────────┘       └─────────────┘       └─────────────┘
       │                                            │
       │                                            │
       ▼                                            ▼
┌─────────────┐                            ┌─────────────┐
│Transactions │                            │Hand History │
└─────────────┘                            └─────────────┘
```

### Core Models

#### User Model

```typescript
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 50 })
  username: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ name: 'password_hash', length: 255 })
  passwordHash: string;

  @Column({ name: 'first_name', length: 100, nullable: true })
  firstName?: string;

  @Column({ name: 'last_name', length: 100, nullable: true })
  lastName?: string;

  @Column({ name: 'avatar_url', type: 'text', nullable: true })
  avatarUrl?: string;

  @Column({ length: 20, default: 'player' })
  role: 'player' | 'admin' | 'moderator';

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  balance: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'last_login', type: 'timestamp', nullable: true })
  lastLogin?: Date;

  @OneToMany(() => Player, player => player.user)
  players: Player[];

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];
}
```

#### Game Model

```typescript
@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ name: 'game_type', length: 50 })
  gameType: 'texas-holdem' | 'omaha' | 'seven-card-stud';

  @Column({ name: 'max_players', type: 'integer', default: 9 })
  maxPlayers: number;

  @Column({ name: 'small_blind', type: 'integer' })
  smallBlind: number;

  @Column({ name: 'big_blind', type: 'integer' })
  bigBlind: number;

  @Column({ name: 'min_buy_in', type: 'integer' })
  minBuyIn: number;

  @Column({ name: 'max_buy_in', type: 'integer' })
  maxBuyIn: number;

  @Column({ length: 20, default: 'waiting' })
  status: 'waiting' | 'active' | 'paused' | 'completed';

  @Column({ name: 'current_round', length: 20, nullable: true })
  currentRound?: 'preflop' | 'flop' | 'turn' | 'river' | 'showdown';

  @Column({ type: 'integer', default: 0 })
  pot: number;

  @Column({ name: 'dealer_position', type: 'integer', default: 0 })
  dealerPosition: number;

  @Column({ name: 'current_bet', type: 'integer', default: 0 })
  currentBet: number;

  @Column({ type: 'jsonb', nullable: true })
  communityCards?: any[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'started_at', type: 'timestamp', nullable: true })
  startedAt?: Date;

  @Column({ name: 'ended_at', type: 'timestamp', nullable: true })
  endedAt?: Date;

  @OneToMany(() => Player, player => player.game)
  players: Player[];

  @OneToMany(() => Card, card => card.game)
  cards: Card[];
}
```

#### Player Model

```typescript
@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.players)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @ManyToOne(() => Game, game => game.players)
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @Column({ name: 'game_id', type: 'uuid' })
  gameId: string;

  @Column({ type: 'integer' })
  position: number;

  @Column({ type: 'integer' })
  chips: number;

  @Column({ type: 'integer', default: 0 })
  bet: number;

  @Column({ length: 20, default: 'active' })
  status: 'active' | 'folded' | 'all-in' | 'sitting-out';

  @Column({ name: 'is_dealer', default: false })
  isDealer: boolean;

  @Column({ name: 'is_small_blind', default: false })
  isSmallBlind: boolean;

  @Column({ name: 'is_big_blind', default: false })
  isBigBlind: boolean;

  @Column({ type: 'jsonb', nullable: true })
  holeCards?: any[];

  @CreateDateColumn({ name: 'joined_at' })
  joinedAt: Date;

  @Column({ name: 'left_at', type: 'timestamp', nullable: true })
  leftAt?: Date;

  @OneToMany(() => Action, action => action.player)
  actions: Action[];
}
```

#### Card Model

```typescript
@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Game, game => game.cards)
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @Column({ name: 'game_id', type: 'uuid' })
  gameId: string;

  @Column({ length: 2 })
  rank: string;

  @Column({ length: 1 })
  suit: string;

  @Column({ name: 'card_type', length: 20 })
  cardType: 'hole' | 'community' | 'burn';

  @Column({ name: 'player_id', type: 'uuid', nullable: true })
  playerId?: string;

  @Column({ type: 'integer', nullable: true })
  position?: number;

  @CreateDateColumn({ name: 'dealt_at' })
  dealtAt: Date;
}
```

#### Action Model

```typescript
@Entity('actions')
export class Action {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Player, player => player.actions)
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @Column({ name: 'player_id', type: 'uuid' })
  playerId: string;

  @Column({ name: 'game_id', type: 'uuid' })
  gameId: string;

  @Column({ length: 20 })
  action: 'fold' | 'check' | 'call' | 'bet' | 'raise' | 'all-in';

  @Column({ type: 'integer', nullable: true })
  amount?: number;

  @Column({ length: 20 })
  round: 'preflop' | 'flop' | 'turn' | 'river';

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
```

#### Transaction Model

```typescript
@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ length: 20 })
  type: 'deposit' | 'withdraw' | 'win' | 'loss' | 'buy-in' | 'cash-out';

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, name: 'balance_before' })
  balanceBefore: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, name: 'balance_after' })
  balanceAfter: number;

  @Column({ length: 20, default: 'completed' })
  status: 'pending' | 'completed' | 'failed' | 'cancelled';

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ name: 'game_id', type: 'uuid', nullable: true })
  gameId?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
```
