package com.system.devicemanagementsystem.repository;

import com.system.devicemanagementsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
