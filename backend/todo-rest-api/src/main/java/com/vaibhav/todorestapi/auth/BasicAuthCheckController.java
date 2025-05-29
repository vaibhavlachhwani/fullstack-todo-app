package com.vaibhav.todorestapi.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class BasicAuthCheckController {
    @GetMapping("/basic-auth")
    public String checkBasicAuth() {
        return "Success";
    }
}
