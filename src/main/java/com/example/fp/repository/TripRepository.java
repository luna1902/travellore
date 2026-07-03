package com.example.fp.repository;

import com.example.fp.dto.TripRequest;
import com.example.fp.dto.TripResponse;
import com.example.fp.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TripRepository extends JpaRepository<Trip, Long> {

    List<Trip> findByUserUserId(Long userId);

}
