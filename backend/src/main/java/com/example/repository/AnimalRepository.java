package com.example.repository;

import com.example.model.Animal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    Optional<Animal> findById(Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM animal WHERE id = ?")
    Animal findByAnimalId(@Param("animalId") Long animalId);

    @Query(nativeQuery = true, value = "SELECT * FROM animal ORDER BY sheltered_date DESC LIMIT 3")
    List<Animal> findTop3NewestAnimals();

    // 總動物數量
    @Query(nativeQuery = true, value = "SELECT COUNT(id) FROM animal")
    Integer sumCurrentAmountOfDonateRecords();

    // byShelterId
    @Query(nativeQuery = true, value = "SELECT * FROM animal WHERE shelter_id = ?")
    List<Animal> findByShelterId(@Param("shelterId") Long shelterId);

    // 總動物數量 byShelterId
    @Query(nativeQuery = true, value = "SELECT COUNT(id) FROM animal WHERE shelter_id = ?")
    Integer sumAnimalNumByShelterId(@Param("shelterId") Long shelterId);

}