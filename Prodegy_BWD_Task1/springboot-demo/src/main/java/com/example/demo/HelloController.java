package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello, Spring Boot!";
    }
 // Text Response
    @GetMapping("/greet")
    public String greet() {
        return "Welcome to Spring Boot!";
    }

    // JSON Response
    @GetMapping("/user")
    public Map<String, String> user() {
        Map<String, String> data = new HashMap<>();
        data.put("name", "Ganesh");
        data.put("role", "Backend Developer");
        return data;
    }
}
