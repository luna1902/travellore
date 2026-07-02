package com.example.fp.dto;

import lombok.Data;

@Data
public class DestinationResponse {
    private Long id;
    private String country;
    private String city;
    private String description;
    private String imageUrl;
    private String bestSeason;
    private Long budget;
}
