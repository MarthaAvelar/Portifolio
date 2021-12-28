import { useState, useEffect } from "react";
import { 
  ChatWindowContainer, 
  ChatWindowHeader,
  ChatWindowName,  
  ChatWindowHeaderRight,
  ChatWindowBody,  
  ChatWindowInputContainer, 
  ChatWindowInput,
  ChatWindowHeaderLeft,
  ChatWindowBodyMessage,
 
} 
from './styled'

import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import Avatar from '@mui/material/Avatar';


export default function ChatWindow({ contactSelected, setContacts, contacts }){

  const [textMessageInput, setTextMessageInput] = useState ("")
  const onChangeSendingMessage = (event) => {
    setTextMessageInput(event.target.value)
  }

  const sendMessage = () => {
    
    let newContactsInfo = contacts.map((contact) => {
      if (contact.id === contactSelected.id) {
        contact.messages = [
          ...contact.messages,
          {
            id: contact.messages.length+1,
            text: textMessageInput,
            date: new Date(),
            author: "Você"
          }
        ]
      }

      return contact
    })

    setContacts(newContactsInfo)
    setTextMessageInput("")
  }

  return(
    <ChatWindowContainer>
      <ChatWindowHeader>
        <ChatWindowHeaderLeft>
          <Avatar 
            src={""} 
            alt={"foto-do-usuario"}
          />
          <ChatWindowName>            
            {contactSelected.contactName}
          </ChatWindowName>
        </ChatWindowHeaderLeft>
        <ChatWindowHeaderRight>
          <SearchIcon/>
          <MoreVertIcon/>
        </ChatWindowHeaderRight>
      </ChatWindowHeader>

      <ChatWindowBody>
        {contactSelected.messages.map((message) => (
          <ChatWindowBodyMessage author={message.author}>{message.text}</ChatWindowBodyMessage>
        ))}
      </ChatWindowBody>
  
      <ChatWindowInputContainer>
        <ChatWindowInput onChange={onChangeSendingMessage} value={textMessageInput} placeholder="Escreva sua mensagem"/>
        <SendIcon onClick={()=> sendMessage()}>Cara</SendIcon> 
      </ChatWindowInputContainer>
    </ChatWindowContainer>
  )
}
