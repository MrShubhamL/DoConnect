package com.qa_management.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String question;
    private String topic;
    private String createdDate;
    private String createdTime;
    private boolean enabled;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "question", orphanRemoval = true)
    @JsonIgnore
    private Set<Answer> answers = new HashSet<Answer>();

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "question", orphanRemoval = true)
    @JsonIgnore
    private Set<Post> post = new HashSet<Post>();

    @ManyToOne
    private User user;

    public Question() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Set<Post> getPost() {
        return post;
    }

    public void setPost(Set<Post> post) {
        this.post = post;
    }

    @Override
    public boolean equals(Object obj) {
        return this.id ==((Question)obj).getId();
    }
}
