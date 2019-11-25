package com.backend.domain;

import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

public class CalendarDTO {
    @NotNull
    private Date start_date;
    @NotNull
    private Date end_date;

    public Date getStartDate() {
        return start_date;
    }

    public void setStartDate(Date startDate) {
        this.start_date = startDate;
    }

    public Date getEndDate() {
        return end_date;
    }

    public void setEndDate(Date endDate) {
        this.end_date = endDate;
    }

}
