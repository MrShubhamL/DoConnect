package com.example.admin.helper;

import com.example.admin.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.Cookie;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.time.Duration;

@Component
public class OTPSender {

    @Autowired
    private EmailService emailService;

    private static final Cookie cookie = new Cookie();

    public boolean sendOtp(String email) throws Exception {
        int min = 199999;
        int max = 999999;
        int a = (int) (Math.random() * (max - min + 1) + min);
        String myOTP = ""+a;
        cookie.setName(myOTP);
        System.out.println("OTP : " + a);
        String setSubject = "OTP Verification!!";
        String setMessage = "New Admin Create Request. \n\n Please verify the otp - " + a;
        boolean b = this.emailService.sendEmail(setSubject, setMessage, email);
        if(!b){
            throw new Exception("User Email is not valid!!");
        }
        else{
            return true;
        }
    }



    public boolean verifyOTP(String otp){
        boolean b = false;
        String myOTP = cookie.getName();
        System.out.println("Sent OTP is: " + myOTP);
        if(otp.equals(myOTP)){
            cookie.setName("");
            cookie.setPath("/");
            Duration d = Duration.ofDays(0);
            cookie.setMaxAge(d);
            b = true;
        }
        return  b;
    }



}
