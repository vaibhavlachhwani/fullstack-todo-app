package com.vaibhav.todorestapi.todo;

import com.vaibhav.todorestapi.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoItem, Integer> {
    List<TodoItem> findAllByUser(User user);
}
