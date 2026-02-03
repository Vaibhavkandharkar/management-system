package com.system.devicemanagementsystem.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class HealthScheduler {

    private final DeviceService service;

    public HealthScheduler(DeviceService service) {
        this.service = service;
    }

    @Scheduled(fixedRate = 5000) // every 5 seconds
    public void checkHealth() {
        service.simulateHealth();
    }
}
