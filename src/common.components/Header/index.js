import React from 'react'
import { connect } from 'react-redux'
import logoImg from './img/logo.png'
import {
  Nav,
  Logo,
  MiddleArea,
  RightArea,
  HomeButton,
  DownloadButton,
  SearchWrapper,
  ModeButton,
  LoginButton,
  WriteAriticle,
  Registry
} from './style'
import {
  changeFocused
} from './store/actionCreators'

const Header = (props) => {
  return (
    <Nav>
      <div className="wrapper">
        <Logo>
          <img src={logoImg} alt="logo"/>
        </Logo>
        <MiddleArea>
          <HomeButton>
            <i className="iconfont">&#xe62f;</i>
            首页
          </HomeButton>
          <DownloadButton>
            <i className="iconfont">&#xe6af;</i>
            下载App
          </DownloadButton>
          <SearchWrapper
            focused={props.focused}
          >
            <input
              className="input"
              placeholder="搜索"
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
            />
            <span className="badge"><i className="iconfont">&#xe606;</i></span>
          </SearchWrapper>
          <LoginButton>登录</LoginButton>
          <ModeButton>Aa</ModeButton>
        </MiddleArea>
        <RightArea>
          <WriteAriticle>
            <i className="iconfont">&#xe67b;</i>
            写文章
          </WriteAriticle>
          <Registry>注册</Registry>
        </RightArea>
      </div>
    </Nav>
  )
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused'])
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus() {
    dispatch(changeFocused(true))
  },
  handleBlur() {
    dispatch(changeFocused(false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
