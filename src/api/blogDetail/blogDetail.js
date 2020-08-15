import { get } from '../../utils/request'
export const getBlogDetail = params => get('/api/blog/detail', params)
export const getBlogArticle = params => get('/api/blog/list', params)
