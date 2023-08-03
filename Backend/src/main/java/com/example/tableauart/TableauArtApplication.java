package com.example.tableauart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.example.tableauart.Repository")
@EntityScan("com.example.tableauart.Entity")
public class TableauArtApplication {

    public static void main(String[] args) {
        SpringApplication.run(TableauArtApplication.class, args);
    }

}
