package com.example.hospital.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital.model.Report;

public interface ReportRepository extends JpaRepository<Report, Integer> {

    List<Report> findByPatientId(int patientId);
}