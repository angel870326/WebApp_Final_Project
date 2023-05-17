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
import java.util.HashMap;

@RestController
public class _DemoController {

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

    // Testing Functions

    // @GetMapping("/test")
    // public Integer test() {
    //     Integer donateRecords = donateRecordRepository.sumAmountOfDonateRecords();
    //     return donateRecords;
    // }

    // @RequestMapping("/addMember")
    // public Member saveMember() {
    // Member member = new Member();
    // member.setUserName("eva");
    // member.setPassWord("123456");
    // member.setEmail("eva@gmail.com");
    // member.setPhone("0900000000");
    // member.setNickName("Eva");
    // member.setAnonymous(false);
    // memberRepository.save(member);
    // return member;
    // }

    // @PostMapping(path = "/members", consumes = "application/json", produces =
    // "application/json")
    // public void addMember(@RequestBody Member member) {
    // // code
    // }

    // @PostMapping(path = "/members", consumes = "application/json", produces =
    // "application/json")
    // public ResponseEntity<User> create(@RequestBody User newUser) {
    // User user = userService.save(newUser);
    // if (user == null) {
    // throw new ServerException();
    // } else {
    // return new ResponseEntity<>(user, HttpStatus.CREATED);
    // }
    // }

}