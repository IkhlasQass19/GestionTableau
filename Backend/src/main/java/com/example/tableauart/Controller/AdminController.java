package com.example.tableauart.Controller;

import com.example.tableauart.Entity.Admin;
import com.example.tableauart.Entity.Demmande;
import com.example.tableauart.Entity.Tableau;
import com.example.tableauart.Service.AdminService;
import com.example.tableauart.Service.DemmandeService;
import com.example.tableauart.Service.TableauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private TableauService tableauService;
    private DemmandeService demandeService;
    private AdminService adminService;
    @Autowired
    public AdminController(TableauService tableauService, DemmandeService demandeService, AdminService adminService) {
        this.tableauService = tableauService;
        this.demandeService = demandeService;
        this.adminService = adminService;
    }
    //authentification :
    @PostMapping("/SeConnecter")
    public ResponseEntity<Admin> SeConnecter(@RequestParam("login") String login,@RequestParam("password") String password) {
        System.out.println(login);
        Admin admin=adminService.SeConnecter(login,password);
        //System.out.println("hi"+admin.getLogin());
        return ResponseEntity.ok(admin);
    }

    //Ajouter tableau :
    @PostMapping("/ajouter")
    public int ajouterTableau(@RequestBody Tableau tableau) {
        int nouveauTableau = tableauService.ajouter(tableau);
        return nouveauTableau;
    }
    //accepter demannde ou refuser :
    @PutMapping("/AOR")
    public int ModifierDemande(@RequestParam("id") int idDemande,@RequestParam("nv") String nouvelEtat) {
        System.out.println(nouvelEtat);
        int nouveauTableau = demandeService.modifierEtatDemande(idDemande,nouvelEtat);
        return nouveauTableau;
    }
    //Voir tous les demandes :
    @GetMapping("/VoirDemmandes")
    public ResponseEntity<List<Demmande>> VoirDemandes() {
        List<Demmande> demandes = demandeService.AfficherDemandes();
        return ResponseEntity.ok(demandes);
    }
    //dans le cas d ajout d un admin :
    @PostMapping("/AjouterAdmin")
    public  String inscriptionAdmin(@RequestBody Admin admin) {
       String reponnse=adminService.ajouterAdmin(admin);
        return reponnse;
    }


}