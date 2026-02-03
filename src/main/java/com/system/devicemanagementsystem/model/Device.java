package com.system.devicemanagementsystem.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "device")
public class Device {

    @Id
    @GeneratedValue
    private UUID id;  // ✅ Use UUID

    private String name;
    private String ip;
    private String status;
    private LocalDateTime lastChecked;

    // Getters & setters
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getLastChecked() {
        return lastChecked;
    }

    public void setLastChecked(LocalDateTime lastChecked) {
        this.lastChecked = lastChecked;
    }
}
