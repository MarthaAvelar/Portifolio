import { useState } from "react";

import ChatListItem from '../chatListItem'
import { ChatListContainer } from './styled'

export default ({ contacts, contactSelected, setContactSelected }) => {


  return (
    <ChatListContainer>    
      {
        contacts.map((contact) => (
          <ChatListItem 
            contact={contact} 
            contactSelected={contactSelected} 
            setContactSelected={setContactSelected} 
          />
        ))
      }
    </ChatListContainer>
  );
};
