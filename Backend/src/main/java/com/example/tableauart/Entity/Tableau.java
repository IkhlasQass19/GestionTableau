package com.example.tableauart.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Getter
@Setter
@Table(name = "tableau")

public class Tableau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtableau;
    private String titre;
    private String artiste;
    private double prix;
    private double longeur;
    private double largeur;
    private int annne;
    private String description;
    private String chemin;

}
