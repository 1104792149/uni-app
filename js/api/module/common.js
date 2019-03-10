// 公共模块
import { get, post, postUrlencoded } from '../base/request';

const api = {};
export default api;

api.login = (phone, password) => postUrlencoded('login/login', { phone, password }); // 登录
api.register = (form) => postUrlencoded('register/register', form); // 注册
api.getCode = (phone) => get('validate/sendMsg', { phone }); // 发送验证码

api.setUserInfo = (headImg, nickName) => post('register/setUserInfo', { headImg, nickName }); // 设置用户信息
api.sendMsg = (phone) => get('validate/sendMsg', { phone });
api.validateMsgCode = (code, mobile) => post('validate/code', { code, mobile }) // 校验验证码

api.getAppVersionCode = (data) => get('version/getVersion', data)