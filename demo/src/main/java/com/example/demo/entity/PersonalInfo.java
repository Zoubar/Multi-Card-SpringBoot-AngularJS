package com.example.demo.entity;

import com.example.demo.PlanType;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "personal_info")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class  PersonalInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;


    @Enumerated(EnumType.STRING)  // This ensures the enum is stored as a string
    private PlanType plan;         // e.g., "ARCADE", "ADVANCED", "PRO"

    private boolean checkboxSwitch; // true for monthly, false for yearly

    // Optional: Add constructors if needed

    public void PlansForm(PlanType plan, boolean checkboxSwitch) {
        this.plan = plan;
        this.checkboxSwitch = checkboxSwitch;
    }
}
