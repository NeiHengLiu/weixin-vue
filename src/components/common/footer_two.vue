<template>
    <div class="boxFlex boxFlexBottomEnd footer-two">
        <div class="icon-line">
            <i class="icon voice"></i>
        </div>
        <div class="colFlex txt-line mrr-10 mrl-10" :class="{active: activation}">
            <textarea class="txt fs-14" @focus="addFocus" @blur="removeFocus" @keyup.enter="send" v-model="msgInfo"></textarea>
        </div>
        <div class="icon-line mrr-10">
            <i class="icon expression"></i>
        </div>
        <div class="boxFlexCen icon-line w-50">
            <i class="icon an" v-if="emptyStr"></i>
            <button class="button fs-14 color-ffffff" @click="send" v-if="!emptyStr">发送</button>
        </div>
    </div>
</template>

<script>
    import * as types from '../../vuex/mutation-types'
    export default {
        data () {
            return {
                activation: false,  // 当前是否为可编辑状态
                msgInfo: ''         // 消息内容
            }
        },
        methods: {
            send () {
                // 如果没输入内容则无法发送，完空格视为无内容
                if (this.msgInfo.trim() === '') return false;

                // 保存自己的对话内容到vuex
                this.$store.commit(types.SAVE_MSG_INFO, {
                    index: this.$route.params.index,
                    msgList: {
                        'msgThose': 1,
                        'msgDatetime': new Date(),
                        'msgInfo': this.msgInfo
                    }
                });

                // 请求随机对话内容
                axios.get('/dialogue')
                .then(options => {
                    this.$store.commit(types.SAVE_MSG_INFO, {
                        index: this.$route.params.index,
                        msgList: options.data
                    })
                });

                this.msgInfo = '';
            },
            addFocus () {
                this.activation = !this.activation;
            },
            removeFocus () {
                this.activation = !this.activation;
            },
            getDateTime () {
                return new Date();
            }
        },
        computed: {
            emptyStr () {
                return this.msgInfo.trim() === '' ? true : false;
            }
        }
    }
</script>

<style>
    .footer-two{
        width: 100%;
        min-height: 50px;
        max-height: 120px;
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 2;
        padding: 10px 7px 10px 15px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#d8d8d8), color-stop(50%, #d8d8d8), color-stop(50%, transparent));
        background-image: linear-gradient(180deg, #d8d8d8, #d8d8d8 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top left;
    }

    .footer-two .icon-line{
        width: 30px;
        height: 30px;
    }

    .footer-two .icon-line.w-50{
        width: 50px;
    }

    .footer-two .icon{
        display: block;
        width: 30px;
        height: 30px;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .footer-two .icon.voice{
        background-image: url("../../assets/images/voice.png");
        background-size: cover;
    }

    .footer-two .icon.expression{
        background-image: url("../../assets/images/expression.png");
        background-size: cover;
    }

    .footer-two .icon.an{
        background-image: url("../../assets/images/an.png");
        background-size: 32px 32px;
    }

    .footer-two .txt-line{
        position: relative;
    }

    .footer-two .txt-line::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #d8d8d8;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }

    .footer-two .txt-line.active::after{
        background-color: #45c01a;
    }

    .footer-two .txt{
        width: 100%;
        height: 25px;
        border: none;
        resize: none;
        outline: none;
        background-color: transparent;
    }

    .footer-two .button{
        width: 50px;
        height: 30px;
        padding: 0px;
        line-height: 30px;
        border: none;
        outline: none;
        border-radius: 4px;
        background-color: #1aad19;
    }
</style>