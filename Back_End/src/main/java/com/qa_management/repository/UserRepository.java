package com.qa_management.repository;

import com.qa_management.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.*;
public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String username);

    @Query(value = "SELECT count(id) FROM User WHERE roleName = :roleName and enabled = :enabled")
    public Long count(@Param("enabled") boolean enabled,@Param("roleName") String roleName);


    @Query(value = "SELECT count(id) FROM User WHERE roleName = :roleName and enabled = :enabled")
    public Long adminCount(@Param("enabled") boolean enabled,@Param("roleName") String roleName);

    @Query(value = "SELECT * FROM user WHERE enabled = true and roleName = 'NORMAL'", nativeQuery = true)
    public Set<User> getAllUsers();


}
