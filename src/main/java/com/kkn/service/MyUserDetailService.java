package com.kkn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kkn.model.User;
import com.kkn.model.UsersPrincipals;
import com.kkn.repo.UserRepository;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepo.findByUsername(username);

        if (user == null) {
            System.out.println("USERNAME NOT FOUND");
            throw new UsernameNotFoundException("USERNAME NOT FOUND");
        }

        return new UsersPrincipals(user);
    }
}
