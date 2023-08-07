package com.example.tableauart.Controller;

import com.example.tableauart.Entity.Admin;
import com.example.tableauart.Entity.Demmande;
import com.example.tableauart.Entity.Tableau;
import com.example.tableauart.Service.AdminService;
import com.example.tableauart.Service.DemmandeService;
import com.example.tableauart.Service.TableauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
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
    public ResponseEntity<Admin> SeConnecter(@RequestParam("login") String login, @RequestParam("password") String password) {
        System.out.println(login);
        Admin admin = adminService.SeConnecter(login, password);
        //System.out.println("hi"+admin.getLogin());
        return ResponseEntity.ok(admin);
    }

    //Ajouter tableau :
    @Value("${chemin.image}")
    private String cheminImage;

    private String generateUniqueFileName(String originalFileName) {
        String baseName = originalFileName.substring(0, originalFileName.lastIndexOf('.'));
        String extension = originalFileName.substring(originalFileName.lastIndexOf('.'));
        String uniqueFileName = baseName;

        int counter = 1;
        while (Files.exists(Paths.get(cheminImage, uniqueFileName + extension))) {
            uniqueFileName = baseName + "_" + counter;
            counter++;
        }

        return uniqueFileName + extension;
    }

    @PostMapping("/ajouter")
    public int ajouterTableau(@RequestParam("image") MultipartFile imageFile,
                              @RequestParam("titre") String titre,
                              @RequestParam("artiste") String artiste,
                              @RequestParam("longeur") double longeur,
                              @RequestParam("largeur") double largeur,
                              @RequestParam("description") String description,
                              @RequestParam("prix") double prix,
                              @RequestParam("annee") int annee) throws IOException {
        Tableau tableau = new Tableau();
        System.out.println(cheminImage);
        if (!imageFile.isEmpty()) {
            String originalFileName = imageFile.getOriginalFilename();
            String fileName = generateUniqueFileName(originalFileName);
            Path imagePath = Paths.get(cheminImage + fileName);
            System.out.println(imagePath.toString());
            Files.copy(imageFile.getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);
            imageFile.getInputStream().close();
            tableau.setTitre(titre);
            tableau.setArtiste(artiste);
            tableau.setLongeur(longeur);
            tableau.setLargeur(largeur);
            tableau.setDescription(description);
            tableau.setPrix(prix);
            tableau.setAnnne(annee);
            tableau.setChemin(fileName);

        }
        int nouveauTableau = tableauService.ajouter(tableau);
        return nouveauTableau;
    }

    //accepter demannde ou refuser :
    @PutMapping("/AOR")
    public int ModifierDemande(@RequestParam("id") int idDemande, @RequestParam("nv") String nouvelEtat) {
        System.out.println(nouvelEtat);
        int nouveauTableau = demandeService.modifierEtatDemande(idDemande, nouvelEtat);
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
    public String inscriptionAdmin(@RequestBody Admin admin) {
        String reponnse = adminService.ajouterAdmin(admin);
        return reponnse;
    }


}