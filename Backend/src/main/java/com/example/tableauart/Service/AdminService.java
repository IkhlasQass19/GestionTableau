package com.example.tableauart.Service;

import com.example.tableauart.Entity.Admin;
import com.example.tableauart.Repository.AdminRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    // Creation of admin
    public String ajouterAdmin(Admin admin) {
        // Check if admin with login already exists
        if (adminRepository.findByLogin(admin.getLogin()) != null) {
            return "Admin already exists.";
        }
        // Hash the password before storing it
        admin.setPassword(hashPassword(admin.getPassword()));
        Admin nouvelAdmin = adminRepository.save(admin);
        return "Admin added successfully.";
    }

    // Connection
    public Admin SeConnecter(String login, String password) {
        Admin admin = adminRepository.findByLogin(login);
        //System.out.println("l objet de "+admin.getLogin());
        if (admin != null && verifyPassword(password, admin.getPassword())) {
            return admin;
        }
        return null;
    }

    // Hash the password using BCrypt
    private String hashPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    // Verify the entered password with the hashed password
    private boolean verifyPassword(String enteredPassword, String hashedPassword) {
        return BCrypt.checkpw(enteredPassword, hashedPassword);
    }
}
