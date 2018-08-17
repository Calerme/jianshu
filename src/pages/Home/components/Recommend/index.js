import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Recommend
} from '../../style'

class RecommendCom extends Component {
  render() {
    return (
      this.props.list.map(item => {
        return (
          <Recommend>
            <li>1</li>
            <li>2</li>
          </Recommend>
        )
      })
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RecommendCom)
