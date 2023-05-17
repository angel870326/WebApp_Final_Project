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
public class AnimalListController {

    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private DonateRecordRepository donateRecordRepository;

    @GetMapping("/getAnimalList")
    public List<Map<String, Object>> getAnimalList() {

        List<Map<String, Object>> animalList = new ArrayList<Map<String, Object>>();

        List<Animal> animals = Optional
                .ofNullable(animalRepository.findAll()).orElse(new ArrayList<Animal>());

        // if animal not exist, return empty list (animalList)
        for (Animal animal : animals) {

            Long animalId = animal.getId();
            String name = animal.getName();
            String type = animal.getType();
            Integer birthYear = animal.getBirthYear();

            Integer currentAdopterNum = Optional
                    .ofNullable(donateRecordRepository.sumCurrentAdopterNumOfDonateRecordsByAnimalId(animalId))
                    .orElse(0);

            Shelter shelter = animal.getShelter();
            String shelterName = shelter.getName();

            animalList.add(Map.of(
                    "id", animalId,
                    "name", name,
                    "type", type,
                    "birth_year", birthYear,
                    "numMember", currentAdopterNum,
                    "shelter", shelterName));

        }

        // const animals = [
        // { id: 1, name: 'name1', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 2, name: 'name2', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 3, name: 'name3', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 4, name: 'name4', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 5, name: 'name5', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 6, name: 'name6', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 7, name: 'name7', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // { id: 8, name: 'name8', shelter: 'my shelter', type: 'my type', birth_year:
        // 'my birth_year', numMember: 'my numMember' },
        // ];

        return animalList;

    }

}
