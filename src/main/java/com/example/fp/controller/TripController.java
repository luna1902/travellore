package com.example.fp.controller;

import com.example.fp.dto.TripRequest;
import com.example.fp.dto.TripResponse;
import com.example.fp.repository.TripRepository;
import com.example.fp.service.TripService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    private final TripService tripService;

    public TripController(TripService tripService, TripRepository tripRepository) {
        this.tripService = tripService;
    }

    @PostMapping("/add")
    public ResponseEntity<TripResponse> addTrip(@RequestBody TripRequest tripRequest){
        return ResponseEntity.ok(tripService.addTrip(tripRequest));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TripResponse> updateTrip(@PathVariable Long id, @RequestBody TripRequest tripRequest){
        tripRequest.setTripId(id);

        return ResponseEntity.ok(tripService.updateTrip(tripRequest));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTrip(@PathVariable Long id){
        return ResponseEntity.ok(tripService.deleteTrip(id));
    }

    @GetMapping
    public ResponseEntity<List<TripResponse>> getAllTrips(){
        return ResponseEntity.ok().body(tripService.getAllTrips());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TripResponse> getTripById(@PathVariable Long id){
        return ResponseEntity.ok().body(tripService.getTripById(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TripResponse>> getAllTripsByUserId(@PathVariable Long userId){
        return ResponseEntity.ok(tripService.getTripsByUser(userId));
    }
}
