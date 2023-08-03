package com.example.tableauart.Repository;


import com.example.tableauart.Entity.Demmande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DemandeRepository extends JpaRepository<Demmande,Integer> {

    List<Demmande> findByEtat(String etat);
}