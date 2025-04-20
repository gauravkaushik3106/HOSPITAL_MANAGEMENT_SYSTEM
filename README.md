# 🏥 Suhavya Lifeline - Hospital Management System

A complete MERN Stack-based Hospital Management Web Application with separate portals for Admin and Patient. This system helps streamline hospital operations like appointment booking, doctor management, and patient record handling. It showcases efficient use of **Database Management System (DBMS)** principles through seamless CRUD operations on patient, doctor, and appointment data.

---

## 🌐 Live Links

- 👨‍⚕️ **Patient Portal**: [suhavya-lifeline-hospitalg.netlify.app](https://suhavya-lifeline-hospitalg.netlify.app/)
- 🛠️ **Admin Panel**: [suhavya-lifeline-hospitalg-admin.netlify.app](https://suhavya-lifeline-hospitalg-admin.netlify.app/)

---

## 🚀 Features

### 🩺 Patient Side

- Book appointments with doctors
- Send messages to admin
- Login / Register securely
- Mobile responsive design

### 🧑‍💼 Admin Side

- Add / edit / remove doctors and departments (CRUD)
- View and manage all appointments (CRUD)
- Upload doctor avatars to **Cloudinary**
- Secure admin login and dashboard

---

## 🔧 Tech Stack

### Frontend

- React.js
- CSS
- React Router DOM
- Axios
- Netlify (Deployment)
- Render (Backend Deployment)

### Backend

- Node.js + Express.js
- MongoDB Atlas (Cloud DB)
- Mongoose
- JWT Authentication
- Multer (for file uploads)
- Cloudinary (Image hosting)

> 🧠 **Database Layer (DBMS):** MongoDB Atlas is used as the database to perform all CRUD (Create, Read, Update, Delete) operations, reflecting core DBMS functionalities in real-time.

---

## 📁 Project Setup

### 📦 1. Clone the Repository

```bash
git clone https://github.com/gauravkaushik3106/HOSPITAL_MANAGEMENT_SYSTEM.git
cd HOSPITAL_MANAGEMENT_SYSTEM
```

### ⚙️ 2. Backend Setup

```bash
cd backend
npm install
```

#### 🔐 Create a `.env` file inside `/backend` with variables like:

```env
PORT=your_port_number
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=your_frontend_url
DASHBOARD_URL=your_dashboard_url
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRES=token_expiry_time
COOKIE_EXPIRE=cookie_expiry_days
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Note:** Never share your real `.env` values publicly. Use placeholders as shown above.

#### ▶️ Run the backend server

```bash
npm start
```

---

### 💻 3. Frontend (Patient) Setup

```bash
cd ../frontend
npm install
```

#### 🔐 Create a `.env` file inside `/frontend-patient`:

```env
VITE_API_BASE_URL=http://localhost:4000
```

#### ▶️ Run the patient frontend

```bash
npm run dev
```

---

### 🛠️ 4. Admin Panel Setup

```bash
cd ../dashboard
npm install
```

#### 🔐 Create a `.env` file inside `/frontend-admin`:

```env
VITE_API_BASE_URL=http://localhost:4000
```

#### ▶️ Run the admin panel frontend

```bash
npm run dev
```

---

### 📝 5. Additional Notes

- Ensure that MongoDB Atlas is properly set up and IP Whitelist is configured.
- Make sure to create departments and doctors first from the Admin panel to enable appointment booking.
- Cloudinary account is required for storing doctor profile pictures.
- Use tools like **Postman** to test API routes separately during development.
- Recommended: Use `.env.local` for secure local development.

---

