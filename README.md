# Node.js To-Do Web Service

A simple HTTP-based web service built with Node.js and Express. The service allows users to add and view tasks through a basic web interface.

## 🚀 Features
- Add new tasks
- View all tasks
- Simple and clean UI
- RESTful API endpoints

---

## 📂 Project Structure
```
todo-app/
├── public/
│   └── index.html        # Frontend UI
├── server.js             # Node.js backend server
└── .gitignore            # Ignored files for Git
```

---

## ⚙️ Installation

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/nodejs-todo-app.git
cd nodejs-todo-app
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the Server**
```bash
node server.js
```

4. **Open the App**
Visit `http://localhost:3000` in your browser.

---

## 📚 API Endpoints

### ➕ Add a New Task
- **URL**: `/api/tasks`
- **Method**: `POST`
- **Body**:
```json
{
  "task": "Your task description"
}
```
- **Response**:
```json
{
  "id": 1,
  "task": "Your task description"
}
```

### 📄 Get All Tasks
- **URL**: `/api/tasks`
- **Method**: `GET`
- **Response**:
```json
[
  { "id": 1, "task": "Sample Task" },
  { "id": 2, "task": "Another Task" }
]
```

---

## 🧪 Testing the API

### Using `curl`
- **Add a Task**
```bash
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"task":"Learn Node.js"}'
```

- **Get All Tasks**
```bash
curl http://localhost:3000/api/tasks
```

### Using Postman
- Set the request type to `POST` or `GET`.
- Use `http://localhost:3000/api/tasks` as the URL.
- For POST, set the body to raw JSON.

---

## ✅ To-Do
- [ ] Add delete task functionality.
- [ ] Implement task completion status.
- [ ] Add persistent storage (like MongoDB).

---

## 🤝 Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## ⚖️ License
This project is licensed under the MIT License.

---

## 💡 Acknowledgments
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

---

Feel free to contribute or suggest improvements! 🚀
