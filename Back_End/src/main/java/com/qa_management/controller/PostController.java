package com.qa_management.controller;


import com.qa_management.model.Question;
import com.qa_management.model.User;
import com.qa_management.repository.PostRepository;
import com.qa_management.service.PostService;
import com.qa_management.service.QuestionService;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa_management.model.Post;
import com.qa_management.service.UserService;
import org.hibernate.boot.jaxb.internal.stax.LocalSchemaLocator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import java.util.*;
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class PostController {

    @Autowired
    private UserService userService;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private QuestionService questionService;

    @PostMapping("/create-post/{id}")
    public Post createPost(@RequestBody Post post,@PathVariable("id") Long id, Principal principal) throws IOException  {
        String username = principal.getName();
        User user = this.userService.getUser(username);
        post.setUser(user);
        LocalTime time = LocalTime.now();
        LocalDate date = LocalDate.now();
        post.setTime(time.toString());
        post.setDate(date.toString());
        post.setPicName("POST");
        Question question = this.questionService.getQuestionById(id);
        post.setQuestion(question);
        return this.postRepository.save(post);
    }


    @GetMapping("/user-post/{id}")
    public Set<Post> getPostByQuestionId(@PathVariable("id") Long id){
        return this.postRepository.getPostByQuestionId(id);
    }

    @GetMapping("/all-posts/")
    public Set<Post> getAllPost(){
        return this.postRepository.getALlPost();
    }


}
