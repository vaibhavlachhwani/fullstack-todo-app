package com.vaibhav.todorestapi.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vaibhav.todorestapi.todo.TodoItem;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @NotNull @Id private String username;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<TodoItem> todoItems;
}
