package org.example.chatapplication.controllers;

import org.example.chatapplication.Message;
import org.example.chatapplication.Room;
import org.example.chatapplication.repositories.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin("http://localhost:5173/")
public class RoomController {

    private RoomRepository repository;

    public RoomController(RoomRepository repository) {
        this.repository = repository;
    }


    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId) {
        Optional<Room> existRoom = Optional.ofNullable(repository.findRoomByRoomId(roomId));
        if (existRoom.isPresent()) {
            return new ResponseEntity<>("Room is already Exits", HttpStatus.BAD_REQUEST);
        }
        Room room = new Room();
        room.setRoomId(roomId);
        repository.save(room);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> getRoomsById(@PathVariable String roomId) {
        Optional<Room> existRoom = Optional.ofNullable(repository.findRoomByRoomId(roomId));
        if (existRoom.isPresent()) {
            return new ResponseEntity<>(existRoom, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(" No Room is already Exits", HttpStatus.BAD_REQUEST);
    }


    @GetMapping("/{room_id}/messages")
    public ResponseEntity<?> getAllMessages(@PathVariable String room_id,
                                            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
                                            @RequestParam(value = "size", defaultValue = "20", required = false) int size
    ) {
        Room room = repository.findRoomByRoomId(room_id);
        if (room == null) {
            return ResponseEntity.badRequest().build();
        }

        List<Message> messages = room.getMessages();
        int start = Math.max(0, messages.size() - (page + 1) * size);
        int end = Math.min(messages.size(), start + size);

        List<Message> paginatedMessages = messages.subList(start, end);
        return new ResponseEntity<>(paginatedMessages, HttpStatus.OK);

    }


}
