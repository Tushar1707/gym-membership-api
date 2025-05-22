
# 🏋️‍♂️ Gym Membership Management API

A modular, secure, and RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to manage gym memberships including user registration, login, membership plans, subscriptions, attendance, and payments.

## 🚀 Features

- ✅ User Registration & Login (JWT Authentication)
- 🔐 Role-based Access Control (Admin / Member)
- 💳 Subscription Plans & Payments
- 🕒 Attendance Tracking (with freeze/cancel)
- 📊 Admin Dashboard (Stats & Reports)
- 🧾 Invoice Generation (PDF)
- 🌐 RESTful API with Express
- 🔐 Secure Password Hashing (bcrypt)
- 🛡️ Rate Limiting for Login

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt
- **Rate Limiting**: express-rate-limit
- **Environment Management**: dotenv

---

## 📁 Project Structure

```
gym-membership-api/
│
├── config/              # MongoDB connection
├── controllers/         # Business logic
├── middleware/          # Auth, Rate-limiting
├── models/              # Mongoose schemas
├── routes/              # Express route files
├── .env                 # Environment config
├── app.js               # Main app setup
└── server.js            # App entry point
```

---

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/gym-membership-api.git
cd gym-membership-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Never commit `.env` to source control!

### 4. Run the Server
```bash
npm start
```

Server will start at `http://localhost:5000`

---

## 📮 API Endpoints (Postman-Ready)

### 🔑 Auth
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive a JWT

### 👤 Users
- `GET /api/users` — [Admin] Get all users
- `GET /api/users/:id` — Get your profile
- `PUT /api/users/:id` — Update profile
- `DELETE /api/users/:id` — Delete user & related data

### 💳 Membership Plans
- `GET /api/plans` — View all plans
- `POST /api/plans` — [Admin] Add new plan
- `PUT /api/plans/:id` — [Admin] Update plan
- `DELETE /api/plans/:id` — [Admin] Delete plan

### 📦 Subscriptions
- `POST /api/subscribe` — Subscribe to a plan
- `GET /api/subscribe` — View user subscriptions
- `PATCH /api/subscribe/:id/cancel` — Cancel a subscription
- `PATCH /api/subscribe/:id/freeze` — Freeze subscription

---

## 🛡️ Security

- ✅ JWT authentication for protected routes
- ✅ bcrypt password hashing
- ✅ Role-based authorization
- ✅ Login rate limiting

---

## 👨‍💻 Contributors

- 💡 Project built by [Your Name]

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
