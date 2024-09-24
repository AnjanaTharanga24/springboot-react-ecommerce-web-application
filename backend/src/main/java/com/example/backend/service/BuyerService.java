package com.example.backend.service;

import com.example.backend.controller.request.CartRequest;
import com.example.backend.controller.response.CartResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.Cart;

public interface BuyerService {

    CartResponse addToCart( Long userId , CartRequest cartRequest) throws NotFoundException;
}
