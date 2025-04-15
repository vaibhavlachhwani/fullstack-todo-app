package com.vaibhav.todorestapi.user;

import com.vaibhav.todorestapi.todo.TodoItem;
import com.vaibhav.todorestapi.todo.TodoNotFoundException;
import com.vaibhav.todorestapi.todo.TodoService;
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

    private User validateUser(String username) {
        User user = userService.getUserByUsername(username);

        if (user == null) {
            throw new UserNotFoundException("No User found for username : " + username);
        }

        return user;
    }

    private TodoItem validateTodo(int id) {
        TodoItem todo = todoService.findById(id);

        if (todo == null) {
            throw new TodoNotFoundException("No Todo Item found for id : " + id);
        }

        return todo;
    }

    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User saved = userService.saveUser(user);

        return ResponseEntity
                .ok()
                .body(saved);
    }

    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username) {
        User user = validateUser(username);

        return user;
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        User user = validateUser(username);

        userService.deleteUser(user.getUsername());

        return ResponseEntity
                .noContent()
                .build();
    }

    @GetMapping("/{username}/todos")
    public List<TodoItem> getUserTodos(@PathVariable String username) {
        User user = validateUser(username);

        return todoService.findByUser(user);
    }

    @GetMapping("/{username}/todos/{id}")
    public TodoItem getUserTodoById(@PathVariable String username, @PathVariable int id) {
        validateUser(username);
        TodoItem todo = validateTodo(id);

        return todo;
    }

    @DeleteMapping("/{username}/todos/{id}")
    public ResponseEntity<?> deleteUserTodoById(@PathVariable String username, @PathVariable int id) {
        validateUser(username);
        TodoItem todo = validateTodo(id);

        todoService.delete(todo.getId());

        return ResponseEntity
                .noContent()
                .build();
    }

    @PostMapping("/{username}/todos")
    public ResponseEntity<?> createTodoForUser(@PathVariable String username, @RequestBody TodoItem todo) {
        User user = validateUser(username);

        todo.setUser(user);
        TodoItem saved = todoService.save(todo);

        return ResponseEntity
                .ok()
                .body(saved);
    }

    @PutMapping("/{username}/todos/{id}")
    public ResponseEntity<?> updateUserTodo(@PathVariable String username, @PathVariable int id, @RequestBody TodoItem newTodo) {
        validateUser(username);
        validateTodo(id);

        TodoItem updated = todoService.updateTodo(id, newTodo);

        return ResponseEntity
                .ok()
                .body(updated);
    }
}
