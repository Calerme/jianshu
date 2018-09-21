import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group'
import {
  LeftWrapper,
  RightWrapper,
  QMWrapper
} from './style'
import SubjectList from './components/SubjectList'
import Article from './components/Article'
import Recommend from './components/Recommend'
import qrImg from '../../static/qr.png'

const Home = (props) => {
  return (
    <Fragment>
      <LeftWrapper>
        <SubjectList />
        <Article />
      </LeftWrapper>
      <RightWrapper>
        <Recommend />
        <CSSTransition
          in={props.qrCodeDisplay}
          classNames="fade"
          timeout={1000}
        >
          <QMWrapper
            onMouseEnter={()=>{ props.changeQrCodeDisplay(true) }}
            onMouseLeave={()=>{ props.changeQrCodeDisplay(false) }}
          >
            <div className="qrCode"><img src={qrImg} alt="QR" /></div>
            <div className="intro">
              <p className="title">下载简书APP</p>
              <p className="desc">随时随地发现和创建内容</p>
            </div>
            <div className="qrPop"><img src={qrImg} alt="QR" /></div>
          </QMWrapper>
        </CSSTransition>
      </RightWrapper>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  qrCodeDisplay: state.getIn(['home', 'qrcodeDisplay'])
})

const mapDispatchToProps = (dispatch) => ({
  changeQrCodeDisplay: (val) => {
    dispatch(actionCreators.changeQrCodeDisplay(val))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
