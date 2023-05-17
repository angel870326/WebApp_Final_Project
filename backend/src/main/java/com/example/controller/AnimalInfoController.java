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
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
public class AnimalInfoController {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private DonateRecordRepository donateRecordRepository;

    @GetMapping("/getAnimalInfo/{animalId}")
    public Map<String, Object> getAnimalInfo(@PathVariable Long animalId) {

        Map<String, Object> animalInfo = new HashMap<String, Object>();

        Animal animal = animalRepository.findByAnimalId(animalId);

        // if animal not exist, return empty map (animalInfo)
        if (animal != null) {
            animalInfo = Map.of(
                    "id", animal.getId(),
                    "name", animal.getName(),
                    "sex", animal.getSex(),
                    "type", animal.getType(),
                    "brithYear", animal.getBirthYear(),
                    "personality", animal.getPersonality(),
                    "appearance", animal.getAppearance(),
                    "shelter_id", animal.getShelter().getId());
        }

        // const animal = { id: 22, name: '小黑', sex: "母", type: "巴哥犬", brithYear: 2020,
        // personality: "活潑", appearance: "黑色、垂耳", shelter_id: 1};

        return animalInfo;

    }

    @GetMapping("/getAnimalDonateRecord/{animalId}/{memberId}")
    public List<Map<String, Object>> getAnimalDonateRecord(@PathVariable Long animalId,
            @PathVariable Long memberId) {

        List<Map<String, Object>> animalDonateRecord = new ArrayList<Map<String, Object>>();

        List<DonateRecord> donateRecords = Optional
                .ofNullable(donateRecordRepository.findDonateRecordsByMemberIdAndAnimalId(animalId, memberId))
                .orElse(new ArrayList<DonateRecord>());

        // if donateRecords not exist, return empty list (animalDonateRecord)
        for (DonateRecord donateRecord : donateRecords) {

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
            LocalDateTime startDate = donateRecord.getDonationStartDate();
            String formattedstartDate = "";
            try {
                formattedstartDate = startDate.format(formatter);
            } catch (NullPointerException e) {
            }
            LocalDateTime endDate = donateRecord.getDonationEndDate();
            String formattedendDate = "";
            try {
                formattedendDate = endDate.format(formatter);
            } catch (NullPointerException e) {
            }

            DonatePlan donatePlan = donateRecord.getDonatePlan();

            animalDonateRecord.add(Map.of(
                    "id", donateRecord.getId(),
                    "status", donateRecord.getStatus(),
                    "startDate", formattedstartDate,
                    "endDate", formattedendDate,
                    "plan", donatePlan.getName(),
                    "amount", donatePlan.getAmount()));

        }

        // const adoptionRecords = [
        // { id: 1, plan: "方案一", startDate: '2023/5/1', endDate:"2023/6/1",
        // status:"認養中", amount: 100 },
        // { id: 2, plan: "方案二", startDate: '2022/5/1', endDate:"2022/6/1",
        // status:"認養結束", amount: 100 },
        // { id: 3, plan: "方案三", startDate: '2021/5/1', endDate:"2021/6/1",
        // status:"認養結束", amount: 100 },
        // { id: 4, plan: "方案四", startDate: '2020/5/1', endDate:"2020/6/1",
        // status:"認養結束", amount: 100 },
        // { id: 5, plan: "方案四", startDate: '2019/5/1', endDate:"2019/6/1",
        // status:"認養結束", amount: 100 },
        // { id: 6, plan: "方案四", startDate: '2018/5/1', endDate:"2018/6/1",
        // status:"認養結束", amount: 100 },
        // ];

        return animalDonateRecord;

    }

    @GetMapping("/getAnimalAdopter/{animalId}/{memberId}")
    public List<Map<String, Object>> getAnimalAdopter(@PathVariable Long animalId, @PathVariable Long memberId) {

        List<Map<String, Object>> animalAdopter = new ArrayList<Map<String, Object>>();

        List<Long> currentAdoptingMemberIds = Optional
                .ofNullable(donateRecordRepository.findCurrentAdoptingMemberIdsWithoutThisMemberIdByAnimalId(animalId,
                        memberId))
                .orElse(new ArrayList<Long>());

        // if donateRecords not exist, return empty list (animalAdopter)
        for (Long currentAdoptingMemberId : currentAdoptingMemberIds) {

            Member member = memberRepository.findByMemberId(currentAdoptingMemberId);

            if (member.getAnonymous() == false) {
                animalAdopter.add(Map.of(
                        "id", member.getId(),
                        "name", member.getNickName()));
            }

        }

        // const adopters = [
        // { id: 1, name: "AA" },
        // { id: 2, name: "BB" },
        // { id: 3, name: "CC" },
        // { id: 4, name: "DD" },
        // { id: 5, name: "EE" },
        // { id: 6, name: "FF" },
        // ];

        return animalAdopter;

    }

}
