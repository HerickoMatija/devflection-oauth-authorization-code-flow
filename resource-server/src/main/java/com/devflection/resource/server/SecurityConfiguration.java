package com.devflection.resource.server;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {    

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests(authz -> authz
                .antMatchers(HttpMethod.GET, "/favouritePlayers").hasAuthority("SCOPE_devflectionPlayers")
                .anyRequest().authenticated())
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
    }
}
