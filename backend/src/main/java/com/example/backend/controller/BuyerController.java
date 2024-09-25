package com.example.backend.controller;

import com.example.backend.controller.request.CartRequest;
import com.example.backend.controller.response.CartResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.service.BuyerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class BuyerController {

    private BuyerService buyerService;
    @PostMapping("/buyer/{buyer-id}/addtocart")
    public CartResponse addToCart(@PathVariable("buyer-id") Long buyerId , @RequestBody CartRequest cartRequest) throws NotFoundException {
       return buyerService.addToCart(buyerId,cartRequest);
    }
}
