import styled from "styled-components";

export default {
	Container: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: #FF0000;

		padding: 16px;
	`,
	SubContainer: styled.div`
		display: flex;
		justify-content: space-between;
		width: 100%;	
	`,
	Title: styled.h2`
		color: white;
		margin: 0 0 32px;
	`
}