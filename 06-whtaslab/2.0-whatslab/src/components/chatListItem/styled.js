import styled from "styled-components";

export const ChatListItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  background-color: ${({ isSelected }) => (isSelected ? '#dedede' : `#fff`)};

  :hover {
    background-color: #f5f5f5;
  }
`

export const ChatListItemAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`

export const ChatListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ChatListItemTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 16px;
`

export const ChatListItemName  = styled.span`
  font-size: 17px;
  color: #000;
`

export const ChatListItemDate = styled.span`
  font-size: 12px;
  color: #999;
`

export const ChatListItemLastMsg  = styled.span`
 font-size: 14px;
  color: #999;
}`