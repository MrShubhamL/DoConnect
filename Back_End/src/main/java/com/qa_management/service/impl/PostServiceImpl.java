package com.qa_management.service.impl;

import com.qa_management.model.Post;
import com.qa_management.repository.PostRepository;
import com.qa_management.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;
    @Override
    public Post createPost(Post post) {
        return this.postRepository.save(post);
    }
}
