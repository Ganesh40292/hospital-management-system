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

A full-stack hospital management system to manage:
- 👨‍⚕️ Doctors  
- 👤 Patients  
- 📅 Appointments  

---

## ✨ Features

- 🔐 Role-based login (Admin / Patient)
- 👨‍⚕️ Doctor management (Add & View)
- 📅 Appointment booking system
- 🗑 Delete appointments (Admin only)
- 🔄 Sorting (Date / Doctor)
- 📊 Dashboard overview
- 🎨 Responsive UI with Bootstrap

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap  
- **Backend:** Spring Boot (Java)  
- **Database:** MySQL  

---


## 📁 Project Structure
hospital-management-system/
│
├── backend/
├── frontend/
├── database/
└── README.md


---

## ⚙️ Setup

### Backend
```bash
cd backend
mvn spring-boot:run

---
Database
mysql -u root -p < database/schema.sql

Frontend
Open frontend/login.html
Or use Live Server
