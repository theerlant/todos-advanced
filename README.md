# Todos Advanced

A modern, advanced Todo application built with React, Redux, and Tailwind CSS. This project demonstrates state management using Redux and asynchronous actions with Redux Thunk.

## Tech Stack

- **Framework**: React 19 + Vite
- **State Management**: Redux & React-Redux
- **Middleware**: Redux Thunk
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios

## 📁 Project Structure

The project follows a clean and modular architecture, separating UI components from global state management and custom logic:

```
src/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── store/           # Redux setup
│   ├── actions/     # Action creators and thunks
│   ├── reducers/    # State reducers
│   ├── types/       # Action type constants
│   └── index.js     # Redux store configuration
├── App.jsx          # Main application layout
├── main.jsx         # React application entry point
└── index.css        # Global styles and Tailwind configuration
```

## Key Features

- **Global State Management**: Leverages Redux to handle state efficiently across the entire application without prop drilling.
- **Asynchronous Data Fetching**: Uses Redux Thunk to fetch dummy todo data from `https://jsonplaceholder.typicode.com/todos` on initial load.
- **Custom Hooks**: Business logic and Redux subscriptions are abstracted into custom hooks (`useTodos`) to keep components clean.
- **Modern UI**: Styled with the latest Tailwind CSS v4, featuring a sleek dark mode out of the box and responsive layouts.
- **Component Separation**: UI sections are cleanly divided into specialized components (Header, AddTodo, TodoInfo, TodoList).

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js and a package manager like `pnpm`, `npm`, or `yarn` installed.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:
   ```bash
   pnpm install
   ```
3. Start the Vite development server:
   ```bash
   pnpm dev
   ```
4. Open your browser and visit `http://localhost:5173` (or the URL provided in your terminal).
