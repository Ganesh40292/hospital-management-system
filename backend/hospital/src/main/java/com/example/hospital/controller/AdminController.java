package com.example.hospital.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hospital.repository.AppointmentRepository;
import com.example.hospital.repository.DoctorRepository;
import com.example.hospital.repository.UserRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {

    private final UserRepository userRepo;
    private final DoctorRepository doctorRepo;
    private final AppointmentRepository appointmentRepo;

    public AdminController(UserRepository userRepo,
                           DoctorRepository doctorRepo,
                           AppointmentRepository appointmentRepo) {
        this.userRepo = userRepo;
        this.doctorRepo = doctorRepo;
        this.appointmentRepo = appointmentRepo;
    }

    @GetMapping("/stats")
    public Map<String, Long> getStats() {
        Map<String, Long> map = new HashMap<>();

        map.put("users", userRepo.count());
        map.put("doctors", doctorRepo.count());
        map.put("appointments", appointmentRepo.count());

        return map;
    }
}