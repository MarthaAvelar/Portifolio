import React from "react"
import S from './styles'

export const LotteryNumber = ({ numbers, category }) => {
  return(
    <S.List>
      {numbers.map((item) => (
        <S.Item category={category}>{item}</S.Item>
      ))}         
    </S.List>
  )
}