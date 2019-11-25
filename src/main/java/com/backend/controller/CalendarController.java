package com.backend.controller;

import com.backend.domain.Calendar;
import com.backend.domain.Event;
import com.backend.repository.CalendarRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.OffsetDateTime;
import java.util.List;


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

//    @GetMapping("/")
//    public ResponseEntity<List<Event>> getCalendar(@PathVariable("start_date") Date start_date,
//                                                   @PathVariable("end_date") Date end_date,
//                                                   Pageable pageable) {
//        return ResponseEntity.ok(calendarRepository.getAllBetweenDates(start_date, end_date));
//    }

}
