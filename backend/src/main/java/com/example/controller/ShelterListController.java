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
            Integer animalNum = Optional
                    .ofNullable(animalRepository.sumAnimalNumByShelterId(shelterId))
                    .orElse(0);

            shelterList.add(Map.of(
                    "id", shelterId,
                    "name", shelter.getName(),
                    "area", shelter.getArea(),
                    "address", shelter.getAddress(),
                    "numAnimal", animalNum));

        }

        // const shelters = [{ id: 1, name: '臺北市動物之家', area: '北部', address:
        // '我是一個地址，我是長字串，我要堅強', numAnimal: '5' },];

        return shelterList;

    }

}
