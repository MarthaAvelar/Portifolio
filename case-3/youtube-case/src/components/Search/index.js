import S from './styles'

export const Search = ({ placeholder, value, onChange }) => (
	<S.Container placeholder={placeholder} value={value} onChange={onChange} />
)