import S from './styles'
import axios from 'axios'
import { useEffect , useState} from 'react'

export const UserDetails = ({ user }) => {
	const [userRepo, setUserRepo] = useState()
	
	useEffect(() => {
		getRepos()
	}, [user])

	const getRepos = async () => {
		const { data } = await axios.get(`https://api.github.com/users/${user.login}/repos`)
		setUserRepo(data)
	}

	const renderContent = () => {
		if (user) {
			return (
				<S.Content>
					<S.ItemContent>
						<S.ItemHeader>
							<S.ItemLeft src={user?.avatar_url} />
							<S.ItemRight> 
								<S.ItemRightLeft>
									<S.Text>{user?.name || "Nome não fornecido"}</S.Text>
									<S.Text>E-mail: {user?.email || "Informação não fornecida" }</S.Text>
									<S.Text>Biografia: {user?.biografia || "Informação não fornecida"}</S.Text>
								</S.ItemRightLeft>
								<S.Text>{user?.login}</S.Text>
							</S.ItemRight>
						</S.ItemHeader>
						<S.List>
							{userRepo?.map((item) => (
								<S.ListItem>
									<S.Text>Nome: {item?.name}</S.Text>
									<S.Text>Descrição: {item?.description || "Não informado"}</S.Text>
								</S.ListItem>
							))}
						</S.List>
					</S.ItemContent>
				</S.Content>
			)
		}

		return (
			<S.Text>Pesquise um usuário para aparecer suas respectivas informações</S.Text>
		)
	}

	return  (
		<S.Container>
			<S.Item>
				{renderContent()}
			</S.Item>
		</S.Container>
	)
}