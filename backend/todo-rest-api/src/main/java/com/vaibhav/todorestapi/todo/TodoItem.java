package com.vaibhav.todorestapi.todo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vaibhav.todorestapi.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TodoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;

    private String description;
    private LocalDate dueDate;
    private boolean isDone;
}
