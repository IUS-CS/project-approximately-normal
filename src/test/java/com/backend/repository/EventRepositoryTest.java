package com.backend.repository;

import com.backend.domain.Calendar;
import com.backend.domain.Event;
import net.bytebuddy.dynamic.scaffold.MethodGraph;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.sql.Date;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.Silent.class)
public class EventRepositoryTest {
    @Mock
    EventRepository eventRepository;
    List<Event> listOfEvents = new LinkedList<>();
    @Mock
    Page<Event> event;
    @Mock
    Calendar calendar;

    @Test
    public void findByNameTest(){
        when(eventRepository.findByName(anyString())).thenReturn(Optional.of(calendar));
    }

    @Test
    public void findAllTest() {
        when(eventRepository.findAll(any(Pageable.class))).thenReturn(event);
    }
}
