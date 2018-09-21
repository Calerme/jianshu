import { ERR_OK } from '../../../api/api.conf'
import {
  getSubjectList,
  getArticleList,
  getRecommendList
} from '../../../api'
import { warn } from '../../../helper'
import {
  CHANGE_SUBJECT_LIST,
  CHANGE_ARTICLE_LIST,
  CHANGE_RECOMMEND_LIST,
  CHANGE_QRCODE_DISPLAY
} from './actionTypes'

const changeSubjectList = (list) => {
  return {
    type: CHANGE_SUBJECT_LIST,
    list
  }
}

const changeArticleList = (list) => {
  return {
    type: CHANGE_ARTICLE_LIST,
    list
  }
}

const changeRecommendList = (list) => {
  return {
    type: CHANGE_RECOMMEND_LIST,
    list
  }
}

export const getSubject = () => {
  return (dispatch) => {
    getSubjectList()
      .then((res) => {
        if (res.data.code === ERR_OK) {
          dispatch(changeSubjectList(res.data.data))
        } else {
          warn(res)
        }
      })
  }
}

export const getArticle = () => {
  return (dispatch) => {
    getArticleList()
      .then((res) => {
        if (res.data.code === ERR_OK) {
          dispatch(changeArticleList(res.data.data))
        } else {
          warn(res)
        }
      })
  }
}

export const getRecommend = () => {
  return (dispatch) => {
    getRecommendList()
      .then((res) => {
        if (res.data.code === ERR_OK) {
          dispatch(changeRecommendList(res.data.data))
        } else {
          warn(res)
        }
      })
  }
}

export const changeQrCodeDisplay = (value) => {
  return {
    type: CHANGE_QRCODE_DISPLAY,
    value
  }
}
