package com.example.hospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.hospital.model.Appointment;
import com.example.hospital.repository.AppointmentRepository;

@Service
public class AppointmentService {

    private final AppointmentRepository repo;

    // Constructor Injection (Best Practice)
    public AppointmentService(AppointmentRepository repo) {
        this.repo = repo;
    }

    public Appointment book(Appointment a) {
        a.setStatus("Pending");  // ✅ FIXED
        return repo.save(a);
    }

    public List<Appointment> getAll() {
        return repo.findAll();
    }
}