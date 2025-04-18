package br.com.api.produtos.controle;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.servico.ProdutoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoControle {
    @Autowired
    private ProdutoServico ps;

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModelo> remover (@PathVariable Long codigo){
        return ps.remover(codigo);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm) {
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm) {
        return ps.cadastrarAlterar(pm, "cadastrar");
    }
    @GetMapping ("/listar")
    public Iterable<ProdutoModelo> listar() {
    return ps.listar();
    }
    @GetMapping("/")
    public String rota(){
        return "API de produtos funcionando!";
    }
}
