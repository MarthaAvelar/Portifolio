import S from './styles'
import axios from 'axios'

export const MovieDetails = ({ movies }) => {
	const getMovieDetail = async ({ id: { videoId: VIDEO_ID }}) => {
		const API_KEY = "AIzaSyAHT9_wrLgItRfWwYuo0EAVsZiUgFUQJLI"
		const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&part=snippet,statistics&key=${API_KEY}`)
		console.log("getMovieDetail", items)
	}

	const renderContent = () => {
		if (movies) {
			return (
				movies.map((item) => (
					<S.Item onClick={() => getMovieDetail(item)}>
						<S.ItemAvatar src={item.snippet.thumbnails.default.url}/>
						<S.ItemRight> 
							<S.Text bold> {item.snippet.title} </S.Text>
							<S.Text sty> {item.snippet.description} </S.Text>
						</S.ItemRight>
					</S.Item>
				))
			)
		}

		return (
			<span> Nenhum vídeo encontrado para os termos pesquisados</span>
		)
	}


	return  (
		<S.Container>
			{renderContent()}
		</S.Container>
	)
}