<template>
    <div class="app-views">
        <com-header></com-header>
        <div class="layout-body lib-body">
            <router-view></router-view>
        </div>
        <com-footer></com-footer>
    </div>
</template>

<script>
    import comHeader from './common/header.vue'
    import comFooter from './common/footer.vue'

    export default {
        data () {
            return {
                
            }
        },
        components: {
            comHeader,
            comFooter
        }
    }
</script>

<style>
    .app-views{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
</style>
