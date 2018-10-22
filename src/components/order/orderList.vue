<template>
    <div class="orderList">
        <div v-for="item in list">
            <div class="dishName">天妇罗</div>
            <div class="num">&times;10</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'orderList',
        props: {
            lang: {
                type: String,
                default: 'chinese'
            },
            list: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
