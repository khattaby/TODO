# TODO - App

A full-stack TODO application built with React, Node.js, Express, and MongoDB Atlas.

## Features

- ✅ Add, complete, and delete todos
- ✅ Real-time updates
- ✅ Responsive design

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas

## Quick Start

1. **Clone and install**
   ```bash
   git clone https://github.com/khattaby/TODO
   cd TODO
   npm install
   ```

2. **Setup environment**
   Create `backend/.env`:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3100
   ```

3. **Run the app**
   ```bash
   npm start
   ```

4. **Open browser**
   - Frontend: http://localhost:5174/
   - Backend API: http://localhost:3100/

## API Endpoints

- `GET /get` - Get todos
- `POST /add` - Add todo
- `PUT /:id` - Update todo
- `DELETE /:id` - Delete todo

