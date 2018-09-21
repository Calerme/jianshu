import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
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
  HotSearchPanel,
  ModeButton,
  LoginButton,
  WriteAriticle,
  Registry
} from './style'
import {
  changeFocused
} from './store/actionCreators'

class Header extends PureComponent {
  componentDidMount() {

  }

  render() {
    return (
      <Nav>
        <div className="wrapper">
          <Logo>
            <Link to="/"><img src={logoImg} alt="logo" /></Link>
          </Logo>
          <MiddleArea>
            <Link to="/">
              <HomeButton>
                <i className="iconfont">&#xe62f;</i>
                首页
              </HomeButton>
            </Link>
            <Link to="/download">
              <DownloadButton>
                <i className="iconfont">&#xe6af;</i>
                下载App
              </DownloadButton>
            </Link>
            <SearchWrapper
              focused={this.props.focused}
            >
              <input
                className="input"
                placeholder="搜索"
                onFocus={this.props.handleFocus}
                onBlur={this.props.handleBlur}
              />
              <span className="badge"><i className="iconfont">&#xe606;</i></span>
              <HotSearchPanel>
                <p className="title">
                  热门搜索
                  <span className="right"><i className="iconfont">&#xe851;</i>换一批</span>
                </p>
                <div className="hotkey-wrapper">
                  <i className="hotkey">美食</i>
                </div>
              </HotSearchPanel>
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
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'hotkeyList'])
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
