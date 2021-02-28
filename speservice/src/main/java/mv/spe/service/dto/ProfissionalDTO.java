package mv.spe.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
public class ProfissionalDTO implements Serializable {

    private static final long serialVersionUID = -5142474593128188006L;

    private Long id;

    @NotNull
    @Size(max = 80)
    private String nome;

    @NotNull
    @Size(max = 15)
    private String celular;

    @Size(max = 15)
    private String telefone;

    @NotNull
    @Size(max = 50)
    private String funcao;

    @NotNull
    @Size(max = 100)
    private String endereco;

}
