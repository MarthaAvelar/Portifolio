import styled from "styled-components";

export const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const ChatWindowHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const ChatWindowHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`


export const ChatWindowAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
 
`;

export const ChatWindowName = styled.span`
  margin-left: 16px;
  font-size: 17px;
  color: #000;
`;

export const ChatWindowHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;



export const ChatWindowBody = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background-color: #e5ddd5;
  background-size: cover;
  background-position: center;
  padding: 20px 30px;
  background-image: url("");
`;

export const ChatWindowBodyMessage = styled.span`
  color: black;
  text-align: ${({ author }) => (author === "Você" ? 'right' : `left`)};
`

export const ChatWindowFooter = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
`;

export const ChatWindowInputContainer = styled.div`
  display: flex;
  margin: 16px;
`;

export const ChatWindowInput = styled.textarea`
  width: calc(100% - 100px);
  height: auto;
  border: 0;
  outline: 0;
  background-color: #fff;
  border-radius: 20px;
  font-size: 15px;
  color: #4a4a4a;
  padding: 9px 12px;
  
`;
export const ChatWindowPos  = styled.div`
display: flex;
margin: 0 15px;
 
`;



export const SendIcon = styled.div`
display:flex

`


















