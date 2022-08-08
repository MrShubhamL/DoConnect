package com.qa_management.service.impl;

import com.qa_management.model.Answer;
import com.qa_management.repository.AnswerRepository;
import com.qa_management.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    @Override
    public Answer giveAnswer(Answer answer) {
        return this.answerRepository.save(answer);
    }

    @Override
    public Set<Answer> getAllAnswersByQuestionId(Long id) {
        return this.answerRepository.getAllAnswersByQuestionId(id);
    }

    @Override
    public Set<Answer> getAllEnabledAnswersByQuestionId(Long id) {
        return this.answerRepository.getAllEnabledAnswersByQuestionId(id);
    }

    @Override
    public Answer getAnswerByQuestionId(Long id) {
        return this.answerRepository.getAnswerByQuestionId(id);
    }

    @Override
    public Set<Answer> getAllAnswersByUserId(Long id) {
        return this.answerRepository.getAllAnswersUserId(id);
    }


    @Override
    public Answer getAnswerById(Long id) {
        return this.answerRepository.getAnswerById(id);
    }

    @Override
    public Integer deleteAnswerById(Long id) {
       return this.answerRepository.deleteAnswerById(id);
    }

    @Override
    public Long getAllAnswerCount(boolean b) {
        return this.answerRepository.answerCount(b);
    }
}
