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
            Integer currentAdopterNum = Optional
                    .ofNullable(donateRecordRepository.sumCurrentAdopterNumOfDonateRecordsByAnimalId(animalId))
                    .orElse(0);

            animalList.add(Map.of(
                    "id", animalId,
                    "name", animal.getName(),
                    "sex", animal.getSex(),
                    "type", animal.getType(),
                    "birth_year", animal.getBirthYear(),
                    "sheltered_date", animal.getShelteredDate(),
                    "shelter", animal.getShelter().getName(),
                    "area", animal.getShelter().getArea(),
                    "numMember", currentAdopterNum));

        }

        // const animals = [{ id: 1, name: 'name1', type: '狗', sex: '公', birth_year:
        // '2020', area: '北部', shelter: '臺北市動物之家', sheltered_date: '2020-04-06
        // 00:00:00.000000', numMember: '1' },];

        return animalList;

    }

}
