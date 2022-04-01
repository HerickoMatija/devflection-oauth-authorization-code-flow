package com.devflection.resource.server;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayersController {

    @GetMapping("/favouritePlayers")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin(origins = "*")
    List<String> healthcheck() {
        return List.of(
            "Luka Dončič",
            "Kyrie Irving",
            "Giannis Antetokounmpo",
            "Stephen Curry"
        );
    }

}