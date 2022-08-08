package com.qa_management.service.impl;


import com.qa_management.model.User;
import com.qa_management.model.UserRole;
import com.qa_management.repository.RoleRepository;
import com.qa_management.repository.UserRepository;
import com.qa_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User crateUser(User user, Set<UserRole> userRole) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if(local!=null){
            System.out.println("User is already exist!!");
            throw new Exception("User already created!!");
        }
        else{
            for(UserRole ur: userRole){
                this.roleRepository.save(ur.getRole());
            }
            user.getUserRole().addAll(userRole);
            local = this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User crateAdmin(User user, Set<UserRole> userRole) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if(local!=null){
            System.out.println("User is already exist!!");
            throw new Exception("User already created!!");
        }
        else{
            for(UserRole ur: userRole){
                this.roleRepository.save(ur.getRole());
            }
            user.getUserRole().addAll(userRole);
            local = this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public Long countUser(boolean enabled, String role) {
        return this.userRepository.count(enabled, role);
    }

    @Override
    public Long countAdmin(boolean enabled, String role) {
        return this.userRepository.adminCount(enabled,role);
    }

    @Override
    public Set<User> getAllActiveUsers() {
        return this.getAllActiveUsers();
    }
}