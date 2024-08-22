package com.example.backend.service;

import com.example.backend.controller.request.SellerAddNewItemRequest;
import com.example.backend.controller.response.SellerAddNewItemResponse;
import com.example.backend.exception.NotFoundException;

public interface SellerService {
    SellerAddNewItemResponse addNewItem(Long userId , SellerAddNewItemRequest sellerAddNewItemRequest) throws NotFoundException;
}
