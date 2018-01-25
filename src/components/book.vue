<template>
    <div class="book">
        <mt-index-list>
            <mt-index-section :index="key" v-if="value.length" v-for="(value, key) in classification">
                <mt-cell :title="item.name" v-for="item in value"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
    import * as types from '../vuex/mutation-types.js'
    import pinying from '../assets/js/pinying'
    export default {
        data () {
            return {
                nameList: [],
                classification: {
                    'A': [],
                    'B': [],
                    'C': [],
                    'D': [],
                    'E': [],
                    'F': [],
                    'G': [],
                    'H': [],
                    'I': [],
                    'J': [],
                    'K': [],
                    'L': [],
                    'M': [],
                    'N': [],
                    'O': [],
                    'P': [],
                    'Q': [],
                    'R': [],
                    'S': [],
                    'T': [],
                    'U': [],
                    'V': [],
                    'W': [],
                    'X': [],
                    'Y': [],
                    'Z': []
                }
            }
        },
        created () {
            if(this.$store.state.bookList.taf){
                // 打开加载等待弹窗
                this.Indicator.open();
                // 请求通讯录列表
                axios.get('/book')
                .then(d => {
                    this.nameList = d.data.nameList;
                    this.Indicator.close();
                });
            } else {
                this.classification = this.$store.state.bookList.list;
            }
        },
        watch: {
            nameList (val) {
                val.map(name => {
                    let py = pinying(name.split('')[0])[0];
                    this.classification[py].push({
                        name: name
                    });
                });

                this.$store.commit(types.SAVE_BOOK_LIST, {
                    bookList: this.classification,
                    taf: false
                });
            }
        }
    }
</script>

<style>
    .book{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .book .mint-indexlist-content{
        text-align: left;
    }
</style>