<template>
    <div class="login">
        <div class="login-list mrr-15 mrl-15">
            <div class="login-info">
                <mt-field type="text" placeholder="请输入微信号" v-model="userName"></mt-field>
                <mt-field type="password" placeholder="请输入密码" v-model="userPwd"></mt-field>
            </div>
            <mt-button class="login-btn" @click.native="login">登陆</mt-button>
        </div>
    </div>
</template>

<script>
    import * as types from '../vuex/mutation-types'
    export default {
        data () {
            return {
                userName: 'xiaobai',
                userPwd: '123456'
            }
        },
        methods: {
            login () {
                this.Indicator.open();
                axios.post('/login',{
                    userName: this.userName,
                    userPwd: this.userPwd
                })
                .then(data => {
                    if(data.data.token !== ''){
                        this.$store.commit(types.SAVE_USER_INFO, {
                            token: data.data.token
                        });
                        this.$router.push(this.$route.query.backURL ? this.$route.query.backURL : '/');
                        this.Indicator.close();
                    } else {
                        this.Indicator.close();
                        this.Toast({
                            message: data.data.error,
                            position: 'bottom'
                        });
                    }
                })
                .catch(error => {
                    this.Indicator.close();
                    this.Toast({
                        message: error,
                        position: 'bottom'
                    });
                });
            }
        }
    }
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        background: url("../assets/images/login_bg.jpg");
    }

    .login .login-list{
        box-sizing: border-box;
        -webkit-transform: translateY(150px);
        transform: translateY(150px);
    }

    .login .login-info{
        border: 1px solid #858585;
        border-radius: 2px;
        box-sizing: border-box;
    }

    .login .mint-cell:first-child .mint-cell-wrapper{
        background-image: none;
    }

    .login .mint-cell:last-child{
        background-image: none;
        position: relative;
    }

    .login .mint-cell:last-child::before{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #858585;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .login .mint-cell:last-child .mint-cell-wrapper{
        background-image: none;
    }

    .login .mint-cell,
    .login .mint-field-core{
        background-color: transparent;
    }

    .login .login-btn{
        width: 100%;
        margin-top: 50px;
        color: #fff;
        background-color: #1aad19;
    }
</style>

