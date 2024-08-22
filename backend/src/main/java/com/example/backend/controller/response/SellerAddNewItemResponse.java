package com.example.backend.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SellerAddNewItemResponse {
    private Long id;
    private String name;
    private Integer price;
    private String itemCategory;
    private Long user;
}
