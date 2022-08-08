package com.qa_management.controller;

import com.qa_management.model.Question;
import com.qa_management.model.User;
import com.qa_management.repository.QuestionRepository;
import com.qa_management.repository.UserRepository;
import com.qa_management.service.EmailService;
import com.qa_management.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/add-question/")
    public Question addQuestion(@RequestBody Question question, Principal principal) throws Exception{
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
        question.setUser(user);
        question.setCreatedDate(date.toString());
        question.setEnabled(false);
        question.setCreatedTime(time.toString());
        String subject = "New Question Added!!";
        String message = "New Question Added. Please approve the question" + "\n" +

                "Question - " + question.getQuestion()+ "\n" +

                "Name - " + user.getFirstName() + " " +
                user.getMiddleName() + " " +
                user.getLastName() + "\n" +

                "Username - "+user.getUsername() + "\n" +
                "Created Date - " + date.toString() + "\n" +
                "Uploaded Time - " + time.toString();



        String to = "shubhamlohar952@gmail.com";    // add your email...
        boolean b = this.emailService.sendEmail(subject, message, to);
        if(b){
            return this.questionService.addQuestion(question);
        }
        else{
            throw new Exception("EMail Service problem..");
        }
    }

    @GetMapping("/all-questions/")
    public Set<Question> getAllQuestions(){
        return this.questionService.getAllQuestion();
    }

    @GetMapping("/enabled-questions/")
    public Set<Question> getAllEnabledQuestions(){
        return this.questionService.getAllEnabledQuestions();
    }

    @GetMapping("/single-question/{id}")
    public Question getQuestionById(@PathVariable("id") Long id){
        return this.questionService.getQuestionById(id);
    }

    @GetMapping("/search-name/{question}")
    public Set<Question> searchByQuestionAndUser(@PathVariable("question") String question){
        return this.questionService.getQuestionBySearchString(question);
    }

}
