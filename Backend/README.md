# Projet Spring Boot avec Base de Données MySQL et Service de Messagerie
Ce projet Spring Boot démontre l'utilisation de MySQL comme base de données et inclut un service de messagerie pour l'envoi d'e-mails.
## Configuration
### Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- Java JDK
- Maven
- MySQL Server
- IDE IntelliJ IDEA
### Configuration de la Base de Données
1. Créez une base de données MySQL nommée `tableau`.

2. Ouvrez le fichier `src/main/resources/application.properties` et modifiez les paramètres de connexion à la base de données selon vos besoins :
### properties
   spring.datasource.url=jdbc:mysql://localhost:3306/tableau
   
   spring.datasource.username=votre_nom_utilisateur
   
   spring.datasource.password=votre_mot_de_passs
   
  et executer le code create.sql 
### pour le stockage des images :
chemin.image = ajouter vote chemin deprojet + `\\GestionTableau\\front\\public\\imagestableau\\`
