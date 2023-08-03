package com.example.tableauart.Service;
import com.example.tableauart.Entity.Tableau;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.tableauart.Repository.TableauRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TableauService {
    @Autowired

    private TableauRepository tableauRepository;

    //ajouter des tableaux
    public int ajouter(Tableau tableau){
        Tableau nouveauTableau = tableauRepository.save(tableau);
        if(nouveauTableau==null)
        return -1;
        else
            return 0;
    }
    //voir les tableaux
    public List<Tableau> AfficherTableaux() {
        List<Tableau> tableaux = tableauRepository.findAll();
        return tableaux;
    }
    public Tableau AfficherDetails(Integer idtableau){
        Optional<Tableau> optionalTableau = tableauRepository.findById(idtableau);
        if (optionalTableau.isPresent()) {
            Tableau tableau = optionalTableau.get();
            return tableau;
        } else {
            return null;
        }
    }

}
