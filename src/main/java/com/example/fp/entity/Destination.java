package com.example.fp.entity;

import com.example.fp.enums.Role;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class Destination {
    private Long id;
    private String userName;
    private String country;
    private String city;
    private String description;
    private String bestSeason;
    private String imageUrl;
    private String createdBy;
    private Long budget;
    private Long longitude;
    private Long latitude;
}
