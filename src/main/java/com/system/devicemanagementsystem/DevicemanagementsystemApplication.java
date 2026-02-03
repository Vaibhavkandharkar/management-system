package com.system.devicemanagementsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class DevicemanagementsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevicemanagementsystemApplication.class, args);
	}

}
