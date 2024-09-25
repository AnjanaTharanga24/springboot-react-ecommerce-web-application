package com.example.backend.repository;

import com.example.backend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item,Long> {

    List<Item> findItemByItemCategory(String category);
    Item findItemByName(String itemName);
}
