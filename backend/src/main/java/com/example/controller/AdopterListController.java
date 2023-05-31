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

                // if member not exist, return empty list (adopterList)
                List<Member> members = Optional
                                .ofNullable(memberRepository.findNotAnonymousMembers()).orElse(new ArrayList<Member>());
                for (Member member : members) {

                        List<Map<String, Object>> animalList = new ArrayList<Map<String, Object>>();

                        Long memberId = member.getId();
                        Integer currNum = Optional
                                        .ofNullable(donateRecordRepository
                                                        .countCurrentAdoptedAnimalNumByMemberId(memberId))
                                        .orElse(0);
                        Integer accumNum = Optional
                                        .ofNullable(donateRecordRepository
                                                        .countAdoptedAnimalNumByMemberId(memberId))
                                        .orElse(0);
                        Integer amount = Optional
                                        .ofNullable(donateRecordRepository.sumAdoptedAmountByMemberId(memberId))
                                        .orElse(0);

                        // if animalIds not exist, return empty list (animalList)
                        List<Long> animalIds = Optional
                                        .ofNullable(donateRecordRepository.findCurrentAdoptedAnimalIdsByMemberId(memberId))
                                        .orElse(new ArrayList<Long>());
                        if (animalIds.size() > 3) {
                                animalIds = animalIds.subList(0, 2);
                        }
                        for (Long animalId : animalIds) {

                                Optional<Animal> animalOp = animalRepository.findById(animalId);
                                Animal animal = animalOp.get();

                                animalList.add(Map.of(
                                                "img", "animals/" + animalId + ".jpg",
                                                "title", animal.getName()));

                        }

                        adopterList.add(Map.of(
                                        "id", memberId,
                                        "adopter", member.getNickName(),
                                        "currNum", currNum,
                                        "accumNum", accumNum,
                                        "amount", amount,
                                        "animal", animalList));

                }

                // const rowImgData = [{img: '1',title: 'name1',},];
                // const rows = [{ id: 1, adopter: 'name A', currNum: 1, accumNum: 11, amount:
                // 1000, animal: rowImgData },];

                return adopterList;

        }

}
