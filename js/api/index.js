import hot from './module/hot';
import dynamic from './module/dynamic';
import task from './module/task';
import mine from './module/mine';
import common from './module/common';

const api = {};

api.install = (Vue) => {
    Vue.prototype.$api = {
        ...hot,
        ...dynamic,
        ...task,
        ...mine,
        ...common,
    }
};

export default api;
