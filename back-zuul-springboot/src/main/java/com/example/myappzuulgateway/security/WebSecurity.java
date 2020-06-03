package com.example.myappzuulgateway.security;

import com.google.common.collect.ImmutableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
    Environment env;

    @Autowired
    public WebSecurity(Environment env) {
        this.env = env;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.cors().and().authorizeRequests()
//                .antMatchers(HttpMethod.POST, env.getProperty("api.login.url.path")).permitAll()
//                .antMatchers(HttpMethod.POST, env.getProperty("api.registration.url.path")).permitAll()
//                .antMatchers(env.getProperty("api.h2console.url.path")).permitAll()
                .antMatchers("/api-user/signin").permitAll()
                .antMatchers("/api-user/signup").permitAll()
                .anyRequest().authenticated()
            .and().addFilter(new AuthorizationFilter(authenticationManager(), env));
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
