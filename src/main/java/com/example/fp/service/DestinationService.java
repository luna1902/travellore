package com.example.fp.service;

import com.example.fp.dto.DestinationRequest;
import com.example.fp.dto.DestinationResponse;
import com.example.fp.entity.Destination;

import java.util.*;

public interface DestinationService {
   DestinationResponse addDestination(DestinationRequest destinationRequest);
   DestinationResponse updateDestination(DestinationRequest destination);
   String deleteDestination(Long id);
   DestinationResponse getDestinationById(Long destinationId);
   List<DestinationResponse> getAllDestinations();
}
