package com.example.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}