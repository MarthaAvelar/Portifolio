import React, { useEffect, useState } from 'react'
import { BASE_URL } from "../../constants"
import { Select, LotteryNumber } from '../../components'
import axios from 'axios'
import S from './styles'

export const Home = () => {
	const [category, setCategory] = useState(0);
  const [concurso, setConcurso] = useState();
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    requestConcursoId()
  }, [])

  useEffect(()=> {
    if (!concurso) {
      requestNumbersId(2359)
      return
    }


    const select = concurso.filter((item)=> {
      if (item.loteriaId == category) {
        return item
      }
    })[0].concursoId

    requestNumbersId(select)

  }, [category])

  const requestNumbersId = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((response) => {
        setNumbers(response.data.numeros)        
      })
      .catch((error) => console.log(error.message));
  }

  const requestConcursoId = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((response) => {
        console.log("requestConcursoId", response)
        setConcurso(response.data)
      })
      .catch((error) => console.log(error.message));
  }


	const onChange = (category) => {
    console.log("onChange", category)
    setCategory(category)
	}

  return (
    <S.Container>      
      <S.SideBar category={category}>
        <Select onChange={onChange} />
        <S.SidebarRounds />
      </S.SideBar>
      <LotteryNumber category={category} numbers={numbers}/>
    </S.Container>
  );
}
