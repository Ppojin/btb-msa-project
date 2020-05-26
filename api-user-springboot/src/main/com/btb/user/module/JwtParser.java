package com.btb.user.module;

import com.btb.user.exception.UserNotFoundException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

public class JwtParser {
    Environment env;
    public JwtParser(Environment env){
        this.env = env;
    }

    public String getCurrentUserEmail(HttpServletRequest request){
        // header 에 token 포함 여부 및 올바른 token 인지
        String authHeader = request.getHeader(env.getProperty("authorization.token.header.name"));
        String prefix = env.getProperty("authorization.token.header.prefix");
        if(authHeader == null || !authHeader.startsWith(prefix)) throw new UserNotFoundException("");

        String token = authHeader.replace(env.getProperty("authorization.token.header.prefix"),"");
        String email = Jwts.parser()
                .setSigningKey(env.getProperty("token.secret"))
                .parseClaimsJws(token.trim())
                .getBody()
                .getSubject();
        return email;
    }
}
