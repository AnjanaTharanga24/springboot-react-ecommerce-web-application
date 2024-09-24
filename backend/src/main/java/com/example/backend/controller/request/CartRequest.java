package com.example.backend.controller.request;

import com.example.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartRequest {

    private Long id;
    private String itemName;
    private String category;
    private Integer quantity;
    private User user;
}
