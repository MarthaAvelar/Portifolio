import S from './styles'

export const Button = ({ title, onClick }) => (
	<S.Container onClick={onClick}> {title} </S.Container>
)