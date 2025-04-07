package com.vaibhav.todorestapi.exception;

import com.vaibhav.todorestapi.todo.TodoNotFoundException;
import com.vaibhav.todorestapi.user.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Error> handleAllExceptions(Exception ex, WebRequest request) {
        Error error = new Error(LocalDateTime.now(), ex.getMessage(), request.getDescription(true));

        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(TodoNotFoundException.class)
    public final ResponseEntity<?> handleTodoNotFound(TodoNotFoundException ex, WebRequest request) {
        Error error = new Error(LocalDateTime.now(), ex.getMessage(), request.getDescription(true));

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public final ResponseEntity<?> handleUserNotFound(UserNotFoundException ex, WebRequest request) {
        Error error = new Error(LocalDateTime.now(), ex.getMessage(), request.getDescription(true));

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
