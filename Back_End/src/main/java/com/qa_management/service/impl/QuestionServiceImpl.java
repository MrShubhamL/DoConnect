package com.qa_management.service.impl;

import com.qa_management.model.Question;
import com.qa_management.repository.QuestionRepository;
import com.qa_management.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getAllQuestion() {
        return this.questionRepository.getAllQuestions();
    }

    @Override
    public Question getQuestionById(long id) {
        return this.questionRepository.getQuestionById(id);
    }

    @Override
    public Set<Question> getAllEnabledQuestions() {
        return this.questionRepository.getAllEnabledQuestions();
    }

    @Override
    public Set<Question> getQuestionBySearchString(String name) {
        return this.questionRepository.findByQuestionContaining(name);
    }

    @Override
    public Long getCountOfEnabledQuestions(boolean b) {
        return this.questionRepository.questionCount(b);
    }
}
