package com.example.repository;

import com.example.model.DonatePlan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DonatePlanRepository extends JpaRepository<DonatePlan, Long> {

    Optional<DonatePlan> findById(Long id);

}