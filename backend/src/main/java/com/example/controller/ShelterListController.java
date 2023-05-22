package com.example.controller;

import com.example.model.*;
import com.example.repository.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@RestController
public class ShelterListController {

    @Autowired
    private ShelterRepository shelterRepository;
    @Autowired
    private AnimalRepository animalRepository;

    @GetMapping("/getShelterList")
    public List<Map<String, Object>> getShelterList() {

        List<Map<String, Object>> shelterList = new ArrayList<Map<String, Object>>();

        List<Shelter> shelters = Optional
                .ofNullable(shelterRepository.findAll()).orElse(new ArrayList<Shelter>());

        // if shelter not exist, return empty list (shelterList)
        for (Shelter shelter : shelters) {

            Long shelterId = shelter.getId();
            String name = shelter.getName();
            String address = shelter.getAddress();

            Integer animalNum = Optional
                    .ofNullable(animalRepository.sumAnimalNumByShelterId(shelterId))
                    .orElse(0);

            shelterList.add(Map.of(
                    "id", shelterId,
                    "name", name,
                    "address", address,
                    "numAnimal", animalNum));

        }

        // const shelters = [
        // { id: 1, name: 'name1', address: 'myAddress', numAnimal: 'my numAnimal' },
        // { id: 2, name: 'name2', address: 'myAddress', numAnimal: 'my numAnimal' },
        // { id: 3, name: 'name3', address: 'myAddress', numAnimal: 'my numAnimal' },
        // { id: 4, name: 'name4', address: 'myAddress', numAnimal: 'my numAnimal' },
        // { id: 5, name: 'name5', address: 'myAddress', numAnimal: 'my numAnimal' },
        // { id: 6, name: 'name6', address: 'myAddress', numAnimal: 'my numAnimal' },
        // ];

        return shelterList;

    }

}
