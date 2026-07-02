package com.example.fp.controller;

import com.example.fp.dto.DestinationRequest;
import com.example.fp.dto.DestinationResponse;
import com.example.fp.entity.Destination;
import com.example.fp.repository.DestinationRepository;
import com.example.fp.service.DestinationService;
import jakarta.validation.constraints.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/destination")
public class DestinationController {

    private final DestinationService destinationService;

    @Autowired
    public DestinationController(DestinationService destinationService) {
        this.destinationService = destinationService;
    }

    @PostMapping("/add")
    public ResponseEntity<DestinationResponse>addDestination(@RequestBody DestinationRequest destination){
        return ResponseEntity.ok().body(destinationService.addDestination(destination));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DestinationResponse> updateDestination(@PathVariable Long id,
                                                                 @RequestBody @NotNull DestinationRequest destinationRequest){
        destinationRequest.setId(id);
        return ResponseEntity.ok(destinationService.updateDestination(destinationRequest));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDestination(@PathVariable Long id){
        return ResponseEntity.ok(destinationService.deleteDestination(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DestinationResponse> getDestinationById(@PathVariable Long id){
        return ResponseEntity.ok().body(destinationService.getDestinationById(id));
    }

    @GetMapping
    public ResponseEntity<List<DestinationResponse>> getAllDestinations(){
        return ResponseEntity.ok().body(destinationService.getAllDestinations());
    }
}
