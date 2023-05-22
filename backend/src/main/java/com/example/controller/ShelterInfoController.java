package com.example.controller;

import com.example.model.*;
import com.example.repository.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

@RestController
public class ShelterInfoController {

    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private ShelterRepository shelterRepository;
    @Autowired
    private DonateRecordRepository donateRecordRepository;

    @GetMapping("/getShelterInfo/{shelterId}")
    public Map<String, Object> getShelterInfo(@PathVariable Long shelterId) {

        Map<String, Object> shelterInfo = new HashMap<String, Object>();

        Shelter shelter = shelterRepository.findByShelterId(shelterId);

        // if shelter not exist, return empty map (shelterInfo)
        if (shelter != null) {
            shelterInfo = Map.of(
                    "id", shelter.getId(),
                    "name", shelter.getName(),
                    "address", shelter.getAddress(),
                    "contact_phone", shelter.getContactPhone(),
                    "contact_email", shelter.getContactEmail());
        }

        // const shelter = { id: 1, name: 'name1', address: 'myAddress', contact_phone:
        // '0987654321', contact_email: 'mymail@gmail.com' }

        return shelterInfo;

    }

    @GetMapping("/getShelterAnimal/{shelterId}")
    public List<Map<String, Object>> getShelterAnimal(@PathVariable Long shelterId) {

        List<Map<String, Object>> shelterAnimal = new ArrayList<Map<String, Object>>();

        List<Animal> animals = Optional
                .ofNullable(animalRepository.findByShelterId(shelterId)).orElse(new ArrayList<Animal>());

        // if member/animalIds not exist, return empty list (adopterAnimal)
        for (Animal animal : animals) {

            Long animalId = animal.getId();
            Integer currentAdopterNum = Optional
                    .ofNullable(donateRecordRepository.sumCurrentAdopterNumOfDonateRecordsByAnimalId(animalId))
                    .orElse(0);

            shelterAnimal.add(Map.of(
                    "id", animalId,
                    "name", animal.getName(),
                    "shelter", animal.getShelter().getName(),
                    "type", animal.getType(),
                    "birth_year", animal.getBirthYear(),
                    "numMember", currentAdopterNum));

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

        return shelterAnimal;

    }

}
