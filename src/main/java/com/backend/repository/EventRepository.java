package com.backend.repository;

import com.backend.domain.Calendar;
import com.backend.domain.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {
    Optional<Calendar> findByName(@Param("name") String name);
}