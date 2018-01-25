<template>
    <mt-header class="wx-header-two">
        <div class="boxFlexStart title" slot="left">
            <div class="icon back divider" @click="back"></div>
            <div class="mrl-15 fs-18">{{ titleName }}</div>
        </div>
        <div class="boxFlexEnd" slot="right">
            <i class="icon me"></i>
        </div>
    </mt-header>
</template>

<script>
    import * as types from '../../vuex/mutation-types'
    export default {
        data () {
            return {
                titleName: '大佬',
                tnf: false,
                index: this.$route.params.index
            }
        },
        methods: {
            back () {
                this.$router.back();
                if (!this.tnf) return false;
                this.$store.commit(types.CHANGE_MSG_LIST, {
                    index: this.index
                });
            }
        },
        computed: {
            msgList () {
                return this.$store.state.msgList[this.index].chatInfo
            }
        },
        watch: {
            msgList (v) {
                this.tnf = true;
            }
        }
    }
</script>

<style>
    .wx-header-two{
        width: 100%;
        height: 50px;
        color: #fff;
        background-color: #393a3f;
        padding: 0 2px 0 0;
    }

    .wx-header-two .title{
        height: 50px;
    }

    .wx-header-two .icon{
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        position: relative;
    }

    .wx-header-two .icon.divider::after{
        content: "";
        display: block;
        width: 1px;
        height: 26px;
        background-color: #2e2e32;
        position: absolute;
        right: -1px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .wx-header-two .icon.back{
        background-image: url("../../assets/images/back.png");
        background-size: 30px;
    }

    .wx-header-two .icon.me{
        background-image: url("../../assets/images/me.png");
        background-size: 30px;
    }
</style>

