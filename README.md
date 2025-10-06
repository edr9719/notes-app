# Notes App

A modern React note-taking application built with Vite and styled with Tailwind CSS. Create, organize, and manage your notes with categories and priority levels.

## Features

- ✅ Create and manage notes
- 📝 Rich text descriptions
- 🏷️ Categorize notes (Work, Personal, Ideas)
- 🎯 Set priority levels (High, Medium, Low)
- 🎨 Clean, modern UI with Tailwind CSS
- ⚡ Fast development with Vite

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd notes-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── NoteForm.jsx    # Note creation form
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the linter: `npm run lint`
5. Submit a pull request
