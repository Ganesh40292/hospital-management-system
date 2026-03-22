package com.example.hospital.service;

import org.springframework.stereotype.Service;

import com.example.hospital.model.User;
import com.example.hospital.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repo;

    // Constructor Injection
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User register(User user) {
        return repo.save(user);
    }

    public User login(String email, String password) {
        User u = repo.findByEmail(email);

        if (u != null && u.getPassword().equals(password)) {
            return u;
        }
        return null;
    }
}