<template>
    <div class="msg-dialogue-layout">
        <com-header ref="msgTitle"></com-header>
        <div class="msg-dialogue-body lib-body lib-body-bottom-50">
            <router-view></router-view>
        </div>
        <com-footer></com-footer>
    </div>
</template>

<script>
    import * as types from '../vuex/mutation-types'
    import comHeader from './common/header_two.vue'
    import comFooter from './common/footer_two.vue'
    export default {
        data () {
            return {
                
            }
        },
        components: {
            comHeader,
            comFooter
        },
        mounted () {
            this.$refs.msgTitle.titleName = this.$route.params.title;
            this.$store.commit(types.SAVE_ANIMATION_WAY, {
                way: true
            });
        },
        watch: {
            '$route' (to, from) {
                console.log(to);
                console.log(from);
            }
        }
    }
</script>

<style>
    .msg-dialogue-layout{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
</style>

