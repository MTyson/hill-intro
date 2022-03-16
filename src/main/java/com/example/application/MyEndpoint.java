package com.example.application;

import java.util.*;
import java.util.ArrayList;
import java.util.List;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class MyEndpoint { 
    private final List<Novel> novels = new ArrayList<Novel>();
    MyEndpoint(){
      Novel empireFalls = new Novel("Empire Falls", "Richard Russo");
      Novel reservationBlues = new Novel("Reservation Blues", "Sherman Alexie");
      Novel theAthenianMurders = new Novel("The Athenian Murders", "José Carlos Somoza");
      this.novels.add(empireFalls);
      this.novels.add(reservationBlues);
      this.novels.add(theAthenianMurders);
    }

    /**
     * A method that adds one to the argument.
     */
    public @Nonnull String foo() {
        return "bar";
    }

    public @Nonnull List<Novel> getNovels() {
      return this.novels;
    }
}
