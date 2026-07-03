package com.example.fp.service;

import com.example.fp.dto.TripRequest;
import com.example.fp.dto.TripResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TripService {
    TripResponse addTrip(TripRequest tripRequest);
    TripResponse updateTrip(TripRequest tripRequest);
    String deleteTrip(Long id);
    TripResponse getTripById(Long tripId);
    List<TripResponse> getAllTrips();
    List<TripResponse> getTripsByUser(Long userId);
}
