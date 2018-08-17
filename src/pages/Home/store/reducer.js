import { fromJS } from 'immutable'
import {
  CHANGE_SUBJECT_LIST,
  CHANGE_ARTICLE_LIST
} from './actionTypes'

const defaultState = fromJS({
  subjectList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SUBJECT_LIST:
      return state.set('subjectList', fromJS(action.list))
    case CHANGE_ARTICLE_LIST:
      return state.set('articleList', fromJS(action.list))
    default:
      return state
  }
}
