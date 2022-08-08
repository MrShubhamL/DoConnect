package com.qa_management.repository;

import com.qa_management.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface PostRepository extends JpaRepository<Post, Long> {
    Optional<Post> findByPicName(String name);

    public Set<Post> getPostByQuestionId(Long id);

    @Query(value = "SELECT * FROM post", nativeQuery = true)
    public Set<Post> getALlPost();
}
