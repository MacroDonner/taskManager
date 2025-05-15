# 📝 Task Manager CLI + Web (Node.js)

A simple task manager built with Node.js that supports both **command-line interface** and a **web-based interface**. Tasks are stored locally in a JSON file.

## 🚀 Features

- View, add, complete, and delete tasks
- Persistent storage using a JSON file
- Web interface using Express + HTML + JS
- REST API support (GET, POST, PUT, DELETE)

## 📂 Project Structure
├── app.js # CLI interface (optional)
├── server.js # Express server for web interface
├── notes.js # Task logic (add, get, complete, delete)
├── data.json # Local task storage
└── public/
└── index.html # Frontend interface

## 🖥️ Run Web Interface

```bash
node server.js
Then open http://localhost:3000 in your browser.
