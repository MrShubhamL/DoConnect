package com.qa_management.helper;

import com.qa_management.service.EmailService;
import com.qa_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.Cookie;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.time.Duration;

@Component
public class OTPSender {

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserService userService;

    @Autowired
    private HttpSession session;




    private final Cookie cookie = new Cookie();

    public boolean sendOtp(String email) throws Exception {
        int min = 199999;
        int max = 999999;
        int a = (int) (Math.random() * (max - min + 1) + min);
        String myOTP = ""+a;
        cookie.setName(myOTP);
        System.out.println("OTP : " + a);
        String setSubject = "OTP Verification!!";
        String setMessage = "Please verify the otp - " + a;
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
