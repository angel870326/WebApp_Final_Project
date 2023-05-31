package com.example.repository;

import com.example.model.DonatePlan;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

@Repository
public interface DonatePlanRepository extends JpaRepository<DonatePlan, Long> {

    Optional<DonatePlan> findById(Long id);

    // AdoptAnimalController

    @Query(nativeQuery = true, value = "SELECT * FROM donate_plan WHERE name = ?")
    Optional<DonatePlan> findDonatePlanByName(@Param("donatePlanName") String donatePlanName);

}
