package com.backend.controller;

import com.backend.domain.Event;
import com.backend.domain.EventDTO;
import com.backend.repository.CalendarRepository;
import com.backend.repository.EventRepository;
import io.swagger.annotations.ApiOperation;
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
    private Logger logger = LoggerFactory.getLogger((EventController.class));
    private ModelMapper modelMapper;

    @Autowired
    public EventController(EventRepository eventRepository,
                           ModelMapper modelMapper) {
        this.eventRepository = eventRepository;
        this.modelMapper = modelMapper;
    }

    /**
     * Return all events provided the pageable object
     * @param pageable
     * @return ResponseEntity<Page<Event>>
     */
    @ApiOperation("Gets all events from the event table.")
    @GetMapping("/")
    public ResponseEntity<Page<Event>> getEvents(Pageable pageable) {
        return ResponseEntity.ok(eventRepository.findAll(pageable));
    }

    /**
     * Get an event provided with an id.
     * @param eventId
     * @return ResponseEntity<Optional<Event>>
     */
    @ApiOperation("Gets an event by id.")
    @GetMapping("/{event_id}")
    public ResponseEntity<Optional<Event>> getEventById(@PathVariable("event_id") Integer eventId) {
        logger.info("eventId " + eventId);
        return ResponseEntity.ok(eventRepository.findById(eventId));
    }

    /**
     * Creates and event provided with the EventDTO
     * @param eventDTO
     * @return ResponseEntity<Event>
     */
    @ApiOperation("Creates an event")
    @PostMapping("/")
    public ResponseEntity<Event> createEvent(@RequestBody EventDTO eventDTO) {
        Event event = modelMapper.map(eventDTO, Event.class);
        return ResponseEntity.ok(eventRepository.save(event));
    }

}
