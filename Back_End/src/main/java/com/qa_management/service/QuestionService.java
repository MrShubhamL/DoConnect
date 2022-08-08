package com.qa_management.service;

import com.qa_management.model.Question;
import java.util.*;
public interface QuestionService {

    public Question addQuestion(Question question);

    public Set<Question> getAllQuestion();

    public Question getQuestionById(long id);

    public Set<Question> getAllEnabledQuestions();

    public Set<Question> getQuestionBySearchString(String name);

    public Long getCountOfEnabledQuestions(boolean b);

}
