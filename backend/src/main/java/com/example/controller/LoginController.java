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

import java.util.Optional;
import java.util.Map;
import java.util.HashMap;

@RestController
public class LoginController {

    @Autowired
    private MemberRepository memberRepository;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> addDonation(@RequestBody LoginForm request) {

        Map<String, Object> responseBody = new HashMap<String, Object>();

        String username = request.getUsername();
        String password = request.getPassword();

        Optional<Member> memberOp = memberRepository.findMemberByUserName(username);
        if (memberOp.isPresent()) {

            Member member = memberOp.get();

            if (password.equals(member.getPassWord())) {
                responseBody = Map.of(
                        "result", "Success",
                        "userId", member.getId());
                return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.OK);
            } else {
                responseBody = Map.of(
                        "result", "Wrong password",
                        "userId", Long.valueOf(0));
                return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.OK);
            }

        } else {
            responseBody = Map.of(
                    "result", "Wrong username",
                    "userId", Long.valueOf(0));
            return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.OK);
        }

    }

}
