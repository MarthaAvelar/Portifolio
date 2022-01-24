import styled from "styled-components";
import { colors } from '../../constants'

export default {
	Container: styled.div`
		display: flex;
	`,
	SideBar: styled.div`
		background: ${props => colors[props.category]};

		height: 100vh;
		width: 400px;
		position: relative;
	`,
	SidebarRounds: styled.div`
		background: white;
		width: 100px;
		height: 100vh;
		right: 0;
		top: 0;
		position: absolute;
		border-radius: 100% 0 0 100%;
	`
}