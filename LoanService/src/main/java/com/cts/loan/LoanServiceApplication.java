package com.cts.loan;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.condition.PatternsRequestCondition;

@SpringBootApplication
public class LoanServiceApplication {

	
	
	@Bean
	public FilterRegistrationBean jwtFilter(){
		FilterRegistrationBean registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new com.cts.loan.filter.jwtFilter());
		registrationBean.addUrlPatterns("/api/*");
		
		return registrationBean;
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(LoanServiceApplication.class, args);
	}
	
}
