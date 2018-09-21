import { fromJS } from 'immutable'
import {
  CHANGE_SUBJECT_LIST,
  CHANGE_ARTICLE_LIST,
  CHANGE_RECOMMEND_LIST,
  CHANGE_QRCODE_DISPLAY
} from './actionTypes'

const defaultState = fromJS({
  subjectList: [],
  articleList: [],
  recommendList: [],
  qrcodeDisplay: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SUBJECT_LIST:
      return state.set('subjectList', fromJS(action.list))
    case CHANGE_ARTICLE_LIST:
      return state.set('articleList', fromJS(action.list))
    case CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', fromJS(action.list))
    case CHANGE_QRCODE_DISPLAY:
      return state.set('qrcodeDisplay', action.value)
    default:
      return state
  }
}
