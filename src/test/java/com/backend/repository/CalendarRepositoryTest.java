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

import java.sql.Date;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.Silent.class)
public class CalendarRepositoryTest {
    @Mock
    CalendarRepository calendarRepository;
    List<Event> listOfEvents = new LinkedList<>();
    @Mock
    Calendar calendar;

    @Test
    public void customQueryTest() {
        when(calendarRepository.getAllBetweenDates(any(Date.class), any(Date.class))).thenReturn(listOfEvents);
    }

    @Test
    public void findByNameTest() {
        when(calendarRepository.findByName(anyString())).thenReturn(Optional.of(calendar));
    }
}
