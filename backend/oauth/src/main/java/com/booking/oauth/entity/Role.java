package com.booking.oauth.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role implements Serializable {

  private static final long serialVersionUID = 1L;

  private Long id;
  private String roleName;

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Role role = (Role) o;
    return Objects.equals(roleName, role.roleName);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(roleName);
  }
}
