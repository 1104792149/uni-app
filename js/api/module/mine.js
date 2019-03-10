// 我的
import {post, get, postJson, postUrlencoded} from '../base/request';

const api = {};
export default api;

api.queryInviteUsers = (page = 0, query = '', size = 20) => get('assistNode/queryInviteUsers', { page, query, size }); // 查询邀请用户列表
api.setAssistNode = (userId) => post('assistNode/setAssistNode', { userId }); // 设置辅助节点

api.submitUserAuth = (authentication) => post('user/auth', authentication);  // 实名认证
api.getUserAuthStatus = () => get('user/auth/status'); // 获取用户认证状态
api.getFans = (pageNum=0, query = '', pageSize = 20) => get('user/fans', { pageNum,query,pageSize }); // 粉丝列表 
api.countFans = () => get('user/countFans');//粉丝数量

api.getUserInfo = () => get('user/info');  // 个人资料
api.modifyUserInfo = (InUser) => postJson('user/modify', InUser); // 修改个人资料
api.updatePhone = (phone,msgCode,password) => postUrlencoded('user/updatePhone',{phone,msgCode,password});//更新手机号码
api.modifyPassword = (mp) => postJson('user/password/modify', mp); // 找回密码
api.setPayPassword = (sp) => postJson('user/payPassword', sp); // 保存支付密码
api.getUserByMobile = (mobile) => get('user/infoByMobile', { mobile }) // 根据手机号获取用户信息
api.checkPayPassword = (payPwd) => get('user/pay/verify', { payPwd }) // 支付密码校验

// 钱包
api.getMyWallet = () => get('wallet/account'); // 获取我的钱包信息

api.getChargeHistory = (pageNum, pageSize = 20) => get('wallet/coin/chargeDetails', { pageNum, pageSize }); // 充币记录
api.getIntegralHistory = (pageNum, pageSize = 20) => get('wallet/integral/details', { pageNum, pageSize }) // 积分记录
api.getCoinHistory = (pageNum, pageSize = 20) => get('wallet/coin/details', { pageNum, pageSize }) //BTA记录

api.withdrawCoin = (form) => post('wallet/coin/withdraw', form); // 提币
api.getWithdrawHistory = (pageNum, pageSize = 20) => get('wallet/coin/withdrawDetails', { pageNum, pageSize }); // 提币记录

api.transfer = (amount, toNickName, toUid, toMobile, toAvatar, msgCode) => post('wallet/txns', { amount, toNickName, toUid, toMobile, toAvatar,msgCode }); // 转账
api.getTxnsHistory = (pageNum, pageSize = 20) => get('wallet/txns/details', { pageNum, pageSize }); // 转账记录
api.getTxnsDetail = (id) => get('wallet/txns/detail', { id }); // 转账详情
api.getTxnsHistoryToUser = (toUid, pageNum, pageSize = 20) => get('wallet/txns/p2pDetails', { toUid, pageNum, pageSize }); // 转账记录(用户对用户)
api.servicecharge = (toAddress) => get('wallet/coin/servicecharge',{toAddress});//  获取手续费
api.newWithdraw = (form) => postUrlencoded('wallet/coin/withdraw',form);//  转出，2019.01.16
api.addUpdate = (data) =>post('user/address/addUpdate',data);//新增货修改用户收货地址
api.addList = () =>get('user/address/list');//收货地址列表
api.addDelete = (id) =>post('user/address/delete',{id});//删除
api.typeBuildMineUsers = (page = 0, type = '', size = 20) => get('assistNode/typeBuildMineUsers',{ page, type, size }); // 辅助用户任务--查询未建矿、已建矿用户
api.queryBuildMineUsers = (page = 0, query = '', size = 20) => get('assistNode/queryBuildMineUsers',{ page, query, size });//辅助用户--条件查询建矿用户
api.setBuildMine = (userId) => post('assistNode/setBuildMine',{ userId });//辅助节点--设置建矿[薛松]
api.countBuildMineNum = () => get('assistNode/countBuildMineNum');//副主节点--设置建矿数量[薛松]
api.meetBuildMine = (userId) => get('assistNode/meetBuildMine',{userId});//辅助节点--用户BTA是否满足[薛松]

api.syncChargeCoin = (address) => post('wallet/syncChargeCoin',{address});//同步充值记录
