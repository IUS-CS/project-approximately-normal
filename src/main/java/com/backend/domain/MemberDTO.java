package com.backend.domain;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class MemberDTO {
    @NotNull
    private String first_name;
    @NotNull
    private String last_name;
    @NotNull
    private Date email;

    public String getFirstName() {
        return first_name;
    }

    public void setFirstName(String firstName) {
        this.first_name = firstName;
    }

    public String getLastName() {
        return last_name;
    }

    public void setLastName(String lastName) {
        this.last_name = lastName;
    }

    public Date getEmail() {
        return email;
    }

    public void setEmail(Date email) {
        this.email = email;
    }
}
