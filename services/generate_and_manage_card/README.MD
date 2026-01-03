# Generate and Manage Card Service

## Overview

The **Generate and Manage Card Service** is a core microservice responsible for managing the poker game logic, including card deck generation, shuffling, dealing, hand evaluation, and game state management. This service handles all card-related operations and ensures fair gameplay.

## Architecture

```
generate_and_manage_card/
├── src/
│   ├── controllers/           # Request handlers for card operations
│   ├── services/              # Business logic for card management
│   │   ├── deckService.ts     # Deck generation and shuffling
│   │   ├── dealerService.ts   # Card dealing logic
│   │   ├── handEvaluator.ts   # Poker hand evaluation
│   │   └── gameStateService.ts # Game state management
│   ├── models/                # Data models for cards and games
│   ├── middleware/            # Authentication and validation
│   ├── routes/                # API routes
│   ├── utils/                 # Helper functions
│   │   ├── cardGenerator.ts   # Card generation utilities
│   │   ├── shuffleAlgorithm.ts # Shuffle algorithms
│   │   └── handRanker.ts      # Hand ranking logic
│   └── config/                # Configuration files
├── tests/                     # Test files
├── package.json
└── tsconfig.json
```

## Features

### Core Functionality

- **Deck Management**: Create and manage 52-card poker decks
- **Card Shuffling**: Cryptographically secure shuffling algorithms (Fisher-Yates)
- **Card Dealing**: Deal cards to players and community cards
- **Hand Evaluation**: Evaluate poker hands (Texas Hold'em, Omaha, etc.)
- **Game State Management**: Track current game state, betting rounds, and player actions
- **Multiple Game Formats**: Support for different poker variants
- **Burn Cards**: Proper implementation of burn cards before dealing
- **Side Pot Calculation**: Handle multiple side pots correctly
- **Showdown Logic**: Determine winners at showdown

### Advanced Features

- **Provably Fair Gaming**: Cryptographic verification of card shuffle
- **Replay Functionality**: Store and replay game hands
- **Hand History**: Generate detailed hand histories
- **Tournament Support**: Multi-table tournament card management
- **Real-time Updates**: WebSocket support for live game updates

## Card Representation

### Card Structure

```typescript
interface Card {
  id: string; // Unique identifier
  rank: Rank; // 2-10, J, Q, K, A
  suit: Suit; // Hearts, Diamonds, Clubs, Spades
  value: number; // Numeric value for comparison
  unicode: string; // Unicode character for display
}

enum Rank {
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  JACK = "J",
  QUEEN = "Q",
  KING = "K",
  ACE = "A",
}

enum Suit {
  HEARTS = "H",
  DIAMONDS = "D",
  CLUBS = "C",
  SPADES = "S",
}
```

### Hand Rankings (Texas Hold'em)

1. **Royal Flush**: A, K, Q, J, 10 of the same suit
2. **Straight Flush**: Five consecutive cards of the same suit
3. **Four of a Kind**: Four cards of the same rank
4. **Full House**: Three of a kind + a pair
5. **Flush**: Five cards of the same suit
6. **Straight**: Five consecutive cards of different suits
7. **Three of a Kind**: Three cards of the same rank
8. **Two Pair**: Two different pairs
9. **One Pair**: Two cards of the same rank
10. **High Card**: Highest card when no other hand is made

## API Endpoints

### Deck Management

#### Create New Deck

```
GRPC : ManageCard

{
  "gameId": "game-uuid-here",
  
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "deckId": "deck-uuid-here",
    "gameId": "game-uuid-here",
    "cardCount": 52,
    "shuffled": true,
    "createdAt": "2025-01-03T10:30:00Z"
  }
}
```
