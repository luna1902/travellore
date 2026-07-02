package com.example.fp.dto;

import lombok.Data;

@Data
public class DestinationRequest {
    private Long id;
    private String country;
    private String city;
    private String description;
    private String bestSeason;
    private String imageUrl;
    private Long budget;
}
