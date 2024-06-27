package com.backend.api.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class AppUser {

    @Id
    @SequenceGenerator(
        name = "users_sequence",
        sequenceName = "users_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.AUTO,
        generator = "users_sequence"
    )
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;

    public AppUser() {}

    public AppUser(Long argId,
                String argFirstName,
                String argLastName,
                String argPassword,
                String argEmail
                ) {
                    this.id = argId;
                    this.firstName = argFirstName;
                    this.lastName = argLastName;
                    this.password = argPassword;
                    this.email = argEmail;
                }

                public AppUser(String argFirstName,
                            String argLastName,
                            String argPassword,
                            String argEmail) {
                    this.firstName = argFirstName;
                    this.lastName = argLastName;
                    this.password = argPassword;
                    this.email = argEmail;
                }

                public Long getId() {
                    return id;
                }

                public String getFirstName() {
                    return firstName;
                }

                public String getLastName() {
                    return lastName;
                }

                public String getPassword() {
                    return password;
                }

                public String getEmail() {
                    return email;
                }

                public void setId(Long id) {
                    this.id = id;
                }

                public void setFirstName(String firstName) {
                    this.firstName = firstName;
                }

                public void setLastName(String lastName) {
                    this.lastName = lastName;
                }

                public void setPassword(String password) {
                    this.password = password;
                }

                public void setEmail(String email) {
                    this.email = email;
                }

                @Override
                public String toString() {
                    return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", password="
                            + password + ", email=" + email + "]";
                }     
}