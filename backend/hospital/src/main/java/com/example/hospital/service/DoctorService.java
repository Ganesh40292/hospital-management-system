package com.example.hospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.hospital.model.Doctor;
import com.example.hospital.repository.DoctorRepository;

@Service
public class DoctorService {

    private final DoctorRepository repo;

    // Constructor Injection
    public DoctorService(DoctorRepository repo) {
        this.repo = repo;
    }

    public Doctor addDoctor(Doctor d) {
        return repo.save(d);
    }

    public List<Doctor> getAll() {
        return repo.findAll();
    }

    public List<Doctor> search(String spec) {
        return repo.findBySpecialization(spec);
    }
}