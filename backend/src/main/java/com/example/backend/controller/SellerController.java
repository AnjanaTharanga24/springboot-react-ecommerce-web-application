package com.example.backend.controller;

import com.example.backend.controller.request.SellerAddNewItemRequest;
import com.example.backend.controller.response.SellerAddNewItemResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.service.SellerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class SellerController {

    private SellerService sellerService;
    @PostMapping("/sellers/{user-id}/items")
    public SellerAddNewItemResponse addNewItem(@PathVariable("user-id") Long userId, @RequestBody SellerAddNewItemRequest sellerAddNewItemRequest) throws NotFoundException {
        return sellerService.addNewItem(userId,sellerAddNewItemRequest);
    }

}
