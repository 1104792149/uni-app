const store = {};
export default store;

function save (key, value) {
    uni.setStorageSync(key, value);
}

function get (key) {
    return uni.getStorageSync(key);
}

store.get = (key) => get(key);

store.updateToken = (token) => {
    save('token', token);
};
store.updateUser = (user) => {
    save('user', user);
};
store.updatePhone = (phone) => {
    save('phone', phone);
};
store.upAddress = (address) => {
    save('address', address);
};

store.upLogStatus = (status) => {
    save('logStatus', status);
};

store.upAnnouncement = (status) => {
    save('announcement', status);
};

store.updateLaunch = () => save('hasLaunch', true)

store.getUser = () => get('user');
store.getToken = () => get('token');
store.getUserId = () => get('userId');
store.getPhone = () => get('phone');
store.getNodeType = () => 1;
store.isFirstLaunch = () => get('hasLaunch')||false;
store.getLogStatus = () =>  get('logStatus');
store.getAddress = () =>  get('address');
store.getAnnouncement = () =>  get('announcement');

store.logout = () => {
    uni.removeStorageSync('token');
    uni.removeStorageSync('user');
    uni.reLaunch({ url: '/pages/login/zero' });
}