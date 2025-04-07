package com.vaibhav.todorestapi.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vaibhav.todorestapi.todo.TodoItem;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.java.Log;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String username;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<TodoItem> todoItems;
}
