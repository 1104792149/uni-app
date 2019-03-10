// 动态
import { get } from '../base/request';

const api = {};
export default api;

api.getNewsList = (page, size = 10) => get('news/list', { page, size }); // 动态列表
