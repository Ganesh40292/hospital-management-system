# 🏥 Hospital Management System

<p align="center">
  <b>A Full-Stack Web Application for Managing Doctors, Patients & Appointments</b><br>
  Built using <b>Spring Boot + MySQL + HTML/CSS/JavaScript</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-SpringBoot-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Frontend-JavaScript-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Database-MySQL-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge"/>
</p>

---

## 🚀 Overview

The **Hospital Management System** is a full-stack web application designed to simplify hospital operations.  
It allows efficient management of:

- 👨‍⚕️ Doctors  
- 👤 Patients  
- 📅 Appointments  

This project demonstrates strong skills in **backend development, frontend UI design, and database integration**.

---

## ✨ Features

### 🔐 Authentication & Roles
- Secure login system
- Role-based access:
  - 👑 Admin → Full control
  - 👤 Patient → Limited access

---

### 📊 Dashboard
- View system statistics
- Total doctors & appointments
- Clean and responsive UI

---

### 👨‍⚕️ Doctor Management
- View doctor list
- Add new doctors (Admin only)
- Specialization & availability tracking

---

### 📅 Appointment Management
- Book appointments
- View all appointments
- Delete appointments (Admin only)
- Sort appointments:
  - 📆 By Date
  - 👨‍⚕️ By Doctor

---

### 🎨 UI Highlights
- Responsive design (Bootstrap)
- Sidebar navigation
- Modern clean layout
- Form validation
- Dynamic data rendering

---

## 🛠️ Tech Stack

| Layer        | Technology |
|-------------|-----------|
| Frontend     | HTML, CSS, JavaScript, Bootstrap |
| Backend      | Java, Spring Boot |
| Database     | MySQL |
| API Style    | REST APIs |

---
hospital-management-system/
│
├── backend/                 # Spring Boot backend API
│   ├── controller/          # REST controllers
│   ├── service/             # Business logic services
│   ├── repository/          # Data access layer
│   ├── model/               # Entity models
│   └── application.properties # Configuration
│
├── frontend/                # Static HTML/CSS/JS frontend
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js          # Main application logic
│   │   ├── auth.js         # Authentication handlers
│   │   └── dashboard.js    # Dashboard functionality
│   ├── login.html
│   ├── dashboard.html
│   ├── doctors.html
│   └── appointments.html
│
├── database/
│   └── schema.sql          # Database schema
│
└── README.md


Backend Setup
bash
cd backend
mvn spring-boot:run
Frontend Setup
Serve the frontend/ directory using any static file server

Open login.html in your browser

Update API endpoints in js/app.js to match your backend URL

Database Setup
sql
mysql -u root -p < database/schema.sql
🔑 Login Credentials
   Role	         Email	          Password
👑 Admin	-> admin@gmail.com	-> 123
👤 Patient-> user@gmail.com  -> 	123
✨ Features
User authentication & authorization

Doctor profile management

Appointment scheduling

Responsive dashboard

Role-based access control (Admin/Patient)

🛠️ Tech Stack
Backend: Spring Boot, JPA/Hibernate

Frontend: HTML5, CSS3, Vanilla JavaScript

Database: MySQL/PostgreSQL

API: RESTful endpoints

📱 Pages
Login (login.html) - User authentication

Dashboard (dashboard.html) - Main overview

Doctors (doctors.html) - Doctor profiles

Appointments (appointments.html) - Booking management

📸 Screenshots
(Add your screenshots here for better presentation)

🔮 Future Enhancements
🔐 JWT Authentication

📊 Dashboard analytics (charts)

📱 Mobile responsive sidebar

🔔 Notifications system

📄 Export reports (PDF/Excel)

👤 User profile management

🎯 Learning Outcomes
Full-stack application development

REST API integration

Role-based access control

Database design (MySQL)

UI/UX design principles

🤝 Contribution
Contributions are welcome!

Fork the repo

Create a branch (git checkout -b feature/AmazingFeature)

Make changes

Commit (git commit -m 'Add some AmazingFeature')

Push (git push origin feature/AmazingFeature)

Submit a Pull Request

📄 License
This project is developed for educational purposes.

👨‍💻 Author
Ganesh Prasad
📍 Udupi, India 🇮🇳

⭐ Support
If you like this project:

👉 Star ⭐ the repository

👉 Share it with others
