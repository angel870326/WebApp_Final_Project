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
public class AccountInfoController {

        @Autowired
        private MemberRepository memberRepository;
        @Autowired
        private DonateRecordRepository donateRecordRepository;

        @GetMapping("/getAccountInfo/{memberId}")
        public Map<String, Object> getAccountInfo(@PathVariable Long memberId) {

                Map<String, Object> accountInfo = new HashMap<String, Object>();

                Member member = memberRepository.findByMemberId(memberId);

                // if member not exist, return empty map (adopterInfo)
                if (member != null) {

                        String anonymous = "否";
                        if (member.getAnonymous() == true) {
                                anonymous = "是";
                        }

                        accountInfo = Map.of(
                                        "user_name", member.getUserName(),
                                        "name", member.getNickName(),
                                        "email", member.getEmail(),
                                        "phone", member.getPhone(),
                                        "anonymous", anonymous);

                }

                // const user_name = 'user_name';
                // const name = 'nick_name';
                // const email = 'abc@gmail.com';
                // const phone = '09xxxxxxxx';
                // const anonymous = '是';

                return accountInfo;

        }

        @GetMapping("/getAccountAdoptInfo/{memberId}")
        public Map<String, Object> getAccountAdoptInfo(@PathVariable Long memberId) {

                Map<String, Object> accountAdoptInfo = new HashMap<String, Object>();

                Member member = memberRepository.findByMemberId(memberId);

                // if member not exist, return empty map (adopterInfo)
                if (member != null) {
                        // 會員累積認養動物數量
                        Integer number = Optional
                                        .ofNullable(donateRecordRepository
                                                        .sumAnimalNumOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);
                        // 會員累積認養金額
                        Integer amount = Optional
                                        .ofNullable(donateRecordRepository.sumAmountOfDonateRecordsByMemberId(memberId))
                                        .orElse(0);

                        accountAdoptInfo = Map.of(
                                        "number", number,
                                        "amount", amount);

                }

                // const number = 1;
                // const amount = 1000;

                return accountAdoptInfo;

        }

        @GetMapping("/getAccountAnimal/{memberId}")
        public List<Map<String, Object>> getAccountAnimal(@PathVariable Long memberId) {

                List<Map<String, Object>> accountAnimal = new ArrayList<Map<String, Object>>();

                // if adopted animal not exist, return empty list (accountAnimal)
                List<Long> adoptingAnimalIds = Optional
                                .ofNullable(donateRecordRepository.adoptingAnimalIdsByMemberId(memberId))
                                .orElse(new ArrayList<Long>());
                for (Long adoptingAnimalId : adoptingAnimalIds) {

                        DonateRecord donateRecord = Optional
                                        .ofNullable(donateRecordRepository.findNewestDonateRecordByAnimalIdAndMemberId(
                                                        adoptingAnimalId, memberId))
                                        .orElse(new DonateRecord());

                        String state = donateRecord.getStatus();
                        if (state.equals("認養中")) {
                                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
                                LocalDateTime endDate = donateRecord.getDonationEndDate();
                                try {
                                        state = "認養至" + endDate.format(formatter);
                                } catch (NullPointerException e) {
                                }
                        }

                        Animal animal = donateRecord.getAnimal();
                        Long animalId = animal.getId();
                        String aniamalName = animal.getName();

                        accountAnimal.add(Map.of(
                                        "state", state,
                                        "title", aniamalName,
                                        "animalId", animalId));

                }

                // const animalData = [{title: 'name1', state: state_date, animalId: 1,];

                return accountAnimal;

        }

}