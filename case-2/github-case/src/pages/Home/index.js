import S from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
	useNavigate
} from "react-router-dom";

import { Header, UserDetails } from '../../components'

export const Home = () => {
	const navigate = useNavigate()
	const [value, setValue] = useState("")
	const [user, setUser] = useState()

	useEffect(() => {
		getUsers()
	}, [])

	const getUsers = async () => {
		const { data } = await axios.get("https://api.github.com/users")
		console.log({ data })
	}

	const onChange = (e) => {
		e.preventDefault();

		setValue(e.target.value);
	}

	const userSubmit = async () => {
		getUser()
		saveHistoric()
	}

	const saveHistoric = () => {
		const items = JSON.parse(localStorage.getItem('historic-search'))
		const item = { name: value, date: new Date() }

		let newItems = items ? [...items, item] : [item]

		localStorage.setItem('historic-search', JSON.stringify(newItems))		
	}

	const getUser = async () => {
		const { data } = await axios.get(`https://api.github.com/users/${value}`)
		setUser(data)
	}

	const redirectPath = () => {
		navigate('historic')
	}

	return  (
		<S.Container> 
			<Header title="Página de busca" titleFirst="Buscar" onClickFirst={userSubmit} titleSecond="Ir para página de histórico" onClickSecond={redirectPath} onChange={onChange}/>
			<UserDetails user={user} />
		</S.Container>
	)
}