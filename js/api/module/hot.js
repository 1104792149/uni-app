// 热点
import { post, get } from '../base/request';

const api = {};
export default api;

api.getActivityCountDown = () => get('activity/countDown'); // 获取活动开始时间
api.getActivityDetail = (id) => get('activity/info', { id }); // 通过id获取活动详情
api.getActivityList = (page, size = 10) => get('activity/list', { page, size }); // 活动列表
api.getActivityMiddle = () => get('activity/mediate'); // 获取中间的活动列表
api.getActivityTop = () => get('activity/top');  //获取顶部的活动

api.startWindow = () => get('startWindow/get');//首页--启动弹窗[薛松]