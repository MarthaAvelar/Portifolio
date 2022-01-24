import styled from "styled-components";
import { colors } from '../../constants'
export default {
	List: styled.div`
		display: flex;    
        align-items: center;
        width: 100%;
        overflow-x: auto;
        max-width: calc(100vw - 420px)  
	`,
    Item: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        min-height: 50px;
        min-width: 50px;
        border-radius: 50%;
        background: ${props => colors[props.category]};
        margin-right: 16px;      
    `,
}
