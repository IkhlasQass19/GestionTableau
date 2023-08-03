package com.example.tableauart.Repository;


import com.example.tableauart.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {
    Admin findByLogin(String login);
}
