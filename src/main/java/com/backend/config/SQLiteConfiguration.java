package com.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaDialect;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.vendor.HibernateJpaDialect;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@ComponentScan({"com.backend"})
@EnableTransactionManagement
public class SQLiteConfiguration {
    @Value("${spring.datasource.driverClassName}") String driverClassName;
    @Value("${spring.datasource.url}") String url;
    @Value("${spring.datasource.username}") String username;
    @Value("${spring.datasource.password}") String password;

    @Bean(name="bpmDataSource")
    public DataSource getBpmDataSource() {
        DataSource dataSource = DataSourceBuilder
                .create()
                .username(username)
                .password(password)
                .url(url)
                .driverClassName(driverClassName)
                .build();
        return dataSource;
    }

//    @Bean(name="jpaDialect")
//    public JpaDialect getJpaDialect() {return new HibernateJpaDialect();}
//
//    @Bean(name="bpmTransactionManager")
//    public JpaTransactionManager getTransactionManager(EntityManagerFactory bpmEntityManagerFactory, JpaDialect jpaDialect) {
//        JpaTransactionManager transactionManager = new JpaTransactionManager(bpmEntityManagerFactory);
//        transactionManager.setJpaDialect(jpaDialect);
//        return transactionManager;
//    }
}
