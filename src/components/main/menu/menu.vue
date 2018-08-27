<template>
    <div class="menu">
        <ul style="width:25%">
            <li :class="index === 1 ? 'active' : ''" @click="index = 1">单品</li>
            <li :class="index === 2 ? 'active' : ''" @click="index = 2">套餐</li>
        </ul>
        <div style="width:75%">
            <dish v-show="index === 1" :dishList="dishList"></dish>
            <set v-show="index === 2" :setList="setList"></set>
        </div>
    </div>
</template>

<script>
    import dish from './dish'
    import set from './set'

    export default {
        name: 'sMenu',
        components: {
            dish,
            set
        },
        data() {
            return {
                index: 1,
                dishList: [
                    {
                        id: '1',
                        cn_name: 'VUE单品',
                        code: '000xxx1',
                        image_url: '../../../assets/logo.png'
                    },
                    {
                        id: '2',
                        cn_name: 'VUE单品',
                        code: '000xxx1',
                        image_url: '../../../assets/logo.png'
                    },
                    {
                        id: '3',
                        cn_name: 'VUE单品',
                        code: '000xxx1',
                        image_url: '../../../assets/logo.png'
                    }
                ],
                setList: [
                    {
                        id: '1',
                        name: 'VUE套餐',
                        code: '000xxx1',
                        tags: ['西红柿', '鸡蛋'],
                        dishes: ['单品1id', '单品2id'],
                        image_urls: ['url1', 'url2']
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .menu {
        height: calc(100% - 10px);
        padding-top: 10px;
        display: flex;
        ul {
            background-color: #efefef;
            li {
                padding: 12px 0;
                text-align: center;
            }
            li.active {
                background-color: white;
            }
        }
    }
</style>
