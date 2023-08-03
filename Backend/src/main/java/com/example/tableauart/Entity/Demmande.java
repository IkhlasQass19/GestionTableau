package com.example.tableauart.Entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "demmande")

public class Demmande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iddemande;
    @ManyToOne
    @JoinColumn(name = "idclient")
    private Client client;

    @OneToOne
    @JoinColumn(name = "idtableau")
    private Tableau tableau;

    private String etat;


}
