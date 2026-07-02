package com.example.fp.entity;

import com.example.fp.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;
    private String country;
    private String city;

    @Column(length=1000)
    private String description;
    private String bestSeason;
    private String imageUrl;
    private String createdBy;
    private Long budget;

}
