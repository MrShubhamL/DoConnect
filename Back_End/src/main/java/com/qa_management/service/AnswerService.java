package com.qa_management.service;

import com.qa_management.model.Answer;
import java.util.*;
public interface AnswerService {

    public Answer giveAnswer(Answer answer);

    public Set<Answer> getAllAnswersByQuestionId(Long id);

    public Set<Answer> getAllEnabledAnswersByQuestionId(Long id);

    public Answer getAnswerByQuestionId(Long id);

    public Set<Answer> getAllAnswersByUserId(Long id);

    public Answer getAnswerById(Long id);

    public Integer deleteAnswerById(Long id);

    public Long getAllAnswerCount(boolean b);
}
