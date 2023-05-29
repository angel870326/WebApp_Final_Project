package com.example.repository;

import com.example.model.Shelter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;
import java.util.Map;

@Repository
public interface ShelterRepository extends JpaRepository<Shelter, Long> {

    Optional<Shelter> findById(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM shelter WHERE id = ?")
    Shelter findByShelterId(@Param("shelterId") Long shelterId);

    @Query(nativeQuery = true, value = "SELECT s.id as shelter_id, s.name as shelter_name, COUNT(*) as sheltered_num FROM animal a JOIN shelter s ON a.shelter_id = s.id GROUP BY s.id ORDER BY sheltered_num DESC LIMIT 3")
    List<Map<String, Object>> findTop3Shelters();

}