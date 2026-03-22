package com.example.hospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hospital.model.Appointment;
import com.example.hospital.repository.AppointmentRepository;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    private final AppointmentRepository repo;

    public AppointmentController(AppointmentRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        appointment.setStatus("Pending");
        return repo.save(appointment);
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return repo.findAll();
    }

    @DeleteMapping("/{id}")
    public String cancelAppointment(@PathVariable int id) {
        repo.deleteById(id);
        return "Appointment Cancelled";
    }
}