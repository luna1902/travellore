package com.example.fp.serviceImpl;

import com.example.fp.dto.DestinationRequest;
import com.example.fp.dto.DestinationResponse;
import com.example.fp.entity.Destination;
import com.example.fp.repository.DestinationRepository;
import com.example.fp.service.DestinationService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationServiceImpl implements DestinationService {

    private final DestinationRepository destinationRepository;
    private final ModelMapper modelMapper;
    public DestinationServiceImpl(DestinationRepository destinationRepository, ModelMapper modelMapper) {
        this.destinationRepository = destinationRepository;
        this.modelMapper = modelMapper;
    }
    @Override
    public DestinationResponse addDestination(DestinationRequest destinationRequest) {
       Destination destination=modelMapper.map(
            destinationRequest,
            Destination.class);
       Destination saved=destinationRepository.save(destination);
       return modelMapper.map(saved,DestinationResponse.class);
    }

    @Override
    public DestinationResponse updateDestination(DestinationRequest destination) {
        Destination dest=destinationRepository.findById(destination.getId()).orElseThrow(()->new RuntimeException("Destination not found"));

        modelMapper.map(destination,dest);
        Destination saved=destinationRepository.save(dest);
        return modelMapper.map(saved,DestinationResponse.class);
    }

    @Override
    public String deleteDestination(Long id) {
        Destination dest=destinationRepository.findById(id).orElseThrow(()->new RuntimeException("Destination not found"));
        destinationRepository.delete(dest);
        return "Destination deleted successfully";
    }

    @Override
    public DestinationResponse getDestinationById(Long destinationId) {
       Destination destination= destinationRepository.findById(destinationId).orElseThrow(()->new RuntimeException("Destination not found"));
       return modelMapper.map(destination,DestinationResponse.class);
    }

    @Override
    public List<DestinationResponse> getAllDestinations() {
               return destinationRepository.findAll()
                .stream()
                .map(n->modelMapper.map(n,DestinationResponse.class))
                .toList();

    }
}
