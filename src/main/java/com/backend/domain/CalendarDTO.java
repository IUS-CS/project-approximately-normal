package com.backend.domain;

import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

public class CalendarDTO {
    @NotNull
    private String name;
    @NotNull
    private String start_date;
    @NotNull
    private Date end_date;
    @NotNull
    private List<Integer> event;
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartDate() {
        return start_date;
    }

    public void setStartDate(String startDate) {
        this.start_date = startDate;
    }

    public Date getEndDate() {
        return end_date;
    }

    public void setEndDate(Date endDate) {
        this.end_date = endDate;
    }

    public List<Integer> getEvent() {
        return event;
    }

    public void setEvent(List<Integer> event) {
        this.event = event;
    }

}
