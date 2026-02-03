package com.system.devicemanagementsystem.service;

import com.system.devicemanagementsystem.model.Device;
import com.system.devicemanagementsystem.repository.DeviceRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;
    private final Random random = new Random();

    public DeviceService(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    // ✔ Used by DeviceController
    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    // ✔ Used by HealthScheduler
    public void simulateHealth() {
        List<Device> devices = deviceRepository.findAll();

        for (Device d : devices) {
            d.setStatus(random.nextBoolean() ? "UP" : "DOWN");
            d.setLastChecked(LocalDateTime.now());
            deviceRepository.save(d);
        }
    }
}
