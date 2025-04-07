package com.vaibhav.todorestapi.user;

import com.vaibhav.todorestapi.todo.TodoItem;
import com.vaibhav.todorestapi.todo.TodoService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final TodoService todoService;

    public UserController(UserService userService, TodoService todoService) {
        this.userService = userService;
        this.todoService = todoService;
    }

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @GetMapping("/{id}/todos")
    public List<TodoItem> getUserTodos(@PathVariable int id) {
        User user = userService.getUserById(id);

        return todoService.findByUser(user);
    }

    @PostMapping("/{id}/todos")
    public ResponseEntity<?> createTodo(@PathVariable int id, @RequestBody TodoItem todo) {
        User user = getUserById(id);
        todo.setUser(user);

        TodoItem saved = todoService.save(todo);

        return ResponseEntity
                .ok()
                .body(saved);
    }

    @PostMapping("/")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User saved = userService.saveUser(user);

        return ResponseEntity
                .ok()
                .body(saved);
    }
}
