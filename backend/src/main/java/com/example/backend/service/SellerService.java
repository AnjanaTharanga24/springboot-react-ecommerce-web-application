package com.example.backend.service;

import com.example.backend.controller.request.SellerAddNewItemRequest;
import com.example.backend.controller.response.SellerAddNewItemResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.Item;

import java.util.List;

public interface SellerService {
    SellerAddNewItemResponse addNewItem(Long userId , SellerAddNewItemRequest sellerAddNewItemRequest) throws NotFoundException;

    List<Item> itemsFindByCategory(String category);
}
