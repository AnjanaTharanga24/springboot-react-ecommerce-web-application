package com.example.backend.controller.request;

import com.example.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartRequest {

    private String itemName;
    private Integer quantity;
    private User user;
}
