package com.backend.controller;

import com.backend.domain.Member;
import com.backend.domain.MemberDTO;
import com.backend.repository.CalendarRepository;
import com.backend.repository.MemberRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping(value = "/v1/member")
public class MemberController {

    private MemberRepository memberRepository;
    private Logger logger = LoggerFactory.getLogger((CalendarController.class));
    private ModelMapper modelMapper;

    @Autowired
    public MemberController(MemberRepository memberRepository,
                           ModelMapper modelMapper) {
        this.memberRepository = memberRepository;
        this.modelMapper = modelMapper;
    }

    @ApiOperation("Gets all members from the member table")
    @GetMapping("/")
    public ResponseEntity<Page<Member>> getMembers(Pageable pageable) {
        return ResponseEntity.ok(memberRepository.findAll(pageable));
    }

    @ApiOperation("Gets a member by a specific id")
    @GetMapping("/{member_id}")
    public ResponseEntity<Optional<Member>> getMemberById(@PathVariable("member_id") Integer eventId) {
        return ResponseEntity.ok(memberRepository.findById(eventId));
    }

    @ApiOperation("Creates a new member")
    @PostMapping("/")
    public ResponseEntity<Member> createMember(@RequestBody MemberDTO memberDTO) {
        Member member = modelMapper.map(memberDTO, Member.class);
        return ResponseEntity.ok(memberRepository.save(member));
    }

}
