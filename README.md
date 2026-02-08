# Missy — A Valentine’s Day Website for Tanya

Calm, warm, intimate single-page experience built with the MERN stack.

## Folders
- `client/` — React (Vite) + Tailwind frontend
- `server/` — Express + Mongoose backend

## Quick Start (Local)

### 1. Install server dependencies
```bash
cd server
npm install
```

### 2. Install client dependencies
```bash
cd ../client
npm install
```

### 3. Start backend
```bash
cd ../server
npm run dev
```

### 4. Start frontend
```bash
cd ../client
npm run dev
```

### 5. Open the URL from the Vite server
Usually `http://localhost:5173`.

## Notes
- Add a `.env` in `server/` with `MONGODB_URI` and `PORT`.
- Place a preferred audio file and update `client/src/components/AudioPlayer.jsx` or use the remote sample URL in the code.
- Seed the database with sample content:
```bash
cd server
npm run seed
```
