import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'
import {
  Recommend
} from '../../style'

class RecommendCom extends PureComponent {
  componentDidMount() {
    this.props.getList()
  }
  render() {
    return (
      <Recommend>
        {
          this.props.list.map((item) => (
            <li
              key={item.get('title')}
              style={{backgroundImage: `url(${item.get('imgUrl')})`}}
            >{item.get('title')}</li>
          ))
        }
      </Recommend>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({
  getList () {
    dispatch(actionCreators.getRecommend())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecommendCom)
