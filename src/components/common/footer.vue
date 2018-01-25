<template>
    <mt-tabbar v-model="choose_item" class="wx-footer">
        <mt-tab-item id="/msg">
            <div class="icon icon-msg" slot="icon"></div>
            微信
        </mt-tab-item>
        <mt-tab-item id="/book">
            <div class="icon icon-book" slot="icon"></div>
            通讯录
        </mt-tab-item>
        <mt-tab-item id="/found">
            <div class="icon icon-found" slot="icon"></div>
            发现
        </mt-tab-item>
        <mt-tab-item id="/my">
            <div class="icon icon-my" slot="icon"></div>
            我
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    export default {
        data () {
            return {
                choose_item: '/msg'
            }
        },
        watch: {
            choose_item (newVal, oldVal) {
                this.$router.push(newVal);
            }
        }
    }
</script>

<style>
    .wx-footer{
        height: 55px;
        background-color: #fcfcfc;
    }

    .wx-footer .icon{
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .wx-footer .icon.icon-msg{
        background-image: url("../../assets/images/msg.png");
    }

    .wx-footer .icon.icon-book{
        background-image: url("../../assets/images/book.png");
    }

    .wx-footer .icon.icon-found{
        background-image: url("../../assets/images/found.png");
    }

    .wx-footer .icon.icon-my{
        background-image: url("../../assets/images/my.png");
    }

    .wx-footer .mint-tab-item.is-selected .icon.icon-msg{
        background-image: url("../../assets/images/msg_active.png");
    }

    .wx-footer .mint-tab-item.is-selected .icon.icon-book{
        background-image: url("../../assets/images/book_active.png");
    }

    .wx-footer .mint-tab-item.is-selected .icon.icon-found{
        background-image: url("../../assets/images/found_active.png");
    }

    .wx-footer .mint-tab-item.is-selected .icon.icon-my{
        background-image: url("../../assets/images/my_active.png");
    }

    .wx-footer .mint-tab-item-label{
        color: #999999;
    }

    .wx-footer .mint-tab-item.is-selected{
        background-color: transparent;
    }

    .wx-footer .mint-tab-item.is-selected .mint-tab-item-label{
        color: #46c01b;
    }
</style>