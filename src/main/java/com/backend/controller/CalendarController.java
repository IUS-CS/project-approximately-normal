package com.backend.controller;

import com.backend.domain.Calendar;
import com.backend.domain.CalendarDTO;
import com.backend.domain.Event;
import com.backend.repository.CalendarRepository;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping(value = "/v1/calendar")
public class CalendarController {

    private CalendarRepository calendarRepository;
    private ModelMapper modelMapper;
    private Logger logger = LoggerFactory.getLogger((CalendarController.class));

    @Autowired
    public CalendarController(CalendarRepository calendarRepository,
                              ModelMapper modelMapper) {
        this.calendarRepository = calendarRepository;
        this.modelMapper = modelMapper;
    }

    /**
     * This method will get all events that are between the start_date and end_date
     * provided.
     @param start_date the start date of event(s) to search
     @param end_date the end date of event(s) to search
     @return ResponseEntity<List<Event>>
     */
    // might need to add a pagable object
    @ApiOperation("Gets all events between a start date and end date based on the event's 'start date.'")
    @GetMapping("/")
    public ResponseEntity<List<Event>> getCalendar(@RequestParam Date start_date,
                                                   @RequestParam Date end_date) {
        return ResponseEntity.ok(calendarRepository.getAllBetweenDates(start_date, end_date));
    }

}
