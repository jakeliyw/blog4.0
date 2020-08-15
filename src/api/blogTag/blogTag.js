import { get } from '../../utils/request'

export const tagList = params => get('/api/blog/tagList', params)
