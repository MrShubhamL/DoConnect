package com.qa_management.controller;


import com.qa_management.config.JwtUtils;
import com.qa_management.model.JwtRequest;
import com.qa_management.model.JwtResponse;
import com.qa_management.model.User;
import com.qa_management.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtil;

    private void authenticate(String username, String password) throws Exception{
        try
        {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }
        catch (DisabledException e){
            throw new Exception("User Disabled");
        }catch (BadCredentialsException e){
            throw  new Exception(("Invalid Credentials"));
        }
    }

    // Generate Token API
    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
        try{
            authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());

        }catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("User Not Found");
        }
        // Authenticate User
        UserDetails user = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtil.generateToken(user);
        return ResponseEntity.ok(new JwtResponse(token));
    }



    // return the details of current logged user
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        return ((User) this.userDetailsService.loadUserByUsername(principal.getName()));
    }

}
