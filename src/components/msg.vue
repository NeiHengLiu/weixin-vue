<template>
    <div class="msg-body" id="msg-body">
        <div class="msg-list">
            <router-link class="boxFlex msg-item" tag="div" :to="'/chat/content/'+item.name+'/'+index" v-for="(item, index) in msgList">
                <div class="msg-header">
                    <img class="header-icon" src="../assets/images/header_icon_1.jpg" v-if="item.header === 1">
                    <img class="header-icon" src="../assets/images/header_icon_2.jpg" v-else-if="item.header === 2">
                    <img class="header-icon" src="../assets/images/header_icon_3.jpg" v-else-if="item.header === 3">
                    <img class="header-icon" src="../assets/images/header_icon_4.jpg" v-else-if="item.header === 4">
                    <img class="header-icon" src="../assets/images/header_icon_5.jpg" v-else-if="item.header === 5">
                    <img class="header-icon" src="../assets/images/header_icon_6.jpg" v-else-if="item.header === 6">
                    <img class="header-icon" src="../assets/images/header_icon_7.jpg" v-else-if="item.header === 7">
                    <img class="header-icon" src="../assets/images/header_icon_8.jpg" v-else-if="item.header === 8">
                    <img class="header-icon" src="../assets/images/header_icon_9.jpg" v-else-if="item.header === 9">
                    <img class="header-icon" src="../assets/images/header_icon_10.jpg" v-else-if="item.header === 10">
                    <img class="header-icon" src="../assets/images/header_icon_11.jpg" v-else-if="item.header === 11">
                    <img class="header-icon" src="../assets/images/header_icon_12.jpg" v-else-if="item.header === 12">
                    <img class="header-icon" src="../assets/images/header_icon_13.jpg" v-else-if="item.header === 13">
                    <img class="header-icon" src="../assets/images/header_icon_14.jpg" v-else-if="item.header === 14">
                    <img class="header-icon" src="../assets/images/header_icon_15.jpg" v-else-if="item.header === 15">
                    <img class="header-icon" src="../assets/images/header_icon_16.jpg" v-else-if="item.header === 16">
                    <img class="header-icon" src="../assets/images/header_icon_17.jpg" v-else-if="item.header === 17">
                    <img class="header-icon" src="../assets/images/header_icon_18.jpg" v-else-if="item.header === 18">
                    <img class="header-icon" src="../assets/images/header_icon_19.jpg" v-else-if="item.header === 19">
                    <img class="header-icon" src="../assets/images/header_icon_20.jpg" v-else-if="item.header === 20">
                </div>
                <div class="colFlex msg-line mrl-10">
                    <div class="boxFlex msg-info">
                        <div class="colFlex boxFlexStart fs-15 color-353535">{{ item.name }}</div>
                        <div class="boxFlexEnd fs-12 color-bbbbbb">{{ dateFormat(lastMsgInfoTime(item.chatInfo)).getCDateTime() }}</div>
                    </div>
                    <div class="boxFlexStart msg-info mrr-40">
                        <div class="txtEll txtClamp1 fs-14 color-999999">{{ lastMsgInfo(item.chatInfo) }}</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import * as types from '../vuex/mutation-types'
    import BScroll from 'better-scroll'
    export default {
        data () {
            return {
                msgList: []
            }
        },
        methods: {
            // 返回最后一条消息
            lastMsgInfo (msgInfo) {
                let length = msgInfo.length;
                return msgInfo[length-1].msgInfo
            },
            // 返回最后一条消息的发送时间
            lastMsgInfoTime (msgInfo) {
                let length = msgInfo.length;
                return msgInfo[length-1].msgDatetime
            }
        },
        mounted () {
            this.$nextTick(() => {
                new BScroll('#msg-body', {  
                    deceleration: 0.001,
                    bounce: false,
                    swipeTime: 1800,
                    click: true,
                }); 
            })
        },
        created () {
            if(!this.$store.state.msgList.length){
                this.Indicator.open();
                axios.get('/chatList')
                .then(data => {
                    this.msgList = data.data.list;
                    this.$store.commit(types.SAVE_MSG_LIST, {
                        msgList: data.data.list
                    });
                    this.Indicator.close();
                })
            } else {
                this.msgList = this.$store.state.msgList;
            }
        }
    }
</script>

<style>
    .msg-body{
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
    }

    .msg-body .msg-list{
        width: 100%;
    }

    .msg-list .msg-item{
        width: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        position: relative;
    }

    .msg-list .msg-item::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #dadada;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }

    .msg-list .msg-item:last-child::after{
        background-color: transparent;
    }

    .msg-list .msg-header{
        width: 40px;
        height: 40px;
    }

    .msg-list .msg-header .header-icon{
        display: block;
        width: 100%;
        height: 100%;
    }

    .msg-list .msg-line{
        width: 100%;
        height: 40px;
    }

    .msg-list .msg-info{
        height: 20px;
    }
</style>

