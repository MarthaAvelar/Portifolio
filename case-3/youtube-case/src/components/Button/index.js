import S from './styles'

export const Button = ({ title, onClick }) => {	
	return  (
		<S.Container onClick={onClick}> {title} </S.Container>
	)
}