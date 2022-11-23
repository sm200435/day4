<template>
    <div>
        <div id="main" style="width: 1200px;height:400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    data() {
        return {
            option: {
                title: {
                    text: '走线图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [
                    {
                        name: 'Highest',
                        type: 'line',
                        data: [10, 11, 13, 11, 12, 12, 9],
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }]
                        }
                    },
                    {
                        name: 'Lowest',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        markPoint: {
                            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: 'Avg' },
                                [
                                    {
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    },
                                    {
                                        symbol: 'circle',
                                        label: {
                                            position: 'start',
                                            formatter: 'Max'
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        }
    },
    methods: {

    },
    created() {

    },
    mounted() {
        var myChart = echarts.init(document.getElementById('main'));
        // 获取视图容器
        myChart.setOption(this.option);
        // 给视图容器设置数据
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
}
</script>

<style lang='scss' scoped>

</style>
