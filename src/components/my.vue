<template>
    <div class="found">
        <div class="list">
            <div class="item boxFlex">
                <div class="header">
                    <img class="header-img" src="../assets/images/header_icon_0.jpg">
                </div>
                <div class="colFlex boxFlexStart mrl-15 fs-15">
                    <div class="txtLeft">
                        <p class="color-353535">null</p>
                        <p class="color-999999">微信号：xiaobai</p>
                    </div>
                </div>
                <div class="boxFlexEnd">
                    <div class="icon ewm"></div>
                </div>
            </div>
        </div>
        <div class="list mrt-20" v-for="(arry, index) in list">
            <div class="item boxFlex" v-for="item in arry">
                <div class="icon" :class="item.iconName"></div>
                <div class="colFlex boxFlexStart mrl-15 fs-15">
                    <span class="color-353535">{{ item.titleName }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: [
                    [
                        {
                            iconName: 'qb',
                            titleName: '钱包'
                        }
                    ],
                    [
                        {
                            iconName: 'sc',
                            titleName: '收藏'
                        },
                        {
                            iconName: 'xc',
                            titleName: '相册'
                        },
                        {
                            iconName: 'kb',
                            titleName: '卡包'
                        },
                        {
                            iconName: 'bq',
                            titleName: '表情'
                        }
                    ],
                    [
                        {
                            iconName: 'sz',
                            titleName: '设置'
                        }
                    ]
                ]
            }
        }
    }
</script>

<style>
    .found{
        min-height: 100%;
        width: 100%;
        padding: 20px 0;
        background-color: #ebebeb;
        box-sizing: border-box;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .found .list{
        padding: 0 15px;
        background-color: #fff;
    }

    .found .list .item{
        width: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        position: relative;
    }

    .found .list .item::after{
        content: "";
        display: block;
        width:  100%;
        height: 1px;
        background-color: #dbdbdb;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }

    .found .list .item:last-child::after{
        background-color: transparent;
    }

    .found .list .icon{
        display: block;
        width: 28px;
        height: 28px;
        margin-left: 5px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 22px 22px;
    }

    .found .list .icon.qb{
        background-image: url("../assets/images/my_qb.png");
    }

    .found .list .icon.sc{
        background-image: url("../assets/images/my_sc.png");
    }

    .found .list .icon.xc{
        background-image: url("../assets/images/my_xc.png");
    }

    .found .list .icon.kb{
        background-image: url("../assets/images/my_kb.png");
    }

    .found .list .icon.bq{
        background-image: url("../assets/images/my_bq.png");
    }

    .found .list .icon.sz{
        background-image: url("../assets/images/my_sz.png");
    }

    .found .header{
        display: block;
        width: 55px;
        height: 55px;
    }

    .found .header .header-img{
        display: block;
        width: 100%;
        height: 100%;
    }

    .found .list .icon.ewm{
        background-image: url("../assets/images/my_ewm.png");
    }
</style>

