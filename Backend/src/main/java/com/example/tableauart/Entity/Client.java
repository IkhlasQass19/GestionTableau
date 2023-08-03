package com.example.tableauart.Entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "client")
public class Client {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int idclient;
        private String nom;
        private String prenom;
        private String address;
        private String email;
        @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
        private List<Demmande> demandes;

}

