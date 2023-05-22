package com.example.repository;

import com.example.model.Shelter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

@Repository
public interface ShelterRepository extends JpaRepository<Shelter, Long> {

    Optional<Shelter> findById(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM shelter WHERE id = ?")
    Shelter findByShelterId(@Param("shelterId") Long shelterId);

}