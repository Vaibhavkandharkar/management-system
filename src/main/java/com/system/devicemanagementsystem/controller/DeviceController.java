package com.system.devicemanagementsystem.controller;

import com.system.devicemanagementsystem.model.Device;
import com.system.devicemanagementsystem.service.DeviceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class DeviceController {

    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }


    @GetMapping("/devices")
    public List<Device> getAllDevices() {
        return deviceService.getAllDevices();
    }
}
