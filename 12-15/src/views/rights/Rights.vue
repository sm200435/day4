<template>
  <div>
    <div class="rights" style="padding: 15px; background-color: white">
      <el-table
        stripe
        ref="singleTable"
        :data="list"
        highlight-current-row
        style="width: 100%"
        border
      >
        <el-table-column type="index" width="50" label="#"></el-table-column>
        <el-table-column property="authName" label="权限名称">
        </el-table-column>
        <el-table-column property="path" label="路径"> </el-table-column>
        <el-table-column label="权限等级">
          <template slot-scope="scope">
            <el-button v-if="scope.row.level == 0" type="primary" plain
              >一级</el-button
            >
            <el-button v-if="scope.row.level == 1" type="success" plain
              >二级</el-button
            >
            <el-button v-if="scope.row.level == 2" type="warning" plain
              >三级</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { rights } from "@/untils/rights"
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    getRights() {
      rights({ type: "list" }).then((res) => {
        console.log(res)
        this.list = res.data.data
      })
    }
  },
  created() {
    this.getRights()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
