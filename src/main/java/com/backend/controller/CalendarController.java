package com.backend.controller;

import com.backend.domain.Calendar;
import com.backend.repository.CalendarRepository;
import com.backend.util.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(value = "/v1/calendar")
public class CalendarController {

    private CalendarRepository calendarRepository;
    private Logger logger = LoggerFactory.getLogger((CalendarController.class));

    @Autowired
    public CalendarController(CalendarRepository calendarRepository) {
        this.calendarRepository = calendarRepository;
    }

    @GetMapping("/calendar")
    public ResponseEntity<Iterable<Calendar>> getCalendar() {
        return ResponseEntity.ok(calendarRepository.findAll());
    }

}
