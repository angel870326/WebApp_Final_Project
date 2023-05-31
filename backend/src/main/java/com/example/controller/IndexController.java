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
import java.util.HashMap;

@RestController
public class IndexController {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private ShelterRepository shelterRepository;
    @Autowired
    private DonateRecordRepository donateRecordRepository;

    @GetMapping("/getIndexInfo")
    public Map<String, Object> getOverallInfo() {

        Map<String, Object> indexInfo = new HashMap<String, Object>();

        Integer animalNum = Optional
                .ofNullable(animalRepository.countAnimalNum())
                .orElse(0);
        Integer amount = Optional
                .ofNullable(donateRecordRepository.sumAmountOfDonateRecords())
                .orElse(0);

        indexInfo = Map.of(
                "animalNum", animalNum,
                "amount", amount);

        return indexInfo;

        // const animalNum = 20
        // const amount = 1000

    }

    @GetMapping("/getIndexAnimalInfo")
    public List<Map<String, Object>> getIndexAnimalInfo() {

        List<Map<String, Object>> indexAnimalInfo = new ArrayList<Map<String, Object>>();

        List<Animal> animals = Optional.ofNullable(animalRepository.findTop3NewestAnimals())
                .orElse(new ArrayList<Animal>());
        for (Animal animal : animals) {
            indexAnimalInfo.add(Map.of(
                    "id", animal.getId(),
                    "name", animal.getName()));
        }

        return indexAnimalInfo;

        // const animals = [{id: 1, name: "name1"},]

    }

    @GetMapping("/getIndexAdopterInfo")
    public List<Map<String, Object>> getIndexAdopterInfo() {

        List<Map<String, Object>> indexAdopterInfo = new ArrayList<Map<String, Object>>();

        List<Map<String, Object>> memberInfos = Optional.ofNullable(memberRepository.findTop3MemberInfos())
                .orElse(new ArrayList<Map<String, Object>>());
        for (Map<String, Object> memberInfo : memberInfos) {
            indexAdopterInfo.add(Map.of(
                    "id", memberInfo.get("member_id"),
                    "name", memberInfo.get("member_name"),
                    "animalNum", memberInfo.get("adopting_num")));
        }

        return indexAdopterInfo;

        // const adopters = [{id: 1, name: "name1", animalNum: 30},]
        // 當前認養動物數

    }

    @GetMapping("/getIndexShelterInfo")
    public List<Map<String, Object>> getIndexShelterInfo() {

        List<Map<String, Object>> indexSelterInfo = new ArrayList<Map<String, Object>>();

        List<Map<String, Object>> shelterInfos = Optional.ofNullable(shelterRepository.findTop3ShelterInfos())
                .orElse(new ArrayList<Map<String, Object>>());
        for (Map<String, Object> shelterInfo : shelterInfos) {
            indexSelterInfo.add(Map.of(
                    "id", shelterInfo.get("shelter_id"),
                    "name", shelterInfo.get("shelter_name"),
                    "animalNum", shelterInfo.get("sheltered_num")));
        }

        return indexSelterInfo;

        // const shelters = [{id: 1, name: "name1", animalNum: 300},]

    }

}
