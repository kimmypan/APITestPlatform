<template>
  <div class="app-container">
    <!-- 查询框 双向绑定 keyword-->
    <el-input
      v-model="keyword"
      placeholder="请输入关键字"
      clearable
      style="width:500px" />
    <!-- 搜索按钮 绑定点击事件 -->
    <el-button type="primary" icon="el-icon-search" @click="getDataLog()">搜索</el-button>
    <!-- data就是绑定数据用的 -->
    <el-table
      :data="dataLog"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="操作信息">
              <span>{{ props.row.log }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="用户名"
        prop="data"/>
      <el-table-column
        label="操作时间"
        prop="time"/>
    </el-table>
    <!-- 分页 -->
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getDataLog" />
      <!-- total总条数
     listQuery.page 当前页
     listQuery.limit 每页几条
     getDataLog 后买点击分页时候要回调的函数 -->
  </div>
</template>

<script>
import { getDataLog } from '@/api/dataLog'
// 引入分页组件
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  data() {
    return {
      keyword: '',
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      dataLog: []
    }
  },
  created() {
    this.getDataLog()
  },

  methods: {
    getDataLog() {
      this.listQuery = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        keyword: this.keyword
      }
      getDataLog(this.listQuery).then(response => {
        console.log('response', response)
        this.dataLog = response.Logs
        this.total = response.total
        // 查询后要把关键字给清空
        this.keyword = ''
      })
    }
  }
}
</script>
