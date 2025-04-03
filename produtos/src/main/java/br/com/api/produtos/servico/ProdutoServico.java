
package br.com.api.produtos.servico;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.repositorio.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServico {

    @Autowired
    private ProdutoRepositorio pr;

    // Método para listar todos os produtos
    public Iterable<ProdutoModelo> listar() {
        return pr.findAll();
    }

    // Método para cadastrar produtos
    public ResponseEntity<?> cadastrar(ProdutoModelo pm) {
        RespostaModelo rm = new RespostaModelo();
        if (pm.getNome().equals("")) {
            rm.setMessagem("O nome do produto é obrigatório!");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getMarca().equals("")) {
            rm.setMessagem("O nome da marca é obrigatório!");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(pr.save(pm), HttpStatus.CREATED);
        }
    }
}