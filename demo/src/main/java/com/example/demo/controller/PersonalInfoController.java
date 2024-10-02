package com.example.demo.controller;

import com.example.demo.entity.PersonalInfo;
import com.example.demo.service.PersonalInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/personal-info")
public class PersonalInfoController {

    @Autowired
    private PersonalInfoService personalInfoService;

    @PostMapping("/submit")
    public ResponseEntity<PersonalInfo> submitPersonalInfo(@RequestBody PersonalInfo personalInfo) {
        PersonalInfo savedInfo = personalInfoService.savePersonalInfo(personalInfo);
        return ResponseEntity.ok(savedInfo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalInfo> getPersonalInfo(@PathVariable Long id) {
        PersonalInfo personalInfo = personalInfoService.getAllPersonalInfo(id);
        return ResponseEntity.ok(personalInfo);
    }

}
