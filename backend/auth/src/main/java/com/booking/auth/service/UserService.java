package com.booking.auth.service;

import com.booking.auth.entity.User;
import com.booking.auth.feignclients.UserFeignClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

  Logger logger = LoggerFactory.getLogger(UserService.class);

  private final UserFeignClient userFeignClient;

  private static final String EMAIL_NOT_FOUND = "Email not found: ";

  @Autowired
  public UserService(UserFeignClient userFeignClient) {
    this.userFeignClient = userFeignClient;
  }

  public User findByEmail(String email) {
    User user = userFeignClient.findByEmail(email).getBody();
    if (user == null) {
      throw new IllegalArgumentException(EMAIL_NOT_FOUND);
    }
    return user;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userFeignClient.findByEmail(username).getBody();
    if (user == null) {
      throw new UsernameNotFoundException(EMAIL_NOT_FOUND);
    }
    return user;
  }
}
