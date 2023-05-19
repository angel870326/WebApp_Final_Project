package com.example.repository;

import com.example.model.DonateRecord;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

@Repository
public interface DonateRecordRepository extends JpaRepository<DonateRecord, Long> {

        Optional<DonateRecord> findById(Long id);

        // 認養紀錄list without審核失敗 byMemberId
        @Query(nativeQuery = true, value = "SELECT * FROM donate_record WHERE member_id = ? and status != '審核失敗'")
        List<DonateRecord> findDonateRecordsByMemberId(@Param("memberId") Long memberId);

        // 認養紀錄list without審核失敗 byMemberId&AnimalId
        @Query(nativeQuery = true, value = "SELECT * FROM donate_record WHERE animal_id = ?1 and member_id = ?2 and status != '審核失敗'")
        List<DonateRecord> findDonateRecordsByMemberIdAndAnimalId(@Param("animalId") Long animalId,
                        @Param("memberId") Long memberId);

        // 當前認養人IdList withoutThisMemberId byAnimalId
        @Query(nativeQuery = true, value = "SELECT DISTINCT member_id FROM donate_record WHERE animal_id = ?1 and member_id != ?2 and status = '認養中'")
        List<Long> findCurrentAdoptingMemberIdsWithoutThisMemberIdByAnimalId(@Param("animalId") Long animalId,
                        @Param("memberId") Long memberId);

        // byAnimalId

        // 當前總認養人數量 byAnimalId
        @Query(nativeQuery = true, value = "SELECT COUNT(DISTINCT member_id) FROM donate_record WHERE animal_id = ? and status = '認養中'")
        Integer sumCurrentAdopterNumOfDonateRecordsByAnimalId(@Param("animalId") Long animalId);

        // byMemberId

        // 當前總認養動物數量 byMemberId
        @Query(nativeQuery = true, value = "SELECT COUNT(DISTINCT animal_id) FROM donate_record WHERE member_id = ? and status = '認養中'")
        Integer sumCurrentAnimalNumOfDonateRecordsByMemberId(@Param("memberId") Long memberId);

        // 累積總認養動物數量 byMemberId
        @Query(nativeQuery = true, value = "SELECT COUNT(DISTINCT animal_id) FROM donate_record WHERE member_id = ? and (status = '認養中' or status = '認養結束')")
        Integer sumAnimalNumOfDonateRecordsByMemberId(@Param("memberId") Long memberId);

        // 累積認養金額 byMemberId
        @Query(nativeQuery = true, value = "SELECT SUM(dp.amount) FROM donate_record dr JOIN donate_plan dp ON dr.donate_plan_id = dp.id WHERE dr.member_id = ? and (dr.status = '認養中' or dr.status = '認養結束')")
        Integer sumAmountOfDonateRecordsByMemberId(@Param("memberId") Long memberId);

        // 當前認養動物IdList byMemberId
        @Query(nativeQuery = true, value = "SELECT DISTINCT animal_id FROM donate_record WHERE member_id = ? and status = '認養中'")
        List<Long> currentAdoptingAnimalIdsByMemberId(@Param("memberId") Long memberId);

        // // total

        // // 當前總認養動物數量
        // @Query(nativeQuery = true, value = "SELECT COUNT(DISTINCT animal_id) FROM
        // donate_record WHERE status='認養中'")
        // Integer sumCurrentAnimalNumOfDonateRecords();

        // // 累積總認養動物數量
        // @Query(nativeQuery = true, value = "SELECT COUNT(DISTINCT animal_id) FROM
        // donate_record WHERE status='認養中'")
        // Integer sumAnimalNumOfDonateRecords();

        // // 累積總認養金額
        // @Query(nativeQuery = true, value = "SELECT SUM(dp.amount) FROM
        // donate_recorddr JOIN donate_plan dp ON dr.donate_plan_id = dp.id WHERE
        // dr.status='認養中' or dr.status='認養結束'")
        // Integer sumAmountOfDonateRecords();

}