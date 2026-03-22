-- Create Database
CREATE DATABASE IF NOT EXISTS hospital_db;
USE hospital_db;

-- ========================
-- USERS TABLE
-- ========================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

-- ========================
-- DOCTORS TABLE
-- ========================
CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    availability VARCHAR(100) NOT NULL
);

-- ========================
-- APPOINTMENTS TABLE
-- ========================
CREATE TABLE IF NOT EXISTS appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'BOOKED',

    FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);

-- ========================
-- SAMPLE DATA
-- ========================

-- Users
INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@gmail.com', '123', 'admin'),
('User', 'user@gmail.com', '123', 'patient');

-- Doctors
INSERT INTO doctors (name, specialization, availability) VALUES
('Dr Ravi Kumar', 'Cardiologist', '10AM-2PM'),
('Dr Anjali Sharma', 'Dermatologist', '11AM-4PM'),
('Dr Suresh Reddy', 'Orthopedic', '9AM-1PM'),
('Dr Priya Nair', 'Pediatrician', '12PM-5PM');

-- Appointments (optional sample)
INSERT INTO appointments (patient_id, doctor_id, date, status) VALUES
(2, 1, '2026-03-25', 'BOOKED');
