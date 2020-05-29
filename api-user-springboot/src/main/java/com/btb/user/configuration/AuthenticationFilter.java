package com.btb.user.configuration;

import com.btb.user.data.UserDto;
import com.btb.user.data.model.LoginModel;
import com.btb.user.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private UserService userService;
    private Environment env;

    public AuthenticationFilter(UserService userService, Environment env, AuthenticationManager authenticationManager){
        this.userService = userService;
        this.env = env;
        super.setAuthenticationManager(authenticationManager);
    }

    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            LoginModel creds = new ObjectMapper().readValue(request.getInputStream(), LoginModel.class);
            return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(creds.getEmail(), creds.getPassword(), new ArrayList<>()));
        } catch (IOException io){
            throw new RuntimeException();
        }
    }

    @Override
    protected void successfulAuthentication(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain,
            Authentication authResult
    ) throws IOException, ServletException {
        String email = ((User)authResult.getPrincipal()).getUsername();
        UserDto userDto = userService.getUSerDetailsByEmail(email);
        Map<String, Object> map = new HashMap<>();
        map.put("group", userDto.getGroupName());
        String token = Jwts.builder()
                .setSubject(userDto.getEmail())
                .setHeader(map)
//                .setExpiration(new Date(System.currentTimeMillis() + Long.parseLong(env.getProperty("token.expiration_time"))))
                .setExpiration(new Date(System.currentTimeMillis() + (3600*1000)))
                .signWith(SignatureAlgorithm.HS512, env.getProperty("token.secret"))
//                .signWith(SignatureAlgorithm.HS512, "asdf;lkj")
                .compact();
        response.addHeader("token", token);
        response.addHeader("CustomerPK", userDto.getCustomerPK());
    }
}
