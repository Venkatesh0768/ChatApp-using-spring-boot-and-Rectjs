package org.example.chatapplication.repositories;

import org.example.chatapplication.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoomRepository extends MongoRepository<Room, String> {
    Room findRoomById(String id);
    Room findRoomByRoomId(String roomId);
}
