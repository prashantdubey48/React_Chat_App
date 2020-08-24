import React, { useState, useEffect } from "react";
import "./SideBarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from "react-router-dom";

function SideBarChat({ addnewchat, id, name }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(()=>{
    if(id){
        db.collection("rooms")
        .doc(id)
        .collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => (
          setMessages(snapshot.docs.map((doc) => doc.data()))
        ))
    }
  }, [id]);

  const createnewchat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addnewchat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createnewchat} className="add_newchat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SideBarChat;
