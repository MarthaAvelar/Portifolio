import styled from "styled-components";

export default {
	Container: styled.div`
		background-color: white;
	`,
	List: styled.div`
		max-height: 400px;
		padding: 16px;
	`,
	Item: styled.div`
		background-color: ${props => props.colored ? "#999" : "#bcbcbc"};
		height: 30px;
		display: flex;
		align-items: center;
		padding: 0 16px;	
	`,
	EmptyContent: styled.div`
		width: 100%;
		padding: 64px 0;
		display: flex;
		justify-content: center;
	`
}