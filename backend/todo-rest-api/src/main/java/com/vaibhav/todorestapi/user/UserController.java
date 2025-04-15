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

    private User validateUserExists(String username) {
        User user = userService.getUserByUsername(username);

        if (user == null) {
            throw new UserNotFoundException("No User found for username : " + username);
        }

        return user;
    }

    private TodoItem validateTodoExists(int id) {
        TodoItem todo = todoService.findById(id);

        if (todo == null) {
            throw new TodoNotFoundException("No Todo Item found for id : " + id);
        }

        return todo;
    }

    private void validateUserTodoOwnership(String username, int id) {
        User user = validateUserExists(username);
        validateTodoExists(id);

        boolean ownsTodo = false;

        ownsTodo = user.getTodoItems()
                .stream()
                .anyMatch(todo -> todo.getId() == id);

        if (!ownsTodo) {
            throw new UserTodoAccessException(
                    String.format("User : '%s' cannot access Todo item with ID : %d", username, id)
            );
        }
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
        User user = validateUserExists(username);

        return user;
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        User user = validateUserExists(username);

        userService.deleteUser(user.getUsername());

        return ResponseEntity
                .noContent()
                .build();
    }

    @GetMapping("/{username}/todos")
    public List<TodoItem> getUserTodos(@PathVariable String username) {
        User user = validateUserExists(username);

        return todoService.findByUser(user);
    }

    @GetMapping("/{username}/todos/{id}")
    public TodoItem getUserTodoById(@PathVariable String username, @PathVariable int id) {
        validateUserTodoOwnership(username, id);
        TodoItem todo = validateTodoExists(id);

        return todo;
    }

    @DeleteMapping("/{username}/todos/{id}")
    public ResponseEntity<?> deleteUserTodoById(@PathVariable String username, @PathVariable int id) {
        validateUserTodoOwnership(username, id);
        TodoItem todo = validateTodoExists(id);

        todoService.delete(todo.getId());

        return ResponseEntity
                .noContent()
                .build();
    }

    @PostMapping("/{username}/todos")
    public ResponseEntity<?> createTodoForUser(@PathVariable String username, @RequestBody TodoItem todo) {
        User user = validateUserExists(username);

        todo.setUser(user);
        TodoItem saved = todoService.save(todo);

        return ResponseEntity
                .ok()
                .body(saved);
    }

    @PutMapping("/{username}/todos/{id}")
    public ResponseEntity<?> updateUserTodo(@PathVariable String username,
                                            @PathVariable int id,
                                            @RequestBody TodoItem newTodo) {
        validateUserTodoOwnership(username, id);

        TodoItem updated = todoService.updateTodo(id, newTodo);

        return ResponseEntity
                .ok()
                .body(updated);
    }
}
