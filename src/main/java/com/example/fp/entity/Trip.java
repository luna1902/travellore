package com.example.fp.entity;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tripName;
    private Date startDate;
    private Date endDate;
    private Long budget;
    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
            @JoinColumn(name = "destination_id")
    Destination destination;
}
