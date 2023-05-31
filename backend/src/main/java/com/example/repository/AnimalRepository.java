package com.example.repository;

import com.example.model.Animal;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    Optional<Animal> findById(Long id);

    // IndexController

    @Query(nativeQuery = true, value = "SELECT * FROM animal ORDER BY sheltered_date DESC LIMIT 3")
    List<Animal> findTop3NewestAnimals();

    @Query(nativeQuery = true, value = "SELECT COUNT(id) FROM animal")
    Integer countAnimalNum();

    // ShelterListController

    @Query(nativeQuery = true, value = "SELECT COUNT(id) FROM animal WHERE shelter_id = ?")
    Integer countAnimalNumByShelterId(@Param("shelterId") Long shelterId);

    // ShelterInfoController

    @Query(nativeQuery = true, value = "SELECT * FROM animal WHERE shelter_id = ?")
    List<Animal> findAnimalsByShelterId(@Param("shelterId") Long shelterId);

}
