package com.clinicaOdontologicaProyecto.clinicaOdontologicaProyecto.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class TurnoDTO {
    private Long id;
    private Long pacienteId;
    private Long odontologoId;
    private LocalDate fechaTurno;

    public Long getId() {
        return id;
    }

    public Long getPacienteId() {
        return pacienteId;
    }

    public Long getOdontologoId() {
        return odontologoId;
    }
}
