
package com.ventures.contactapi;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository repository;

    public ContactEntity saveContact(ContactEntity contact) {
        return repository.save(contact);
    }
}
