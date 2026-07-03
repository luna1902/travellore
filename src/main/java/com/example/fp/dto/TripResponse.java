package com.example.fp.dto;

import lombok.Data;

import java.util.Date;

@Data
public class TripResponse {
    private Long id;
    private String tripName;
    private Date startDate;
    private Date endDate;
    private Long budget;
    private String status;
    private String userName;
    private String destinationCity;
    private String destinationCountry;
}
