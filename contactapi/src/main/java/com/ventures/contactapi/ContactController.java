
package com.ventures.contactapi;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ContactEntity submitContact(
            @Valid @RequestBody ContactEntity contact) {

        return service.saveContact(contact);
    }
}
