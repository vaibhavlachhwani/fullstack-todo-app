package com.vaibhav.todorestapi.todo;

import com.vaibhav.todorestapi.user.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoItemRepository) {
        this.todoRepository = todoItemRepository;
    }

    public List<TodoItem> findAll() {
        return todoRepository.findAll();
    }

    public TodoItem findById(int id) {
        return todoRepository.findById(id)
                .orElse(null);
    }

    public List<TodoItem> findByUser(User user) {
        return todoRepository.findAllByUser(user);
    }

    public TodoItem save(TodoItem todoItem) {
        return todoRepository.save(todoItem);
    }

    public void delete(int id) {
        todoRepository.deleteById(id);
    }
}
