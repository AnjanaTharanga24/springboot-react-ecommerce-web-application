package com.example.backend.service.impl;

import com.example.backend.controller.request.CartRequest;
import com.example.backend.controller.response.CartResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.Cart;
import com.example.backend.model.Item;
import com.example.backend.model.User;
import com.example.backend.repository.CartRepository;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.BuyerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BuyerServiceImpl implements BuyerService {

    private UserRepository userRepository;
    private ItemRepository itemRepository;
    private CartRepository cartRepository;
    @Override
    public CartResponse addToCart(Long userId , CartRequest cartRequest) throws NotFoundException {

        User user = userRepository.findById(userId).orElseThrow(()-> new NotFoundException("user not found with id " + userId));
        Item item = itemRepository.findItemByName(cartRequest.getItemName());

        if(item == null){
            throw new NotFoundException("item not found with name" + cartRequest.getItemName());
        }

        Float price = (float) (item.getPrice() * cartRequest.getQuantity());

        Cart cart = new Cart();
        cart.setItemName(item.getName());
        cart.setCategory(item.getItemCategory());
        cart.setQuantity(cartRequest.getQuantity());
        cart.setPrice(price);
        cart.setUser(user);

        cartRepository.save(cart);

        return CartResponse.builder()
                .id(cart.getId())
                .itemName(cart.getItemName())
                .category(cart.getCategory())
                .quantity(cart.getQuantity())
                .price(cart.getPrice())
                .user(cart.getUser().getId())
                .build();
    }
}
