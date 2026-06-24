# Kiddo SDUI – Server Driven UI Homepage Renderer

## Overview

Kiddo is a Q-commerce platform for kids and baby essentials. This project demonstrates a production-style Server Driven UI (SDUI) architecture built using React Native and TypeScript. The application dynamically renders a homepage based entirely on a backend-provided JSON payload, enabling rapid campaign launches and UI changes without requiring App Store or Play Store releases.

The application acts as a rendering engine that interprets server-provided component definitions, themes, campaigns, and actions to build the user interface at runtime.

---

# Features

### Server Driven UI (SDUI)

* Dynamic homepage rendering from JSON payloads
* Component Factory Registry pattern
* Runtime component mapping
* Zero app release requirement for homepage changes

### Supported Components

* Banner Hero
* Product Grid 2x2
* Dynamic Collection Carousel
* Full Screen Campaign Overlay

### Campaign Engine

Supports dynamic campaign switching:

1. Back to School
2. Summer Playhouse
3. Mystery Gift Carnival

Each campaign injects:

* Theme configuration
* Overlay configuration
* Marketing-specific content

### Dynamic Theming

Themes are injected through React Context.

Example:

```json
{
  "theme": {
    "primary": "#FF9933",
    "background": "#FFF5E6"
  }
}
```

All child components automatically receive updated colors when campaigns change.

### Universal Action Dispatcher

All component interactions are routed through a centralized action dispatcher.

Supported actions:

* ADD_TO_CART
* DEEP_LINK
* APPLY_MYSTERY_GIFT_COUPON

Benefits:

* Decoupled UI components
* Centralized business logic
* Easy action extensibility

### State Management

Uses Zustand for optimized state updates.

Features:

* Cart count updates
* Selective subscriptions
* No unnecessary page re-renders

### Performance Optimizations

* Single root FlashList / FlatList
* Nested horizontal virtualization
* React.memo boundaries
* Stable keyExtractors
* useCallback optimizations
* Context separation
* Store subscriptions

### Resilience

Unknown server components are handled gracefully.

Example:

```json
{
  "type": "NEW_COMPONENT_V2"
}
```

Unsupported components are ignored without crashing the application.

---

# Project Structure

```text
KiddoSDUI/
│
├── App.tsx
├── package.json
├── tsconfig.json
│
└── src/
    ├── actions/
    │   └── ActionDispatcher.ts
    │
    ├── components/
    │   ├── BannerHero.tsx
    │   ├── CartBadge.tsx
    │   ├── DynamicCollection.tsx
    │   ├── FullScreenOverlay.tsx
    │   ├── ProductCard.tsx
    │   ├── ProductGrid2x2.tsx
    │   └── UnknownComponent.tsx
    │
    ├── context/
    │   ├── CampaignContext.tsx
    │   └── ThemeContext.tsx
    │
    ├── hooks/
    │   └── useTheme.ts
    │
    ├── mocks/
    │   ├── campaigns.json
    │   └── homepage.json
    │
    ├── registry/
    │   └── ComponentRegistry.ts
    │
    ├── screens/
    │   └── HomeScreen.tsx
    │
    ├── store/
    │   └── cartStore.ts
    │
    └── types/
        └── schema.ts
```

---

# Architecture

```text
homepage.json
      │
      ▼
HomeScreen
      │
      ▼
Root FlatList / FlashList
      │
      ▼
Component Registry
      │
 ┌────┼────────────────────┐
 │    │                    │
 ▼    ▼                    ▼
BannerHero ProductGrid DynamicCollection
                           │
                           ▼
                      ProductCard
```

---

# Action Flow

```text
User Tap
   │
   ▼
Component
   │
   ▼
ActionDispatcher
   │
   ▼
Business Logic
   │
   ▼
Zustand Store
```

---

# Theme Flow

```text
Campaign
   │
   ▼
ThemeProvider
   │
   ▼
useTheme()
   │
   ▼
UI Components
```

---

# Installation

Create Expo project:

```bash
npx create-expo-app@latest KiddoSDUI --template blank-typescript
```

Install dependencies:

```bash
npm install zustand
npm install @shopify/flash-list
npm install lottie-react-native
```

Install project packages:

```bash
npm install
```

---

# Running the Application

Start Metro:

```bash
npx expo start
```

Clear cache:

```bash
npx expo start --clear
```

Run Android:

```bash
npx expo run:android
```

Run iOS:

```bash
npx expo run:ios
```

---

# Assignment Requirements Coverage

| Requirement                | Status |
| -------------------------- | ------ |
| Server Driven UI           | ✅      |
| Component Registry         | ✅      |
| Dynamic Collections        | ✅      |
| Nested Horizontal Lists    | ✅      |
| Action Dispatcher          | ✅      |
| Theme Injection            | ✅      |
| Campaign Engine            | ✅      |
| Overlay Support            | ✅      |
| Graceful Failure Handling  | ✅      |
| TypeScript Strict Mode     | ✅      |
| State Optimization         | ✅      |
| Performance Optimization   | ✅      |
| React.memo Usage           | ✅      |
| Runtime Campaign Switching | ✅      |

---

# Future Improvements

* Remote API integration
* OTA campaign delivery
* Analytics tracking
* Deep link navigation integration
* Dynamic layout experiments (A/B Testing)
* Image caching
* Offline support
* Server-side schema validation

---

# Author

Rohit Nayak

React Native | Java | Spring Boot Developer
