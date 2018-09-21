import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  SubjectWrapper,
  SubjectItem
} from '../../style'
import {
  actionCreators
} from '../../store'

class SubjectList extends PureComponent {
  componentDidMount() {
    this.init()
  }
  render() {
    return (
      <SubjectWrapper>
        { this.getSubjectList() }
        <span className="more">更多热门专题<i className="iconfont">&#xe75c;</i></span>
      </SubjectWrapper>
    )
  }
  getSubjectList() {
    return this.props.list.map(item => {
      const imgUrl = item.get('imgUrl')
      const title = item.get('title')

      return (
        <SubjectItem imgUrl={imgUrl} key={title}>
          <span className="text">{title}</span>
        </SubjectItem>
      )
    })
  }

  init() {
    this.props.getSubjectList()
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'subjectList'])
})

const mapDispatchProps = (dispatch) => ({
  getSubjectList () {
    dispatch(actionCreators.getSubject())
  }
})

export default connect(mapStateToProps, mapDispatchProps)(SubjectList)
