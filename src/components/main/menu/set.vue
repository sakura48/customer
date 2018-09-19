<template>
    <ul
        style="background-color: white;"
        class="setList">
        <li class="cell" v-for="item in setList" @click="showDetail(item)">
            <img :src="url+item.image_url" alt="">
            <div class="content">
                <h4>{{item.cn_name}}</h4>
                <h6>
                    <span>味道好</span><span>分量足</span>
                </h6>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mixin} from '../../../mixins/index'

    export default {
        name: 'set',
        mixins: [mixin],
        data() {
            return {
                loading: false
            }
        },
        computed: {
            setList() {
                return this.$store.state.setList
            }
        },
        methods: {
            showDetail(set) {
                this.$store.commit('currentSet', set)
                this.$store.commit('showSet', true)
            }
            // loadMore() {
            //     this.loading = true
            //     setTimeout(() => {
            //         let last = this.list[this.list.length - 1]
            //         for (let i = 1; i <= 10; i++) {
            //             this.list.push(last + i)
            //         }
            //         this.loading = false
            //     }, 2500)
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .setList {
        background-color: white;
        .cell {
            height: 100px;
            padding: 0 10px 20px 10px;
            display: flex;
            img {
                width: 100px;
                height: 100px;
            }
            .content {
                h4 {
                    width: 100%;
                    margin-left: 12px;
                    margin-top: 10px;
                }
                h6 {
                    width: 100%;
                    margin-left: 12px;
                    margin-top: 10px;
                    span {
                        float: left;
                        padding: 2px 4px;
                        border-radius: 1000px;
                        color: #a9a9a9;
                        margin-right: 10px;
                        background-color: rgba(255, 179, 17, 0.1);
                    }
                }
            }
        }
    }
</style>
