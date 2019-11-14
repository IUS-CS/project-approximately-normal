package com.backend.controller;

import com.backend.domain.Calendar;
import com.backend.domain.Event;
import com.backend.domain.EventDTO;
import com.backend.repository.CalendarRepository;
import com.backend.repository.EventRepository;
import com.backend.util.Assert;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping(value = "/v1/event")
public class EventController {

    private CalendarRepository calendarRepository;
    private EventRepository eventRepository;
    private Logger logger = LoggerFactory.getLogger((CalendarController.class));
    private ModelMapper modelMapper;

    @Autowired
    public EventController(CalendarRepository calendarRepository,
                           EventRepository eventRepository,
                           ModelMapper modelMapper) {
        this.calendarRepository = calendarRepository;
        this.eventRepository = eventRepository;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/event")
    public ResponseEntity<Iterable<Event>> getEvents() {
        return ResponseEntity.ok(eventRepository.findAll());
    }

    @GetMapping("/event/{event_id}")
    public ResponseEntity<Event> getEventById(@PathVariable("event_id") Integer eventId) {
        Event event = Assert.found(eventRepository.findById(eventId));
        return ResponseEntity.ok(event);
    }

    @PostMapping("/event")
    public ResponseEntity<Event> createEvent(@RequestBody EventDTO eventDTO) {
        Event event = modelMapper.map(eventDTO, Event.class);
        return ResponseEntity.ok(eventRepository.save(event));
    }

}
