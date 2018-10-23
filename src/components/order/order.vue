<template>
    <div class="order">
        <mt-header title="订单" style="font-size: 20px;height:4rem;"></mt-header>
        <div class="main">
            <table class="table">
                <tr>
                    <th class="dishName">名称</th>
                    <th class="num">数量</th>
                </tr>
                <tr>
                    <td>
                        大饼鸡蛋1
                    </td>
                    <td>
                        <number-picker></number-picker>
                    </td>
                </tr>
            </table>
            <div class="submit" @click="onSubmit">提交订单</div>
        </div>
    </div>
</template>

<script>
    import numberPicker from '../common/numberPicker'

    export default {
        name: 'order',
        components: {
            numberPicker
        },
        data() {
            return {}
        },
        methods: {
            onSubmit() {
                this.$router.push({path: '/orderDetail', query: {}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order {
        width: 100%;
        height: 100%;
        .main {
            width: calc(100% - 2rem);
            height: calc(100% - 4rem);
            padding: 0 1rem;
            .table {
                width: 100%;
                border-collapse: collapse;
                tr {
                    .dishName, .num {
                        height: 4rem;
                        font-size: 16px;
                        border-bottom: 1px solid #a9a9a9;
                    }
                    .dishName {
                        width: 60%;
                    }
                    .num {
                        width: 40%;
                    }
                    td {
                        height: 5rem;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }
            .submit {
                width: 90%;
                margin: 2rem auto 0;
                padding: 1rem 0;
                text-align: center;
                border-radius: 0.4rem;
                font-size: 16px;
                color: white;
                background-color: #26a2ff;
            }
        }
    }
</style>
