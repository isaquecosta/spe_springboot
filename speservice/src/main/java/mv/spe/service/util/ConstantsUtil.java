package mv.spe.service.util;

public class ConstantsUtil {

    private ConstantsUtil() {
        throw new IllegalStateException(ConstantsUtil.CLASSE_NAO_INSTANCIAVEL);
    }

    public static final String CLASSE_NAO_INSTANCIAVEL = "Classe de Constantes não pode ser instanciada";
    public static final String PROFISSIONAL_NOT_FOUND_MSG = "Vaga não encontrada";
    public static final String ESTABELECIMENTO_NOT_FOUND_MSG = "Vaga não encontrada";
    public static final String ID_NULL = "O ID desse objeto não pode ser nulo";
}
