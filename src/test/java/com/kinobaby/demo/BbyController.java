package com.kinobaby.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class BbyController {

@GetMapping("/")
public String hei(String navn) {
    return "Hei verden" + navn
}

}