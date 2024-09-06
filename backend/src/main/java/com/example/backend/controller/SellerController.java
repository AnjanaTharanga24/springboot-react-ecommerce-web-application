package com.example.backend.controller;

import com.example.backend.controller.request.SellerAddNewItemRequest;
import com.example.backend.controller.response.SellerAddNewItemResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.Item;
import com.example.backend.service.SellerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
public class SellerController {

    private SellerService sellerService;
    @PostMapping("/sellers/{user-id}/items")
    public SellerAddNewItemResponse addNewItem(@PathVariable("user-id") Long userId, @RequestBody SellerAddNewItemRequest sellerAddNewItemRequest) throws NotFoundException {
        return sellerService.addNewItem(userId,sellerAddNewItemRequest);
    }

    @GetMapping("/sellers/items")
    public List<Item> findByCategroy(@RequestParam("category") String category){
        return sellerService.itemsFindByCategory(category);
    }

}
