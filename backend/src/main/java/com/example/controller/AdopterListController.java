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
public class AdopterListController {

        @Autowired
        private MemberRepository memberRepository;
        @Autowired
        private AnimalRepository animalRepository;
        @Autowired
        private DonateRecordRepository donateRecordRepository;

        @GetMapping("/getAdopterList")
        public List<Map<String, Object>> getAdopterList() {

                List<Map<String, Object>> adopterList = new ArrayList<Map<String, Object>>();

                List<Member> members = Optional
                                .ofNullable(memberRepository.findAllNotAnonymous()).orElse(new ArrayList<Member>());

                // if member not exist, return empty list (adopterList)
                for (Member member : members) {
                        Long memberId = member.getId();
                        String nickName = member.getNickName();
                        // 會員當前認養動物數量
                        Integer currNum = Optional
                                        .ofNullable(donateRecordRepository
                                                        .sumCurrentAnimalNumOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);
                        // 會員累積認養動物數量
                        Integer accumNum = Optional
                                        .ofNullable(donateRecordRepository
                                                        .sumAnimalNumOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);
                        // 會員累積認養金額
                        Integer amount = Optional
                                        .ofNullable(donateRecordRepository.sumAmountOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);

                        // 會員當前認養動物
                        List<Map<String, Object>> animalList = new ArrayList<Map<String, Object>>();

                        List<Long> animalIds = Optional
                                        .ofNullable(donateRecordRepository.currentAdoptingAnimalIdsByMemberId(memberId))
                                        .orElse(new ArrayList<Long>());
                        if (animalIds.size() > 3) {
                                animalIds = animalIds.subList(0, 2);
                        }

                        // if animalIds not exist, return empty list (animalList)
                        for (Long animalId : animalIds) {
                                Animal animal = animalRepository.findByAnimalId(animalId);
                                String animalName = animal.getName();
                                animalList.add(Map.of(
                                                "img", "animals/" + animalId + ".jpg",
                                                "title", animalName));
                        }

                        adopterList.add(Map.of(
                                        "id", memberId,
                                        "adopter", nickName,
                                        "currNum", currNum,
                                        "accumNum", accumNum,
                                        "amount", amount,
                                        "animal", animalList));

                }

                // const rowImgData = [{img: '1',title: 'name1',},];
                // const rows = [{ id: 1, adopter: 'name A', currNum: 1, accumNum: 11, amount: 1000, animal: rowImgData },];

                return adopterList;

        }

}
