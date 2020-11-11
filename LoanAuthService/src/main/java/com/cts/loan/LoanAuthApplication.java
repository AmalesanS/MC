package com.cts.loan;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableEurekaClient
@RefreshScope
public class LoanAuthApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoanAuthApplication.class, args);
	}
	
	/*
	 * @Bean public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
	 * UrlBasedCorsConfigurationSource source = new
	 * UrlBasedCorsConfigurationSource(); CorsConfiguration config = new
	 * CorsConfiguration(); config.setAllowCredentials(true);
	 * config.setAllowedOrigins(Collections.singletonList("*"));
	 * config.setAllowedMethods(Collections.singletonList("*"));
	 * config.setAllowedHeaders(Collections.singletonList("*"));
	 * source.registerCorsConfiguration("/**", config);
	 * FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new
	 * CorsFilter(source)); bean.setOrder(Ordered.HIGHEST_PRECEDENCE); return bean;
	 * }
	 */
}
