package com.example.fp.dto;

import lombok.Data;

import java.util.Date;

@Data
public class TripRequest {
    private Long tripId;
    private String tripName;
    private Date startDate;
    private Date endDate;
    private Long budget;
    private Long userId;
    private Long destinationId;
}
