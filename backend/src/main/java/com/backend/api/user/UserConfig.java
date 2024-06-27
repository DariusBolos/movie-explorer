package com.backend.api.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner (UserRepository repository) {
        return args -> {
            AppUser darius = new AppUser(
				"Darius",
				"Bolos",
				"admin1234",
				"bolosdarius@gmail.com"
			);

            AppUser admin = new AppUser(
				"admin",
				"2",
				"admin1234",
				"admin@gmail.com"
			);

            repository.saveAll(java.util.List.of(darius, admin));
        };
    }
}
