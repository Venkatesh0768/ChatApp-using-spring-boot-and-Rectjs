package org.example.chatapplication.controllers;

import org.example.chatapplication.Message;
import org.example.chatapplication.Room;
import org.example.chatapplication.playload.MessageRequest;
import org.example.chatapplication.repositories.RoomRepository;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin("http://localhost:5173/")
public class ChatController {


    private RoomRepository repository;

    public ChatController(RoomRepository repository) {
        this.repository = repository;
    }

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(@DestinationVariable String roomId, @RequestBody MessageRequest request) {

        Room room = repository.findRoomByRoomId(request.getRoomId());
        Message message = new Message();
        message.setContent(request.getContent());
        message.setSender(request.getSender());
        message.setTimeStamp(LocalDateTime.now());
        if (room != null) {
            room.getMessages().add(message);
            repository.save(room);
        } else {
            throw new RuntimeException("Room doesnot found");
        }

        return message;
    }
}
