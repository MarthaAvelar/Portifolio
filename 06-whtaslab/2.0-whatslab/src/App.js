import React, { useState, useEffect } from "react";
import {
  GlobalStyled,  
  AppWindow, 
  SideBar,  
  Header, 
  HeaderAvatar, 
  HeaderButtonContainer,
  HeaderBtn,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  ContentArea
} from './styled';
import "./App.css";

import ChatWindow from "./components/chatWindow/ChatWindow";
import ChatList from './components/chatList'

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from '@mui/material/Avatar';

export default () => {
  // const [chatlist, setChatList] = useState()
  const [contacts, setContacts] = useState([
    { id: 0, contactName: 'Toledo', photo: "", messages: [{ id: 0, text: 'Olá? Tudo bem?', date: new Date(), author: "Você" }, { id: 1, text: 'Bem e com você?', date: new Date(), author: "Toledo" }] },
    { id: 1, contactName: 'Carol', photo: "", messages: [{ id: 0, text: 'Olá? Como vai?', date: new Date(), author: "Você" }] },
    { id: 2, contactName: 'Mae', photo: "", messages: [{ id: 0, text: 'Olá? Chegando?', date: new Date(), author: "Você" }] },
    { id: 3, contactName: 'Gabriel', photo: "", messages: [{ id: 0, text: 'Como foi o Natal?', date: new Date(), author: "Gabriel" }] },
  ])

  const [contactSelected, setContactSelected] = useState(contacts[0])
  
  return (
   
    <AppWindow>
      <SideBar>
        <Header>
          <HeaderAvatar>
          <Avatar  
          src={"https://t2.pb.ltmcdn.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_600.jpg"} 
          alt={"foto-do-usuario"} 
          />  
        </HeaderAvatar>
          <HeaderButtonContainer>
            <HeaderBtn>
              <DonutLargeIcon style={{ color: "#919191" }} />
              <ChatIcon style={{ color: "#919191" }} />
              <MoreVertIcon style={{ color: "#919191" }} />
            </HeaderBtn>
          </HeaderButtonContainer>
        </Header>

        <SearchContainer>
          <SearchInputContainer>
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <SearchInput
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </SearchInputContainer>
        </SearchContainer>
        <ChatList 
          contacts={contacts} 
          contactSelected={contactSelected} 
          setContactSelected={setContactSelected}
        />
      </SideBar>
      <ChatWindow 
        contacts={contacts} 
        contactSelected={contactSelected}
        setContacts={setContacts}
      />
    </ AppWindow>
 
  );
};
