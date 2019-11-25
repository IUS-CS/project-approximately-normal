package com.backend.controller;

import com.backend.domain.Event;
import com.backend.domain.EventDTO;
import com.backend.repository.CalendarRepository;
import com.backend.repository.EventRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping(value = "/v1/event")
public class EventController {

    private EventRepository eventRepository;
    private Logger logger = LoggerFactory.getLogger((CalendarController.class));
    private ModelMapper modelMapper;

    @Autowired
    public EventController(EventRepository eventRepository,
                           ModelMapper modelMapper) {
        this.eventRepository = eventRepository;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/")
    public ResponseEntity<Page<Event>> getEvents(Pageable pageable) {
        return ResponseEntity.ok(eventRepository.findAll(pageable));
    }

    @GetMapping("/{event_id}")
    public ResponseEntity<Optional<Event>> getEventById(@PathVariable("event_id") Integer eventId) {
        logger.info("eventId " + eventId);
        return ResponseEntity.ok(eventRepository.findById(eventId));
    }

    @PostMapping("/")
    public ResponseEntity<Event> createEvent(@RequestBody EventDTO eventDTO) {
        Event event = modelMapper.map(eventDTO, Event.class);
        return ResponseEntity.ok(eventRepository.save(event));
    }

}
