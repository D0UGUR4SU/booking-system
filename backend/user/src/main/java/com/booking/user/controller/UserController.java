package com.booking.user.controller;

import com.booking.user.entity.User;
import com.booking.user.service.UserService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<User> createUser(@RequestBody User user) {
    User savedUser = userService.save(user);
    return ResponseEntity.status(HttpStatus.OK).body(savedUser);
  }

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = userService.getAllUsers();
    return ResponseEntity.ok(users);
  }

  @GetMapping("{id}")
  public ResponseEntity<User> getUserById(@PathVariable String id) {
    User user = userService.getUserById(id);
    if (user == null) {
      throw new RuntimeException();
    }
    return ResponseEntity.ok(user);
  }

  @PutMapping("/{id}")
  public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
    User retrievedUser = userService.getUserById(id);
    if (retrievedUser == null) {
      throw new RuntimeException();
    }
    retrievedUser.setName(user.getName());
    retrievedUser.setEmail(user.getEmail());
    retrievedUser.setPassword(user.getPassword());
    retrievedUser.setRoles(user.getRoles());

    User updatedUser = userService.update(id, user);
    return ResponseEntity.ok(updatedUser);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<User> deleteUser(@PathVariable String id) {
    boolean userExists = userService.verifyIfUserExists(id);
    if(!userExists) {
      throw new RuntimeException();
    }
    userService.delete(id);
    return ResponseEntity
            .status(HttpStatus.NO_CONTENT)
            .build();
  }

  @GetMapping("/search")
  public ResponseEntity<User> findByEmail(@RequestParam String email) {
    User user = userService.getUserByEmail(email);
    return ResponseEntity.ok(user);
  }

}
