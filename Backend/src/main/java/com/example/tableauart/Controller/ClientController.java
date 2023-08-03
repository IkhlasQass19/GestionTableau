package com.example.tableauart.Controller;

import com.example.tableauart.Entity.Client;
import com.example.tableauart.Entity.Tableau;
import com.example.tableauart.Service.DemmandeService;
import com.example.tableauart.Service.TableauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("")
public class ClientController {
    private TableauService tableauService;
    private DemmandeService demandeService;

    @Autowired
    public ClientController(TableauService tableauService, DemmandeService demandeService) {
        this.tableauService = tableauService;
        this.demandeService = demandeService;
    }
    //voir tous les tableaux
    @GetMapping("/voir")
    public ResponseEntity<List<Tableau>>AfficherTableaux() {
        List<Tableau> tableaux =tableauService.AfficherTableaux();
        return ResponseEntity.ok(tableaux);
    }
    //les details d'un tableau
    @GetMapping("/details")
    public ResponseEntity<Tableau> TableauAfficherDetail(@RequestParam("id") int idTableau){
        Tableau tableau=tableauService.AfficherDetails(idTableau);
        return ResponseEntity.ok(tableau);
    }
    //faire un offre acheter un tableau
    @PostMapping("/faireoffre")
    public int ajouterDemande(@RequestBody Client client ,@RequestParam("id")  int idtableau) {
            int nouvelDemmande = demandeService.ajouter(client ,idtableau);
            return nouvelDemmande;
    }

}
