package com.backend.repository;

import com.backend.domain.Calendar;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.Optional;

@Repository
public interface CalendarRepository extends CrudRepository<Calendar, Integer> {
        Optional<Calendar> findByName(@Param("name") String name);
        Page<Calendar> findAll(Pageable pageable);
}