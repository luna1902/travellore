package com.example.fp.serviceImpl;

import com.example.fp.dto.TripRequest;
import com.example.fp.dto.TripResponse;
import com.example.fp.entity.Destination;
import com.example.fp.entity.Trip;
import com.example.fp.entity.User;
import com.example.fp.repository.DestinationRepository;
import com.example.fp.repository.TripRepository;
import com.example.fp.repository.UserRepository;
import com.example.fp.service.TripService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class TripServiceImpl implements TripService {

    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    private final DestinationRepository destinationRepository;
    private final ModelMapper modelMapper;


    public  TripServiceImpl(TripRepository tripRepository, UserRepository userRepository, DestinationRepository destinationRepository, ModelMapper modelMapper) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
        this.destinationRepository = destinationRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public TripResponse addTrip(TripRequest tripRequest) {
        Trip trip = new Trip();
        trip.setTripName(tripRequest.getTripName());
        trip.setStartDate(tripRequest.getStartDate());
        trip.setEndDate(tripRequest.getEndDate());
        trip.setBudget(tripRequest.getBudget());
        User user=userRepository.findById(tripRequest.getUserId())
                .orElseThrow(()->new RuntimeException("USER NOT FOUND"));
        Destination destination=destinationRepository.findById(tripRequest.getDestinationId())
                .orElseThrow(()->new RuntimeException("DESTINATION NOT FOUND"));
            trip.setUser(user);
            trip.setDestination(destination);
        Trip saved=tripRepository.save(trip);

        return convertToResponse(saved);
    }
        @Override
    public TripResponse updateTrip(TripRequest tripRequest) {
        Trip trip= tripRepository.findById(tripRequest.getTripId())
                .orElseThrow(()->new RuntimeException("Trip not found"));

        trip.setTripName(tripRequest.getTripName());
        trip.setStartDate(tripRequest.getStartDate());
        trip.setEndDate(tripRequest.getEndDate());
        trip.setBudget(tripRequest.getBudget());

        User user =userRepository.findById(tripRequest.getUserId())
                .orElseThrow(()->new RuntimeException("USER NOT FOUND"));
        Destination destination=destinationRepository.findById(tripRequest.getDestinationId())
                .orElseThrow(()->new RuntimeException("DESTINATION NOT FOUND"));
        trip.setUser(user);
        trip.setDestination(destination);
        Trip saved=tripRepository.save(trip);
        return convertToResponse(saved);

    }

    @Override
    public String deleteTrip(Long id) {
        Trip trip = tripRepository.findById(id).orElseThrow(()->new RuntimeException("Trip not found"));
        tripRepository.delete(trip);
        return "Trip deleted successfully";
    }
    @Override
    public TripResponse getTripById(Long tripId) {
        Trip trip=tripRepository.findById(tripId).orElseThrow(()->new RuntimeException("Trip not found"));
        return convertToResponse(trip);
    }
    @Override
    public List<TripResponse> getAllTrips() {
        List<Trip> trips=tripRepository.findAll();
        return trips.stream().map(this::convertToResponse).toList();
    }

    @Override
    public List<TripResponse> getTripsByUser(Long userId) {
        List<Trip> trips=tripRepository.findByUserUserId(userId);
        return trips.stream().map(this::convertToResponse).toList();
    }


private TripResponse convertToResponse(Trip trip) {
    TripResponse response = new TripResponse();

    response.setId(trip.getId());
    response.setTripName(trip.getTripName());
    response.setStartDate(trip.getStartDate());
    response.setEndDate(trip.getEndDate());
    response.setBudget(trip.getBudget());
    response.setStatus(trip.getStatus());

    if (trip.getUser() != null) {
        response.setUserName(trip.getUser().getUserName());
    }

    if (trip.getDestination() != null) {
        response.setDestinationCity(trip.getDestination().getCity());
        response.setDestinationCountry(trip.getDestination().getCountry());
    }

    return response;
}}