<template>
    <div>
        <el-table :data="resList" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="食品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="食品地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="食品介绍">
                            <span>{{ props.row.description }}</span>
                        </el-form-item>
                        <el-form-item label="食品 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="评分">
                            <span>{{ props.row.rating }}</span>
                        </el-form-item>
                        <el-form-item label="销售量">
                            <span>{{ props.row.recent_order_num }}</span>
                        </el-form-item>
                        <el-form-item label="分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="食品名称" prop="name">
            </el-table-column>
            <el-table-column label="食品介绍" prop="description">
            </el-table-column>
            <el-table-column label="评分" prop="rating">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[1, 2, 3, 4, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="list.length">
        </el-pagination>

        <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="食品名称">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="食品介绍">
                    <el-input v-model="form.description" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="食品分类">
                    <el-select v-model="form.region" placeholder="">
                    </el-select>
                </el-form-item>
                <el-table :data="tableData" height="250" border style="width: 100%">
                    <el-table-column prop="size" label="规格">
                    </el-table-column>
                    <el-table-column prop="Packaging" label="包装费">
                    </el-table-column>
                    <el-table-column prop="price" label="价格">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="deletes(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button type="primary" @click="dialogFormVisible2 = true">添加规格</el-button>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="添加规格" :visible.sync="dialogFormVisible2">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="规格" prop="size">
                    <el-input v-model="ruleForm.size"></el-input>
                </el-form-item>
                <el-form-item label="包装费">
                    <el-input-number v-model="ruleForm.Packaging" @change="handleChange" :min="1" :max="10"
                        label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input-number v-model="ruleForm.price" @change="handleChange" :min="1" :max="100" label="描述文字">
                    </el-input-number>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            currentPage: 1,
            exid:-1,
            pageSize: 5,
            dialogFormVisible: false,
            dialogFormVisible2: false,
            form: {
                name: '',
                description: '',
                region: [],
            },
            tableData: [{
                size: '默认',
                Packaging: '0',
                price: '20'
            }],
            ruleForm: {
                size: '',
                Packaging: 0,
                price: 20
            },
            rules: {
                size: [
                    { required: true, message: '请输入规格', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        getList() {
            this.$axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined').then((res) => {
                console.log(res);
                this.list = res.data
            })
        },
        handleSizeChange(val) {
            this.pageSize = val
        },
        handleCurrentChange(val) {
            this.currentPage = val
        },
        handleDelete(index, row) {
            this.list.splice(index, 1)
        },
        handleEdit(index, row) {
            this.dialogFormVisible = true
            this.exid=index
            this.form=row
        },
        getfenlei() {
            this.$axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=3283&allMenu=true').then(res => {
                console.log(res);
                from.region = res.data.name
            })
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.tableData.push(this.ruleForm),
                        this.dialogFormVisible2 = false,
                        this.ruleForm = {
                            size: '',
                            Packaging: 0,
                            price: 20
                        }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        deletes(index,row){
            this.tableData.splice(index,1)
        },
        confirm(){
            this.list[this.exid]=this.from
            this.dialogFormVisible=false
        }
    },
    created() {
        this.getList(),
            this.getfenlei()
    },
    mounted() {

    },
    components: {

    },
    computed: {
        resList() {
            return this.list.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },
    watch: {

    },
}
</script>

<style lang='scss' scoped>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
