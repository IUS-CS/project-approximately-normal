package com.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewController {

    @RequestMapping("/test")
    public String test() {
        return "This is a test";
    }

}
