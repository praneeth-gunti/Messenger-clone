import React, {useState, useEffect} from 'react';
import Message from './Message';
import { FormControl, Input} from '@material-ui/core';
import db from './firebase';
import './App.css';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
      db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map( doc => ({id:doc.id, message: doc.data()})))
      });
  }, [])

  function capitalize(input) {
    var words = input.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return CapitalizedWords.join(' ');
  }

  useEffect(() => {
      const input = prompt('Please enter your name');
      const uname = capitalize(input);
      setUsername(uname);
  }, [])

  const sendMessage = (event) =>{

    event.preventDefault();               // disable refresh of the page caused by "form" tag in submit
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>Chat Room</h1>
        <h2 className = "app_welcome">😃 Welcome {username} 😃</h2>
        <ScrollToBottom className = 'app_messages'>
            <FlipMove>
              {
                messages.map(({id, message}) => (           //map is used to return something
                  <Message key = {id} username ={username}  message = {message}/>   // key is used for the anmation of the current message
                ))
              }
            </FlipMove>
      </ScrollToBottom>
      <div className = "app_send">
        <form className = 'app_form'>
          <FormControl class = "app_formControl">
            <Input className= "app_input" placeholder = 'Enter a message...' value = {input} onChange = {event => setInput(event.target.value)}/>
            <IconButton className="app_iconButton" disabled ={!input} variant = "contained" color = "primary"  type = "submit" onClick = {sendMessage}>
              <SendIcon/>
            </IconButton>
          </FormControl>
        </form>
      </div>
      <div class = 'app_creator'>
        <img style={{width:"250px"}} src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_knockout.png" alt = "Unavailable"/>
        <p>Build by : Praneeth G @ 10 Aug 2020</p>
      </div>

    </div>
  );
}

export default App;
