package com.backend.repository;

import com.backend.domain.Calendar;
import com.backend.domain.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CalendarRepository extends CrudRepository<Calendar, Integer> {
        Optional<Calendar> findByName(@Param("name") String name);
        //Page<Calendar> findAllByStart_DateLessThanEqualAndEnd_DateGreaterThanEqual(OffsetDateTime end_date, OffsetDateTime start_date, Pageable pageable);
        //@Query(value = "from calendar t where start_date BETWEEN :startDate AND :endDate")
        //public List<Event> getAllBetweenDates(@Param("startDate") Date startDate, @Param("endDate")Date endDate);


}