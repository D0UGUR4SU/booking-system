package com.booking.user.repository;

import com.booking.user.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends MongoRepository<User, UUID> {

  User findById(String id);

  User findByEmail(String email);

  boolean existsById(String id);
}
