package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Allows CORS for any endpoint starting with /api/
                .allowedOrigins("http://localhost:4200") // Specify the allowed origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specify the allowed methods
                .allowedHeaders("*") // Allow any headers
                .allowCredentials(true); // Allow credentials if needed
    }
}
