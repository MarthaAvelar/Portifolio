import styled from "styled-components";

export default {
	Container: styled.div`
		background-color: white;
		padding: 16px;
	`,
	Item: styled.div`
		display: flex;
		margin-bottom: 16px;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		border-radius: 4px;
		cursor: pointer;
]
	`,
	ItemAvatar: styled.img`
		margin-right: 16px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	`,

	ItemRight: styled.div`
		display: flex;
		flex-direction: column;
	`,
	Text: styled.span`
		font-weight: ${props => props.bold ? 500 : 300};
		margin-bottom: 8px;
	`
}