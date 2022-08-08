package com.example.admin.controller;

import com.example.admin.helper.OTPSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class MainController {

    @Autowired
    private OTPSender otpSender;


    // Craeting user
    @RequestMapping("/create-new-admin/7769038180/sendOTP")
    public void createUser() throws Exception {
        String adminEMAIL = "shubhamlohar952@gmail.com";
        boolean b = this.otpSender.sendOtp(adminEMAIL);
        if(!b){
            throw new Exception("Email not valid please try again!");
        }
        else{
            System.out.println("OTP Send Successful");
        }
    }

    @PostMapping("/create-new-admin/verify-otp/{otp}")
    public void verifyOTP(@PathVariable String otp) throws Exception{
        boolean b = this.otpSender.verifyOTP(otp);
        if (!b){
            throw new Exception("OTP Not Verified Successfully");
        }
        else{
            System.out.println("OTP Verified Successfully....");
        }
    }
}
