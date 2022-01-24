import React from "react";
import { 
  ChatListItemContainer,
  ChatListI ,
  ChatListItemAvatar, 
  ChatListItemLines, 
  ChatListItemLine, 
  ChatListItemName, 
  ChatListItemDate,
  ChatListItemLastMsg,
  ChatListItemTexts,
  ChatListHeader
} 
from './styled'

import Avatar from '@mui/material/Avatar';

export default ({ contact, contactSelected, setContactSelected }) => {
  const lastIndex = () => (
    contact.messages.length - 1
  )

  return (
    <ChatListItemContainer isSelected={contact.id === contactSelected.id} onClick={() => setContactSelected(contact)}>
      <Avatar 
        src={""} 
        alt={"foto-do-usuario"}
      />
      <ChatListItemTexts>
        <ChatListHeader>
          <ChatListItemName>
            {contact.contactName}
          </ChatListItemName>
          <ChatListItemDate>
          {contact.messages[lastIndex()]?.date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
          </ChatListItemDate>
        </ChatListHeader>
        <ChatListItemLastMsg>
          {contact.messages[lastIndex()].text}
        </ChatListItemLastMsg>
      </ChatListItemTexts>

    </ChatListItemContainer>
  );
};
