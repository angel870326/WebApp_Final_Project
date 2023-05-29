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
public class AdopterInfoController {

        @Autowired
        private MemberRepository memberRepository;
        @Autowired
        private AnimalRepository animalRepository;
        @Autowired
        private DonateRecordRepository donateRecordRepository;

        @GetMapping("/getAdopterInfo/{memberId}")
        public Map<String, Object> getAdopterInfo(@PathVariable Long memberId) {

                Map<String, Object> adopterInfo = new HashMap<String, Object>();

                Member member = memberRepository.findByMemberId(memberId);

                // if member not exist, return empty map (adopterInfo)
                if (member != null) {
                        // 會員暱稱
                        String nickName = member.getNickName();
                        // 會員累積認養動物數量
                        Integer number = Optional
                                        .ofNullable(donateRecordRepository
                                                        .sumAnimalNumOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);
                        // 會員累積認養金額
                        Integer amount = Optional
                                        .ofNullable(donateRecordRepository.sumAmountOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);

                        adopterInfo = Map.of(
                                        "name", nickName,
                                        "number", number,
                                        "amount", amount);

                }

                // const name = 'nick_name';
                // const number = 1;
                // const amount = 1000;

                return adopterInfo;

        }

        @GetMapping("/getAdopterAnimal/{memberId}")
        public List<Map<String, Object>> getAdopterAnimal(@PathVariable Long memberId) {

                List<Map<String, Object>> adopterAnimal = new ArrayList<Map<String, Object>>();

                // 會員當前認養動物
                List<Long> animalIds = Optional
                                .ofNullable(donateRecordRepository.currentAdoptingAnimalIdsByMemberId(memberId))
                                .orElse(new ArrayList<Long>());

                // if member/animalIds not exist, return empty list (adopterAnimal)
                for (Long animalId : animalIds) {
                        Animal animal = animalRepository.findByAnimalId(animalId);
                        String animalName = animal.getName();
                        adopterAnimal.add(Map.of(
                                        "title", animalName,
                                        "animalId", animalId));
                }

                // const animalData = [{title: 'name1', state: state_date, animalId: 1},];

                return adopterAnimal;

        }

}
