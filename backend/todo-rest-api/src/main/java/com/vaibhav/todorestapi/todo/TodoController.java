package com.vaibhav.todorestapi.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/")
    public List<TodoItem> getAllTodos() {
        return todoService.findAll();
    }

    @GetMapping("/{id}")
    public TodoItem getTodoById(@PathVariable int id) {
        return todoService.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> saveTodo(@RequestParam TodoItem todoItem) {
        TodoItem saved = todoService.save(todoItem);

        return ResponseEntity
                .ok()
                .body(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable int id) {
        todoService.delete(id);

        return ResponseEntity
                .noContent()
                .build();
    }
}
