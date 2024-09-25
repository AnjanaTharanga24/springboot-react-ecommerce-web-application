package com.example.backend.controller.response;

import com.example.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartResponse {

    private Long id;
    private String itemName;
    private String category;
    private Integer quantity;
    private Float price;
    private Long user;
}
