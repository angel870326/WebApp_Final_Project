package com.example.controller;

import com.example.model.*;
import com.example.repository.*;
import com.example.form.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class RegisterController {

    @Autowired
    private MemberRepository memberRepository;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody RegisterForm request) {

        Map<String, String> responseBody = new HashMap<String, String>();

        String account = request.getAccount();
        String name = request.getName();
        String email = request.getEmail();
        String phone = request.getPhone();
        String password = request.getPassword();
        Boolean anonymous = request.getAnonymous();

        List<Member> currentMembers = memberRepository.findAll();
        for (Member currentMember : currentMembers) {
            if (currentMember.getUserName().equals(account)) {
                responseBody = Map.of(
                        "result", "Username duplicated");
                return new ResponseEntity<Map<String, String>>(responseBody, HttpStatus.OK);
            }
            if (currentMember.getEmail().equals(email)) {
                responseBody = Map.of(
                        "result", "Email duplicated");
                return new ResponseEntity<Map<String, String>>(responseBody, HttpStatus.OK);
            }
        }

        Member member = new Member(account, password, email, phone, name, anonymous);
        member.setId(Long.valueOf(currentMembers.size() + 1));
        memberRepository.save(member);

        responseBody = Map.of(
                "result", "Success");

        return new ResponseEntity<Map<String, String>>(responseBody, HttpStatus.OK);

    }

}
