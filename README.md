# Food-Good

**Food-Good** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that facilitates a complete food ordering and management system. It supports three distinct roles: **Customer**, **Manager**, and **Admin**.

---

## 🚀 Features

### 👤 Customers

* Browse food items and categories
* Add items to cart
* Place orders and track them in real time
* View order history

### 🧑‍💼 Managers

* View incoming orders
* Acknowledge and update order status
* Mark orders as completed

### 👨‍💻 Admins

* Manage users (create/update/delete customers, managers)
* Manage menu items and categories
* View analytics: sales, active users, order trends
* Monitor system activity and logs

---

## 🧱 Tech Stack

| Layer    | Technology                                         |
| -------- | -------------------------------------------------- |
| Frontend | React, Axios, React Router                         |
| Backend  | Node.js, Express.js                                |
| Database | MongoDB (with Mongoose)                            |
| Auth     | JWT, bcrypt                                        |
| Hosting  | Vercel (Frontend), Heroku (Backend), MongoDB Atlas |

---

## 📁 Folder Structure

```
food-good/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│   └── public/
├── README.md
└── .env
```

---

## 📦 Installation

### Prerequisites

* Node.js >= 14
* MongoDB Atlas or local instance

### Steps

1. **Clone the repository**

```bash
$ git clone https://github.com/yourusername/food-good.git
$ cd food-good
```

2. **Backend setup**

```bash
$ cd backend
$ npm install
$ touch .env
```

**.env file:**

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

```bash
$ npm run dev
```

3. **Frontend setup**

```bash
$ cd ../frontend
$ npm install
$ npm start
```

The app runs at: `http://localhost:3000`

---

## 🔐 Authentication & Roles

* **JWT-based login** for all users
* **Role-based access control** for endpoints (Customer, Manager, Admin)

---

## 🛠 API Overview

| Endpoint              | Method                | Role           | Description                 |
| --------------------- | --------------------- | -------------- | --------------------------- |
| `/api/auth/register`  | POST                  | Public         | Register a new user         |
| `/api/auth/login`     | POST                  | Public         | Login user and get token    |
| `/api/products`       | GET                   | Customer/Admin | Get menu items              |
| `/api/orders`         | POST                  | Customer       | Place new order             |
| `/api/manager/orders` | GET                   | Manager        | View/manage incoming orders |
| `/api/admin/users`    | GET/POST/PATCH/DELETE | Admin          | Manage users                |

---

## 🧪 Testing

* Use **Postman** or **Insomnia** for manual API testing.
* Frontend tests with **React Testing Library** and **Jest** (optional).

---

## 📈 Future Enhancements

* Real-time updates with WebSockets
* Payment gateway integration
* Delivery tracking
* Ratings and reviews
* Mobile app (React Native)

---

## 👨‍💻 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'add new feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

[MIT](LICENSE)

---

## 📞 Contact

**Project Maintainer:** \Manika Srivastava
**Email:** srivastavamanika19@gmail.com(mailto:srivastavamanika19@gmail.com)
**GitHub:** CodeMosai7(https://github.com/CodeMosaic7)
