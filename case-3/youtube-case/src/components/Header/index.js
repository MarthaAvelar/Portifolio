import S from './styles'
import { Search, Button } from '../../components'

export const Header = ({ title, titleFirst, onClickFirst, onChange, titleSecond, onClickSecond }) => (
	<S.Container>
		<S.Title> {title} </S.Title>
		<S.SubContainer>
			{onChange && <Search placeholder={'Pesquisar'} onChange={onChange}/>}
			{titleSecond && <Button title={titleFirst} onClick={onClickFirst}/>}
			{/* <Button title={titleSecond} onClick={onClickSecond}/> */}
		</S.SubContainer>
	</S.Container>
)