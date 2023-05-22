package com.example.repository;

import com.example.model.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findById(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM member WHERE id = ?")
    Member findByMemberId(@Param("memberId") Long memberId);

    // 非匿名
    @Query(nativeQuery = true, value = "SELECT * FROM member WHERE anonymous = 0")
    List<Member> findAllNotAnonymous();

}