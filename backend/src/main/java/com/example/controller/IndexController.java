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

import java.util.HashMap;

public class IndexController {

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

    // @GetMapping("/index")
    // public Map<String, Object> getAnimals() {
    //     // 累積收容動物數量
    //     // 累積認養金額
    //     // 動物列表：（前三 新進順序）名字和id
    //     // 認養人列表：（前三 當前認養動物數量順序）名字和認養動物數量和id
    //     // 收容所列表：（前三 當前收容動物數量順序）名字和收容動物數量和id
    //     Map<String, Object> object = new HashMap<String, Object>();
    //     return object;
    // }

}
