<template>
    <div class="found">
        <div class="list" :class="{'mrt-20':index>0}" v-for="(arry, index) in list">
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
                            iconName: 'pyq',
                            titleName: '朋友圈'
                        }
                    ],
                    [
                        {
                            iconName: 'sys',
                            titleName: '扫一扫'
                        },
                        {
                            iconName: 'yyy',
                            titleName: '摇一摇'
                        }
                    ],
                    [
                        {
                            iconName: 'fjdr',
                            titleName: '附近的人'
                        },
                        {
                            iconName: 'plp',
                            titleName: '漂流瓶'
                        }
                    ],
                    [
                        {
                            iconName: 'gw',
                            titleName: '购物'
                        },
                        {
                            iconName: 'yx',
                            titleName: '游戏'
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

    .found .list .icon.pyq{
        background-image: url("../assets/images/found_pyq.png");
    }

    .found .list .icon.sys{
        background-image: url("../assets/images/found_sys.png");
    }

    .found .list .icon.yyy{
        background-image: url("../assets/images/found_yyy.png");
    }

    .found .list .icon.fjdr{
        background-image: url("../assets/images/found_fjdr.png");
    }

    .found .list .icon.plp{
        background-image: url("../assets/images/found_plp.png");
    }

    .found .list .icon.gw{
        background-image: url("../assets/images/found_gw.png");
    }

    .found .list .icon.yx{
        background-image: url("../assets/images/found_yx.png");
    }
</style>

