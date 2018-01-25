import Vue from 'vue'   // 加载vue
import Vuex from 'vuex' // 加载vuex
import * as types from './mutation-types'

Vue.use(Vuex);

const state = {
    // token值
    token: '',
    // 聊天列表(/msg)
    msgList: [],
    bookList: {
        // 通讯录列表(/book)
        list: {},
        // 是否更新 classification,默认第一次是需要更新的
        taf: true
    },
    // 转场动画
    animationWay: 'normal'
}

const mutations = {
    // 保存用户登陆成功后的信息
    [types.SAVE_USER_INFO] (state, options) {
        state.token = options.token;
    },
    // 保存微信(/msg)列表信息
    [types.SAVE_MSG_LIST] (state, options) {
        state.msgList = options.msgList;
    },
    // 保存我发的微信信息
    [types.SAVE_MSG_INFO] (state, options) {
        state.msgList[options.index].chatInfo.push(options.msgList);
    },
    // 把当前聊天对话者排位到列表(/msg)第一个
    [types.CHANGE_MSG_LIST] (state, options) {
        state.msgList.unshift(state.msgList.splice(options.index, 1)[0]);
    },
    // 保存通讯录
    [types.SAVE_BOOK_LIST] (state, options) {
        state.bookList.list = options.bookList;
        state.bookList.taf = options.taf;
    },
    // 转场动画选择，reverse:需要返场动画,normal:正常进入动画
    [types.SAVE_ANIMATION_WAY] (state, options) {
        if (options.way) {
            // options.way 为 true 的话就设置返回转场动画
            state.animationWay = 'reverse';
        } else {
            // options.way 为 false 的话就只需要设置成正常进入转场动画
            state.animationWay = 'normal';
        }
    }
}

export default new Vuex.Store({
    state,
    mutations
});