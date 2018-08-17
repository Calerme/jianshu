import axios from 'axios'
import {
  subjectPath,
  articlePath
} from './api.conf'

const env = process.env.NODE_ENV === 'development' ? 'dev' : 'product';

export const getSubjectList = () => {
  return axios.get(subjectPath[env])
}

export const getArticleList = () => {
  return axios.get(articlePath[env])
}
