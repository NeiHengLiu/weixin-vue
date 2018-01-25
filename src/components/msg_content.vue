<template>
    <div class="msg-content" id="msg-content">
        <div class="msg-list">
            <template v-for="(item, index) in msgInfoList">
                <!--S 展示日期时间 如：2017年12月31日 晚上19:25 -->
                <div class="msg-time" v-if="showTime(index)">
                    <div class="txt fs-12">{{ dateFormat(item.msgDatetime).getCDateTime() }}</div>
                </div>
                <!--E 展示日期时间 -->

                <!--S 他方消息-->
                <div class="boxFlex mrb-10" v-if="Number(item.msgThose) === 0">
                    <div class="msg-portrait">
                        <img class="header-icon" src="../assets/images/header_icon_1.jpg" v-if="headIcon === 1">
                        <img class="header-icon" src="../assets/images/header_icon_2.jpg" v-else-if="headIcon === 2">
                        <img class="header-icon" src="../assets/images/header_icon_3.jpg" v-else-if="headIcon === 3">
                        <img class="header-icon" src="../assets/images/header_icon_4.jpg" v-else-if="headIcon === 4">
                        <img class="header-icon" src="../assets/images/header_icon_5.jpg" v-else-if="headIcon === 5">
                        <img class="header-icon" src="../assets/images/header_icon_6.jpg" v-else-if="headIcon === 6">
                        <img class="header-icon" src="../assets/images/header_icon_7.jpg" v-else-if="headIcon === 7">
                        <img class="header-icon" src="../assets/images/header_icon_8.jpg" v-else-if="headIcon === 8">
                        <img class="header-icon" src="../assets/images/header_icon_9.jpg" v-else-if="headIcon === 9">
                        <img class="header-icon" src="../assets/images/header_icon_10.jpg" v-else-if="headIcon === 10">
                        <img class="header-icon" src="../assets/images/header_icon_11.jpg" v-else-if="headIcon === 11">
                        <img class="header-icon" src="../assets/images/header_icon_12.jpg" v-else-if="headIcon === 12">
                        <img class="header-icon" src="../assets/images/header_icon_13.jpg" v-else-if="headIcon === 13">
                        <img class="header-icon" src="../assets/images/header_icon_14.jpg" v-else-if="headIcon === 14">
                        <img class="header-icon" src="../assets/images/header_icon_15.jpg" v-else-if="headIcon === 15">
                        <img class="header-icon" src="../assets/images/header_icon_16.jpg" v-else-if="headIcon === 16">
                        <img class="header-icon" src="../assets/images/header_icon_17.jpg" v-else-if="headIcon === 17">
                        <img class="header-icon" src="../assets/images/header_icon_18.jpg" v-else-if="headIcon === 18">
                        <img class="header-icon" src="../assets/images/header_icon_19.jpg" v-else-if="headIcon === 19">
                        <img class="header-icon" src="../assets/images/header_icon_20.jpg" v-else-if="headIcon === 20">
                    </div>
                    <div class="boxFlexStart colFlex mrl-10 mrr-30">
                        <div class="txtLeft">
                            <!-- <span class="fs-14 color-8c8c8c">{{ name }}</span> -->
                            <p class="msg-info msg-info-white fs-16 mrt-2">{{ item.msgInfo }}</p>
                        </div>
                    </div>
                </div>
                <!--E 他方消息-->

                <!--S 我的消息-->
                <div class="boxFlex mrb-10" v-else-if="Number(item.msgThose) === 1">
                    <div class="boxFlexEnd colFlex mrr-10 mrl-30">
                        <div class="txtRight">
                            <p class="msg-info msg-info-green txtLeft fs-16 mrt-2">{{ item.msgInfo }}</p>
                        </div>
                    </div>
                    <div class="msg-portrait">
                        <img src="../assets/images/header_icon_0.jpg">
                    </div>
                </div>
                <!--E 我的消息-->
            </template>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        data () {
            return {
                headIcon: this.$store.state.msgList[this.$route.params.index].header,
                name: this.$store.state.msgList[this.$route.params.index].name,
                msgInfoList: this.$store.state.msgList[this.$route.params.index].chatInfo
            }
        },
        mounted () {
            this.$nextTick(() => {
                new BScroll('#msg-content', {  
                    deceleration: 0.001,
                    bounce: false,
                    swipeTime: 1800,
                    click: true,
                }); 
            })
        },
        methods: {
            // 对话内容间隔时间小于3分钟则不显示时间
            showTime (index) {
                if (index === 0) return true;

                let prevTime = this.dateFormat(this.msgInfoList[index-1].msgDatetime).getCTime();
                let currTime = this.dateFormat(this.msgInfoList[index].msgDatetime).getCTime();

                return (currTime-prevTime) > (3*60*1000) ? true : false;
            }
        }
    }
</script>

<style>
    .msg-content{
        height: 100%;
        background-color: #e7e7e7;
        overflow: auto;
        position: relative;
    }

    .msg-content .msg-list{
        width: 100%;
        padding: 10px 10px;
        box-sizing: border-box;
    }

    .msg-content .msg-time{
        width: 100%;
        padding: 10px 0;
        text-align: center;
        box-sizing: border-box;
    }

    .msg-content .msg-time .txt{
        display: inline-block;
        color: #fff;
        padding: 3px 8px;
        border-radius: 3px;
        background-color: rgba(133, 133, 133, .2);
    }

    .msg-content .msg-list .msg-portrait,
    .msg-content .msg-list .msg-portrait img{
        display: block;
        width: 40px;
        height: 40px;
    }

    .msg-content .msg-list .msg-info{
        height: auto;
        padding: 10px 10px;
        border-radius: 5px;
        word-wrap: break-word;
        word-break: break-all;
        position: relative;
    }

    .msg-content .msg-list .msg-info::after{
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
    }

    .msg-content .msg-list .msg-info.msg-info-white{
        background-color: #fff;
        border: 1px solid #d4d4d4;
    }

    .msg-content .msg-list .msg-info.msg-info-white::after{
        background-color: #fff;
        border: 1px solid #d4d4d4;
        border-right-color: transparent;
        border-top-color: transparent;
        top: 13px;
        left: -6px;
    }

    .msg-content .msg-list .msg-info.msg-info-green{
        background-color: #a0e75a;
        border: 1px solid #76bf52;
    }

    .msg-content .msg-list .msg-info.msg-info-green::after{
        background-color: #a0e75a;
        border: 1px solid #76bf52;
        border-left-color: transparent;
        border-bottom-color: transparent;
        top: 13px;
        right: -6px;
    }
</style>

