import React, { Fragment } from 'react'
import {
  LeftWrapper,
  RightWrapper
} from './style'
import SubjectList from './components/SubjectList'
import Article from './components/Article'
import Recommend from './components/Recommend'

const Home = (props) => {
  return (
    <Fragment>
      <LeftWrapper>
        <SubjectList />
        <Article />
      </LeftWrapper>
      <RightWrapper>
        <Recommend />
      </RightWrapper>
    </Fragment>
  )
}

export default Home
