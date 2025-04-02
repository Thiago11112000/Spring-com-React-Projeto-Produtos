package br.com.api.produtos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "br.com.api.produtos.repositorio")
public class ProdutosApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProdutosApplication.class, args);
    }
}