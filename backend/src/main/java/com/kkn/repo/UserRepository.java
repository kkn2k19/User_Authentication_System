package com.kkn.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kkn.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // User findByUsername(String username);
    Optional<User> findByUsername(String username);
}
