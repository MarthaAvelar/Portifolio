import React, { useState,useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants"
import S from './styles'

export const Select = ({ onChange }) => {
	const [selectLoterry, setSelectLoterry] = useState([])	
    
	useEffect(() => {
		getLotteryNames();
	}, []);
    
	const getLotteryNames = () => {
		axios
			.get(`${BASE_URL}/loterias`)
			.then((response) => {
				setSelectLoterry(response.data);
			})
			.catch((error) => console.log(error.message));
	};

	
	const onChangeSelect = (e) => {
		e.preventDefault()
		if (onChange) {
			onChange(e.target.value)
		}
	}

	return(
		<S.Container>
			<S.Select onChange={onChangeSelect}>
				{selectLoterry.map(({ id,  nome }) => (
					<option value={id}>{nome}</option>
				))}
			</S.Select>
		</S.Container>
	)
}