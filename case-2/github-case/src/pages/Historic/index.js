import S from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components'
import { useNavigate } from 'react-router-dom'
export const Historic = () => {
	const navigate = useNavigate()
	const [list, setList] = useState([])
	
	useEffect(() => {
		setList(
			JSON.parse(
				localStorage.getItem('historic-search')
			)
		)
	}, [])

	const redirectPath = () => {
		navigate("/")
	}

	const clearHistoric = () => {
		localStorage.removeItem('historic-search');
		setList([])
	}

	const renderContent = () => {
		if (!list?.length) {
			return <S.EmptyContent> Você não possui items pesquisados</S.EmptyContent>
		}

		return (
			<S.List>
				{
					list?.map((item, index) => (
						<S.Item colored={index % 2 === 0}>{item.name}</S.Item>
					))
				}
			</S.List>
		)
	}

	return  (
		<S.Container>
			<Header title="Página de histórico" titleFirst="Limpar histórico de buscas" onClickFirst={clearHistoric} titleSecond="Ir para página de conteúdo" onClickSecond={redirectPath}/>
			{renderContent()}
		</S.Container>
	)
}