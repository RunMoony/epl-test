import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { PinkButton } from "./components/PinkButton"
import { next, reset } from "./store/modules/score"
import { Quiz } from "./components/Quiz"
import styled from "styled-components"

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  padding: 30px 0;
  margin: auto;
  text-align: center;
`
const MainImg = styled.img`
  width: inherit;
`

const Header = styled.h1`
  margin: 30px 0;
`

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #8a8e90;
  font-weight: 400;
  margin-bottom: 30px;
`
const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`

function App() {
  const score = useSelector((state) => state.score.score)
  const page = useSelector((state) => state.score.page)
  const quizs = useSelector((state) => state.score.quizs)
  const dispatch = useDispatch()

  return (
    <>
      {page === 0 && (
        <Main>
          <MainImg src="/epl/main.png" alt="epl" />
          <Header>축잘알 테스트(EPL편)</Header>
          <SubHeader>MADE BY RUNMOONY</SubHeader>
          <PinkButton
            text="테스트 시작"
            clickEvent={() => {
              dispatch(next())
            }}
          />
        </Main>
      )}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quizs.length && (
        <Main>
          <Header>당신의 축잘알 테스트(EPL편) 점수는?</Header>
          <Score>{score}점</Score>
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기"
            clickEvent={() => {
              dispatch(reset())
            }}
          />
        </Main>
      )}
    </>
  )
}

export default App
