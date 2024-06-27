package com.backend.api.user;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<AppUser> getUsers() {
		return userRepository.findAll();
	}


    public void addUser(AppUser user) {
        Optional<AppUser> userByEmail = userRepository.findUserByEmail(user.getEmail());

        List<String> validEmailSequences = Arrays.asList("@", ".com");

        if (userByEmail.isPresent()) {
            throw new IllegalStateException("Email already taken");
        }

        for (String sequence : validEmailSequences) {
            if(!user.getEmail().contains(sequence)) {
                throw new IllegalStateException("Email is not valid");
            }
        }

        userRepository.save(user);
    }


    public void deleteUser(Long userId) {
       boolean isUserEntry = userRepository.existsById(userId);

        if (!isUserEntry) {
            throw new IllegalStateException("User with the id of: " + userId + " does not exist");
        }

        userRepository.deleteById(userId);
    }


    public void updateUser(Long userId) {
        // TODO Implement update user method
    }
}
