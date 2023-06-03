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

                // if member not exist, return empty map (adopterInfo)
                Optional<Member> memberOp = memberRepository.findById(memberId);
                if (memberOp.isPresent()) {

                        Member member = memberOp.get();

                        if (member.getAnonymous() == false) {

                                Integer number = Optional
                                                .ofNullable(donateRecordRepository
                                                                .countAdoptedAnimalNumByMemberId(memberId))
                                                .orElse(0);
                                Integer amount = Optional
                                                .ofNullable(donateRecordRepository.sumAdoptedAmountByMemberId(memberId))
                                                .orElse(0);

                                adopterInfo = Map.of(
                                                "name", member.getNickName(),
                                                "number", number,
                                                "amount", amount);

                        } else {
                                adopterInfo = Map.of(
                                                "name", "",
                                                "number", 0,
                                                "amount", 0);
                        }

                }

                // const name = 'nick_name';
                // const number = 1;
                // const amount = 1000;

                return adopterInfo;

        }

        @GetMapping("/getAdopterAnimal/{memberId}")
        public List<Map<String, Object>> getAdopterAnimal(@PathVariable Long memberId) {

                List<Map<String, Object>> adopterAnimal = new ArrayList<Map<String, Object>>();

                Optional<Member> memberOp = memberRepository.findById(memberId);
                if (memberOp.isPresent()) {

                        Member member = memberOp.get();
                        if (member.getAnonymous() == false) {

                                // if animalIds not exist, return empty list (adopterAnimal)
                                List<Long> animalIds = Optional
                                                .ofNullable(donateRecordRepository
                                                                .findCurrentAdoptedAnimalIdsByMemberId(memberId))
                                                .orElse(new ArrayList<Long>());
                                for (Long animalId : animalIds) {

                                        Optional<Animal> animalOp = animalRepository.findById(animalId);
                                        Animal animal = animalOp.get();

                                        adopterAnimal.add(Map.of(
                                                        "title", animal.getName(),
                                                        "animalId", animalId));

                                }

                        }
                }

                // const animalData = [{title: 'name1', state: state_date, animalId: 1},];

                return adopterAnimal;

        }

}
