package br.com.api.produtos.modelo;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class RespostaModelo {
    private String messagem;
}