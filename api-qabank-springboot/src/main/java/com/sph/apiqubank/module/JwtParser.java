package com.sph.apiqubank.module;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwsHeader;
import io.jsonwebtoken.Jwts;
import org.springframework.core.env.Environment;

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
        if(authHeader == null || !authHeader.startsWith(prefix)) throw new RuntimeException("JWT Header not found");

        String token = authHeader.replace(env.getProperty("authorization.token.header.prefix"),"");
        String email = Jwts.parser()
                .setSigningKey(env.getProperty("token.secret"))
                .parseClaimsJws(token.trim())
                .getBody()
                .getSubject();
        return email;
    }

    public String getCurrentUserGroup(HttpServletRequest request){
        // header 에 token 포함 여부 및 올바른 token 인지
        String authHeader = request.getHeader(env.getProperty("authorization.token.header.name"));
        String prefix = env.getProperty("authorization.token.header.prefix");
        if(authHeader == null || !authHeader.startsWith(prefix)) throw new RuntimeException("JWT Header not found");

        String token = authHeader.replace(env.getProperty("authorization.token.header.prefix"),"");
        JwsHeader jwsHeader = Jwts.parser()
                .setSigningKey(env.getProperty("token.secret"))
                .parseClaimsJws(token.trim())
                .getHeader();
        String groupName = (String) jwsHeader.get("group");
        return groupName;
    }
}
