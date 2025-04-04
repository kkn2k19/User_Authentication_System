package com.kkn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.kkn")
@EnableJpaRepositories(basePackages = "com.kkn")
@EntityScan(basePackages = "com.kkn")
public class AuthdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthdemoApplication.class, args);
	}

}
