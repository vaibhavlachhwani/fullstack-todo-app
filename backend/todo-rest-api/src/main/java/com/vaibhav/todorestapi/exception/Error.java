package com.vaibhav.todorestapi.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class Error {
    private LocalDateTime timestamp;
    private String message;
    private String details;
}
