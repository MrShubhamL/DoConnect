package com.qa_management.controller;


import com.qa_management.model.Role;
import com.qa_management.model.User;
import com.qa_management.model.UserRole;
import com.qa_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    // Craeting user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        user.setUserCreatedDate(date.toString());
        user.setUserCreatedTime(time.toString());
        user.setEnabled(true);
        user.setRoleName("NORMAL"); // for calculating normal users
        Set<UserRole> userRoleSet = new HashSet<>();
        Role role = new Role();
        role.setRoleName("NORMAL");
        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        userRoleSet.add(userRole);

        return this.userService.crateUser(user, userRoleSet);

    }




    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username){
        return this.userService.getUser(username);
    }

}
