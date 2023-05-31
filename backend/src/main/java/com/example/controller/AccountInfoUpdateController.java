package com.example.controller;

import com.example.model.*;
import com.example.repository.*;
import com.example.form.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

@RestController
public class AccountInfoUpdateController {

        @Autowired
        private MemberRepository memberRepository;

        @PostMapping("/updateAccountInfo/{memberId}")
        public ResponseEntity<Void> updateAccountInfo(@PathVariable("memberId") Long memberId,
                        @RequestBody UpdateMemberInfoForm request) {

                Optional<Member> memberOp = memberRepository.findById(memberId);
                if (memberOp.isPresent()) {

                        Member member = memberOp.get();

                        member.setNickName(request.getName());
                        member.setEmail(request.getEmail());
                        member.setPhone(request.getPhone());
                        member.setAnonymous(request.getAnonymous());
                        if (!request.getPassword().equals("")) {
                                member.setPassWord(request.getPassword());
                        }
                        memberRepository.save(member);

                        return ResponseEntity.ok().build();

                } else {
                        return ResponseEntity.notFound().build();
                }

        }

}
