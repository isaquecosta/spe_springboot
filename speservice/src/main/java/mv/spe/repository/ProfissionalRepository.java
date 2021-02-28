package mv.spe.repository;

import mv.spe.domain.Profissional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfissionalRepository  extends JpaRepository<Profissional, Long> {
}
