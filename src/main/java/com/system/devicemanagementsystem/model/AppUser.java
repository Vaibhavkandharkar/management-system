package com.system.devicemanagementsystem.model;

//package com.example.nms.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
public class AppUser {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String password;
    private String role; // ADMIN / USER
}
