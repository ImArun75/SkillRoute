# SkillRoute 🚀

SkillRoute is an AI-powered college guidance platform designed to help students navigate their career paths. It provides a comprehensive suite of tools including trait-based quizzes, college prediction based on exam scores, and an AI-assisted counseling chat.

---

## 🛠 Project Structure

The project is divided into two main parts:

- **[Backend](./Backend)**: Node.js/Express server with MongoDB, providing APIs for authentication, quiz processing, and AI integrations.
- **[Frontend](./Frontend)**: React + Vite application featuring a modern, responsive UI for students to interact with the platform.

---

## 📂 Repository Layout

```text
SkillRoute/
├── Backend/            # Express.js Server
│   ├── src/            # Source code
│   │   ├── config/     # DB, Env, CORS configs
│   │   ├── controllers/# API logic
│   │   ├── models/     # Mongoose schemas
│   │   ├── routes/     # API endpoints
│   │   └── services/   # Business logic (AI, Predictor)
│   └── .env.example    # Environment template
├── Frontend/           # React Application
│   ├── src/            # Components, Pages, Stores
│   ├── public/         # Static assets
│   └── tailwind.config.js # Styling configuration
└── README.md           # This global documentation
```

---

## 🚀 Getting Started

### 1. Backend Setup

1.  **Navigate to the Backend folder**:
    ```bash
    cd Backend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Variables**:
    Create a `.env` file in the `Backend` directory and add:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    OPENAI_API_KEY=your_openai_key
    ```
4.  **Run the server**:
    ```bash
    npm run dev
    ```

### 2. Frontend Setup

1.  **Navigate to the Frontend folder**:
    ```bash
    cd ../Frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the application**:
    ```bash
    npm run dev
    ```

---

## ✨ Key Features

- **Trait-Based Quiz Engine**: Analyzes logical, analytical, and creative traits to suggest engineering branches.
- **College Predictor**: Predicts potential college admissions based on exam ranks/percentiles across various categories.
- **AI Counselor**: Personalized guidance using LLM integration for career and college advice.
- **Modern Dashboard**: High-level overview of quiz results and predicted colleges.

---

## 📝 License

This project is licensed under the MIT License.
