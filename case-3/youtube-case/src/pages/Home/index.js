import S from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
	useNavigate
} from "react-router-dom";

import { Header, MovieDetails } from '../../components'

export const Home = () => {
	const navigate = useNavigate()
	const [value, setValue] = useState("")
	const [movies, setMovies] = useState([])

	const onChange = (e) => {
		e.preventDefault();

		setValue(e.target.value);
	}

	const userSubmit = async () => {
		getMovies()
	}

	const getMovies = async () => {
		const API_KEY = "AIzaSyAHT9_wrLgItRfWwYuo0EAVsZiUgFUQJLI"
		const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${value}&key=${API_KEY}`)
		setMovies(data.items)
	}


	const redirectPath = () => {
		navigate('historic')
	}

	return  (
		<S.Container> 
			<Header title="Página de Buscas do YouTube" titleFirst="Buscar" onClickFirst={userSubmit} titleSecond="Ir para página de histórico" onClickSecond={redirectPath} onChange={onChange}/>
			<MovieDetails movies={movies}/>
		</S.Container>
	)
}