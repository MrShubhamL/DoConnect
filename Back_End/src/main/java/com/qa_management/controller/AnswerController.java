package com.qa_management.controller;

import com.qa_management.model.Answer;
import com.qa_management.model.Question;
import com.qa_management.model.User;
import com.qa_management.repository.AnswerRepository;
import com.qa_management.repository.UserRepository;
import com.qa_management.service.AnswerService;
import com.qa_management.service.EmailService;
import com.qa_management.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;

import java.util.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class AnswerController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private AnswerService answerService;

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/create-answer/{id}")
    public Answer createAnswer(@PathVariable("id") Long id,@RequestBody Answer answer, Principal principal) throws Exception {
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
        Question question = this.questionService.getQuestionById(id);
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        answer.setCreatedDate(date.toString());
        answer.setCreatedTime(time.toString());
        answer.setEnabled(false);
        answer.setQuestion(question);
        answer.setUser(user);

        String subject = "New Answer Added!!";
        String message = "New Answer Added. Please approve the answer" + "\n" +

                "Question - " + question.getQuestion()+ "\n" +
                "Answer - " + answer.getAnswer() + "\n" +

                "Name - " + user.getFirstName() + " " +
                            user.getMiddleName() + " " +
                            user.getLastName() + "\n" +

                "Username - "+user.getUsername() + "\n" +
                "Created Date - " + date.toString() + "\n" +
                "Uploaded Time - " + time.toString();


        String to = "shubhamlohar952@gmail.com";

        boolean b = this.emailService.sendEmail(subject, message, to);
        if(b){
            return this.answerService.giveAnswer(answer);
        }
        else{
            throw new Exception("EMail Service problem..");
        }

    }

    @PostMapping("/update-answer/{ansId}/{queId}")
    public Answer updateAnswer(@RequestBody Answer answer,
                               @PathVariable("ansId") Long id,
                               @PathVariable("queId") Long queId,
                               Principal principal){
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        Question question = this.questionService.getQuestionById(queId);
        answer.setId(id);
        answer.setUser(user);
        answer.setCreatedTime(time.toString());
        answer.setCreatedDate(date.toString());
        answer.setQuestion(question);
        answer.setEnabled(true);
        System.out.println(id);
        return this.answerService.giveAnswer(answer);
    }

    @GetMapping("/all-answers/{id}")
    public Set<Answer> getAllAnswersByQuestionId(@PathVariable("id") Long id){
        return this.answerService.getAllAnswersByQuestionId(id);
    }

    @GetMapping("/all-enabled-answers/{id}")
    public Set<Answer> getAllEnabledAnswersById(@PathVariable("id") Long id){
        return this.answerService.getAllEnabledAnswersByQuestionId(id);
    }

    @GetMapping("/all-user-answers/")
    public Set<Answer> getAllUserAnswers(Principal principal){
        String username = principal.getName();
        User user = this.userRepository.findByUsername(username);
       return this.answerService.getAllAnswersByUserId(user.getId());
    }

    @DeleteMapping("/delete-answer/{id}")
    public Integer deleteAnswer(@PathVariable("id") Long id, Principal principal){
        return this.answerRepository.deleteAnswerById(id);
//        Answer answer = this.answerService.getAnswerById(id);
//        String username = principal.getName();
//        User user = this.userRepository.findByUsername(username);
//        user.getAnswers().remove(answer);
//        this.userRepository.save(user);
//        this.answerRepository.delete(answer);
    }

    @GetMapping("/single-answer/{id}")
    public Answer getAnswerById(@PathVariable("id") Long id){
        return  this.answerService.getAnswerById(id);
    }



}
