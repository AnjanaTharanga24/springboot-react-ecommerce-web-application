package com.example.backend.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SellerAddNewItemRequest {

    private String name;
    private Integer price;
    private String itemCategory;
}
