// 任务
import {get, post ,postUrlencoded } from '../base/request';

const api = {};
export default api;

api.getUserTask = () => get('task/getUserTask');//获取任务列表

api.fetchUserTaskReward = (taskId) => postUrlencoded('task/fetchUserTaskReward',{taskId});//获取任务列表

api.getBtaTask = () => get('task/getBtaTask');//获取BTA任务列表方法

api.conformCondition = (taskId) => postUrlencoded('task/conformCondition',{taskId});//核对是否符合参加bta的条件

api.takePartInBtaTask = (data) => postUrlencoded('task/takePartInBtaTask',data);//参加BTA任务

api.fetchBtaTaskReward = (taskId) => postUrlencoded('task/fetchBtaTaskReward',{taskId});//领取BTA任务奖励

api.getUserMinePoolInfo = () => get('task/getUserMinePoolInfo');//获取用户矿产情况

api.getUserSignInInfo = () => get('task/getUserSignInInfo');//获取用户签到情况

api.userSignIn = () => post('task/userSignIn');//用户主动签到

api.getTurntableInfo = () => get('task/getTurntableInfo');//转盘页面转盘数据和下放跑马灯中奖列表

api.playGames = () => post('task/playGames');//点击转盘开始抽奖

api.myGifts = (pageNo,state,pageSize = 20) => get('task/myGifts',{ pageNo,state,pageSize });//获取我的奖品列表

api.saveUserGiftInfo = (form) => postUrlencoded('task/saveUserGiftInfo', form); // 保存用户获奖信息saveUserGiftInfo

api.userAuthenticateReward = () =>postUrlencoded('task/userAuthenticateReward');//领取认证奖励

api.confirmBuildMine = (payPassword) =>postUrlencoded('task/confirmBuildMine',{ payPassword });//普通用户建矿

api.agreeBuildMine = () =>postUrlencoded('task/agreeBuildMine');//点击同意建矿扭的接口，即确认是否满足建矿条件，是否设置支付密码的接口

api.getBuildTaskDetal = (taskId) =>get('task/getBuildTaskDetal',{ taskId });//普通用户-获取建矿任务详情
 
api.receiveGift = (userGifIds,addressId) =>post('task/receiveGift',{ userGifIds,addressId});//实物领取

api.receiveBuildMineAward = () =>postUrlencoded('task/receiveBuildMineAward');//领取建矿奖励
