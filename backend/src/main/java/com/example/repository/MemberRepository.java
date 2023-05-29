package com.example.repository;

import com.example.model.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;
import java.util.Map;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findById(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM member WHERE id = ?")
    Member findByMemberId(@Param("memberId") Long memberId);

    // 非匿名
    @Query(nativeQuery = true, value = "SELECT * FROM member WHERE anonymous = 0")
    List<Member> findAllNotAnonymous();

    @Query(nativeQuery = true, value = "SELECT m.id as member_id, m.nick_name as member_name, COUNT(DISTINCT dr.animal_id) as adopting_num FROM donate_record dr JOIN member m ON dr.member_id = m.id WHERE dr.status = '認養中' and m.anonymous = 0 GROUP BY member_id ORDER BY adopting_num DESC LIMIT 3")
    List<Map<String, Object>> findTop3Members();

}