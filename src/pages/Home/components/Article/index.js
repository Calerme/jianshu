import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Article
} from '../../style'
import {
  actionCreators
} from '../../store'

class ArticleCom extends Component {
  componentDidMount() {
    this.init()
  }
  render() {
    return this.props.list.map(item => {
      return (
        <Article key={item.get('title')} imgUrl={item.get('imgUrl')}>
          <div className="content">
            <h2 className="title">{item.get('title')}</h2>
            <p className="desc">{item.get('desc')}</p>
            <p className="meta">
              <span className="author">{item.get('author')}</span>
              <span className="comments">{item.get('comments')}</span>
              <span className="starts">{item.get('starts')}</span>
            </p>
          </div>
          <div className="img">
            <img src={item.get('imgUrl')} alt="" />
          </div>
        </Article>
      )
    })
  }

  init() {
    this.props.getArticleList()
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getArticleList () {
    dispatch(actionCreators.getArticle())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCom)
