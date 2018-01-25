<template>
    <mt-header class="wx-header">
        <h1 class="title fs-18" slot="left">微信<span v-if="msgNum > 0">({{ msgNum }})</span></h1>
        <div class="boxFlexEnd button-line" slot="right">
            <i class="cover icon icon-search"></i>
            <i class="cover icon icon-add"></i>
        </div>
    </mt-header>
</template>

<script>
    export default {
        data () {
            return {
                msgNum: 0
            }
        }
    }
</script>

<style>
    .wx-header{
        width: 100%;
        height: 50px;
        color: #fff;
        background-color: #393a3f;
        padding: 0 15px;
    }

    .wx-header .button-line .icon{
        display: block;
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-size: 22px;
    }

    .wx-header .button-line .icon.icon-search{
        background-image: url("../../assets/images/search.png");
        margin-right: 15px;
    }

    .wx-header .button-line .icon.icon-add{
        background-image: url("../../assets/images/add.png");
        background-position: 50% 50%;
    }
</style>