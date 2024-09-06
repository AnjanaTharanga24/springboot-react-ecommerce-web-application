package com.example.backend.service.impl;

import com.example.backend.controller.request.SellerAddNewItemRequest;
import com.example.backend.controller.response.SellerAddNewItemResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.Item;
import com.example.backend.model.User;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.SellerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SellerServiceImpl implements SellerService {

    private ItemRepository itemRepository;
    private UserRepository userRepository;
    @Override
    public SellerAddNewItemResponse addNewItem(Long userId, SellerAddNewItemRequest sellerAddNewItemRequest) throws NotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()-> new NotFoundException("user not found with id " + userId));

        System.out.println(user.getRole());
        if (user != null){
            if (!user.getRole().equals("seller") || user.getRole() == null){
                throw new NotFoundException("user is not seller");
            }

            Item newItem = new Item();
            newItem.setName(sellerAddNewItemRequest.getName());
            newItem.setPrice(sellerAddNewItemRequest.getPrice());
            newItem.setItemCategory(sellerAddNewItemRequest.getItemCategory());
            newItem.setUser(userId);

            itemRepository.save(newItem);

            return SellerAddNewItemResponse.builder()
                    .id(newItem.getId())
                    .name(newItem.getName())
                    .price(newItem.getPrice())
                    .itemCategory(newItem.getItemCategory())
                    .user(newItem.getUser())
                    .build();
        }

        return null;
    }

    @Override
    public List<Item> itemsFindByCategory(String category) {

        List<Item> items = itemRepository.findItemByItemCategory(category);
        return items;
    }
}
