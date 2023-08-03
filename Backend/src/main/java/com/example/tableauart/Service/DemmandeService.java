package com.example.tableauart.Service;

import com.example.tableauart.Entity.Client;
import com.example.tableauart.Entity.Demmande;
import com.example.tableauart.Entity.Tableau;
import com.example.tableauart.Repository.ClientRepository;
import com.example.tableauart.Repository.DemandeRepository;
import com.example.tableauart.Repository.TableauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DemmandeService {
    @Autowired
    private DemandeRepository demandeRepository;

    @Autowired
    private TableauRepository tableauRepository;

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private EmailService emailService;

    //accepter ou reffuser etat donc update
    public int modifierEtatDemande(Integer idDemande,String nouvelEtat) {
        Optional<Demmande> optionalDemande = demandeRepository.findById(idDemande);
        if (optionalDemande.isPresent()) {
            Demmande demande = optionalDemande.get();
            demande.setEtat(nouvelEtat);
            Demmande demandeModifiee = demandeRepository.save(demande);
            String email =demande.getClient().getEmail();
            String text;
            if(nouvelEtat.equals("accepte")) {
                text = "Cher(e) " + demande.getClient().getNom() + " " + demande.getClient().getPrenom() + "\n" +
                        "\n" +
                        "Nous espérons que vous allez bien. Nous sommes ravis de vous informer que votre demande a été acceptée avec succès. Nous sommes impatients de vous fournir le service dont vous avez besoin.\n" +
                        "\n" +
                        "Dans le cadre de notre engagement à vous offrir la meilleure expérience possible, nous avons déjà mis en place les arrangements nécessaires pour répondre à votre demande. Votre satisfaction étant notre priorité, nous avons désigné un livreur dédié pour assurer la livraison de [détails de la livraison].\n" +
                        "\n" +
                        "Vous pouvez contacter notre livreur, Mme Oumnia Bouzga, directement au numéro suivant : 0766761016. la Livreurse se fera un plaisir de répondre à toutes vos questions concernant la livraison et de coordonner avec vous pour trouver le moment le plus approprié.\n" +
                        "\n" +
                        "N'hésitez pas à nous contacter si vous avez d'autres questions ou besoins. Nous sommes là pour vous aider.\n" +
                        "\n" +
                        "Nous vous remercions de nous faire confiance pour répondre à vos besoins, et nous sommes impatients de vous servir.\n" +
                        "\n" +
                        "Cordialement,\n" +
                        "Ikhlas Qassimi\n" +
                        "Directrice\n" +
                        "Magazin de art\n";
                emailService.sendEmail(email, "Confirmation de l'acceptation de votre demande et coordonnées du livreur", text);
            }
            else {
                text = "Cher(e) " + demande.getClient().getNom() + " " + demande.getClient().getPrenom() + "\n" +
                        "\n" +
                        "J'espère que vous allez bien. Je tiens tout d'abord à vous remercier pour l'intérêt que vous avez manifesté envers notre produit/service.\n" +
                        "\n" +
                        "Cependant, j'ai le regret de vous informer que l'article que vous avez demandé n'est plus disponible, car il a été vendu récemment. Je tiens sincèrement à m'excuser pour cet inconvénient. Nous nous efforçons constamment de maintenir nos stocks à jour, mais parfois des circonstances imprévues peuvent entraîner une indisponibilité temporaire.\n" +
                        "\n" +
                        "Je comprends à quel point cette situation peut être décevante, et je vous prie de bien vouloir accepter nos excuses pour tout désagrément que cela pourrait avoir causé.\n" +
                        "\n" +
                        "Si vous le souhaitez, je serais ravi de vous aider à trouver une alternative qui correspond à vos besoins. N'hésitez pas à me faire part de vos préférences ou de toute autre demande que vous pourriez avoir. Votre satisfaction demeure notre priorité absolue.\n" +
                        "\n" +
                        "Encore une fois, je vous présente mes excuses pour cette situation et je vous remercie de votre compréhension.\n" +
                        "\n" +
                        "Cordialement,\n" +
                        "Ikhlas Qassimi\n" +
                        "Directrice\n" +
                        "Magazin de art\n";
                System.out.println(email);
                emailService.sendEmail(email,"Refus de votre demande et informations supplémentaires",text);

            }
            return 0;
        } else {
            return -1;
        }
    }
    //afficher les demmandes encours
    public List<Demmande> AfficherDemandes() {
        List<Demmande> demandesParEtat = demandeRepository.findByEtat("encours");
        return demandesParEtat;
    }
    //ajouter tableau
    public int ajouter(Client client , Integer idtableau){
        clientRepository.save(client);
        Optional<Tableau> optionalTableau = tableauRepository.findById(idtableau);
        if (optionalTableau.isPresent()) {
            Tableau tableau = optionalTableau.get();
            Demmande demande = new Demmande();
            demande.setClient(client);
            demande.setTableau(tableau);
            demande.setEtat("encours");
            Demmande nouvelleDemande = demandeRepository.save(demande);
            return 0;
        } else {
            return -1;
        }

    }
}
