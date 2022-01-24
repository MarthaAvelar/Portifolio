import styled from "styled-components";

export default {
	Container: styled.div`
		background-color: white;
		padding: 20px;
	`,
	Content: styled.div`
		width: 100%;
	`,
	Item: styled.div`
		display: flex;
		height: fit-content;
		padding: 16px;
		border-radius: 4px;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	`,
	ItemHeader: styled.div`
		display: flex;
		width: 100%;
	`,
	ItemContent: styled.div``,
	ItemLeft: styled.img`
		height: 80px;
		width: 80px;
		margin-right: 16px;
	`,
	ItemRight: styled.div`
		display: flex;
		width: 100%;
		justify-content: space-between;
	`,
	ItemRightLeft: styled.div`
		display: flex;
		flex-direction: column;
	
	`,
	Text: styled.span`
		margin-bottom: 4px;
	`,
	List: styled.div`
		display: flex;
		flex-direction: column;
		padding: 16px 0;
	`,
	ListItem: styled.div`
		display: flex;
		flex-direction: column;
		margin-bottom: 8px;
	`
}