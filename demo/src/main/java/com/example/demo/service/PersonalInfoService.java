package com.example.demo.service;

import com.example.demo.entity.PersonalInfo;
import com.example.demo.repository.PersonalInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalInfoService {

    @Autowired
    private PersonalInfoRepository repository;

    public PersonalInfo savePersonalInfo(PersonalInfo info) {
        return repository.save(info);
    }


    public PersonalInfo getAllPersonalInfo(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Personal Info not found"));
    }

    // You can add more methods for CRUD operations if needed.
}
