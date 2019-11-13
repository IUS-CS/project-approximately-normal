package com.backend.domain;

import javax.validation.constraints.NotNull;

public class EventDTO {
    @NotNull
    private String first_name;
    @NotNull
    private String last_name;
    @NotNull
    private String email;

}
