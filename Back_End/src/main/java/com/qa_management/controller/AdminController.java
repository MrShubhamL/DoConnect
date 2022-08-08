package com.qa_management.controller;

import com.qa_management.helper.OTPSender;
import com.qa_management.model.*;
import com.qa_management.repository.AnswerRepository;
import com.qa_management.repository.QuestionRepository;
import com.qa_management.repository.UserRepository;
import com.qa_management.service.AnswerService;
import com.qa_management.service.QuestionService;
import com.qa_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;


@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController extends Thread implements Serializable {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerService answerService;

    @Autowired
    private AnswerRepository answerRepository;


    @PostMapping("/")
    public User createNewAdmin(@RequestBody User user) throws Exception{
        LocalDate date2 = LocalDate.now();
        LocalTime time2 = LocalTime.now();
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        user.setUserCreatedDate(date2.toString());
        user.setUserCreatedTime(time2.toString());
        user.setEnabled(true);
        user.setRoleName("ADMIN"); // for calculating admins
        Set<UserRole> userRoleSet = new HashSet<>();
        Role role = new Role();
//        role.setRoleId(2L);
        role.setRoleName("ADMIN");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        userRoleSet.add(userRole);

        Thread.sleep(5000);
        return this.userService.crateAdmin(user, userRoleSet);

    }

    @PostMapping("/approve-question/{id}")
    public Question approveQuestion(@PathVariable("id") Long id, Principal principal){
        String username = principal.getName();
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        User user = this.userRepository.findByUsername(username);
        Question question = this.questionService.getQuestionById(id);
        question.setUser(user);
        question.setId(id);
        question.setEnabled(true);
        question.setCreatedDate(date.toString());
        question.setCreatedTime(time.toString());

        return this.questionService.addQuestion(question);
    }

    @PostMapping("/disabled-question/{id}")
    public Question disableQuestion(@PathVariable("id") Long id, Principal principal){
        String username = principal.getName();
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        User user = this.userRepository.findByUsername(username);
        Question question = this.questionService.getQuestionById(id);
        question.setUser(user);
        question.setId(id);
        question.setEnabled(false);
        question.setCreatedDate(date.toString());
        question.setCreatedTime(time.toString());

        return this.questionService.addQuestion(question);
    }

    @DeleteMapping("/delete-question/{id}")
    public void deleteQuestionById(@PathVariable("id") Long id, Principal principal){
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
        Question question = this.questionService.getQuestionById(id);

        user.getQuestion().remove(question);
        this.userRepository.save(user);
        this.questionRepository.delete(question);

    }



    @PostMapping("/approve-answer/{id}")
    public Answer approveAnswer(@PathVariable("id") Long id, Principal principal){
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
        Answer answer = this.answerRepository.getAnswerById(id);
        answer.setId(id);
        answer.setEnabled(true);
        return this.answerRepository.save(answer);
    }

    @PostMapping("/disable-answer/{id}")
    public Answer disableAnswer(@PathVariable("id") Long id, Principal principal){
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
        Answer answer = this.answerRepository.getAnswerById(id);
        answer.setId(id);
        answer.setEnabled(false);
        return this.answerRepository.save(answer);
    }

    @DeleteMapping("/deleteAnswerNow/{id}")
    public Integer deleteAnswerById(@PathVariable("id") Long id, Principal principal){
        return this.answerRepository.deleteAnswerById(id);
//        String username = principal.getName();
//        User user = this.userRepository.findByUsername(username);
//        Answer answer = this.answerService.getAnswerById(id);
//        user.getAnswers().remove(answer);
//        this.userRepository.save(user);
//        this.answerRepository.delete(answer);
    }

    @GetMapping("/count-users/")
    public Long countUser(){
        return this.userService.countUser(true,"NORMAL");
    }

    @GetMapping("/count-admins/")
    public Long countAdmin(){
        return this.userService.countUser(true,"ADMIN");
    }


    @GetMapping("/all-active-users")
    public Set<User> getAllActiveUsers(){
        return this.userService.getAllActiveUsers();
    }



    @GetMapping("/count-questions/")
    public Long countQuestion(){
        return this.questionService.getCountOfEnabledQuestions(true);
    }

    @GetMapping("/count-answers/")
    public Long countAnswers(){
        return this.answerService.getAllAnswerCount(true);
    }




}



