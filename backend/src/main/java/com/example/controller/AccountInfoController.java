package com.example.controller;

import com.example.model.*;
import com.example.repository.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

@RestController
public class AccountInfoController {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private ShelterRepository shelterRepository;
    @Autowired
    private DonatePlanRepository donatePlanRepository;
    @Autowired
    private DonateRecordRepository donateRecordRepository;

    @GetMapping("/getAccountInfo/{memberId}")
    public Map<String, Object> getAccountInfo(@PathVariable Long memberId) {

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

        // const user_name = 'user_name';
        // const name = 'nick_name';
        // const email = 'abc@gmail.com';
        // const phone = '09xxxxxxxx';
        // const anonymous = '是';

        return adopterInfo;

    }

    @GetMapping("/getAccountAnimal/{memberId}")
    public List<Map<String, Object>> getAccountAnimal(@PathVariable Long memberId) {

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
                    "img", "/animals/" + animalId + ".jpg",
                    "title", animalName,
                    "link", "/animals/animalsInfo"));
        }

        // const number = 1;
        // const amount = 1000;
        // const date = 'donation_end_date'
        // const state_date = `認養期間至 ${date}`
        // const state_pending = '認養申請審核中'
        // const state_end = '認養期間已過'
        // const animalData = [
        // {
        // img: '/animals/1.jpg',
        // title: 'name1',
        // state: state_date,
        // link: '/animals/animalsInfo',
        // },
        // {
        // img: '/animals/2.jpg',
        // title: 'name2',
        // state: state_pending,
        // link: '/animals/animalsInfo',
        // },
        // {
        // img: '/animals/2.jpg',
        // title: 'name3',
        // state: state_end,
        // link: '/animals/animalsInfo',
        // },
        // {
        // img: '/animals/1.jpg',
        // title: 'name4',
        // state: state_end,
        // link: '/animals/animalsInfo',
        // },
        // ];

        return adopterAnimal;

    }

}
