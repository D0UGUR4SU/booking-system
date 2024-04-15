package com.booking.user.service;

import com.booking.user.entity.User;
import com.booking.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

  private UserRepository repository;

  @Autowired
  public UserService(UserRepository repository) {
    this.repository = repository;
  }

  public UserService() {}

  public User save(User user) {
    if (user == null) {
      throw new RuntimeException();
    }
    user.setId(UUID.randomUUID().toString());
    repository.save(user);
    return user;
  }

  public User getUserById(String id) {
    return repository.findById(id);
  }

  public List<User> getAllUsers() {
    return repository.findAll();
  }

  public User getUserByEmail(String email) {
    return repository.findByEmail(email);
  }

  @Transactional
  public User update(String id, User user) {
    boolean userExists = verifyIfUserExists(id);
    if (userExists) {
      user.setId(user.getId());
      user.setName(user.getName());
      user.setEmail(user.getEmail());
      user.setRoles(user.getRoles());
    }
    return user;
  }

  public void delete(String id) {
    boolean userExists = verifyIfUserExists(id);
    if (!userExists) {
      throw new RuntimeException();
    }
  }

  public boolean verifyIfUserExists(String id) {
    User user = repository.findById(id);
    boolean exists = repository.existsById(user.getId());
    return exists;
  }
}
