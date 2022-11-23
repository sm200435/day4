<template>
    <div>
        <el-table :data="resList" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="店铺名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="店铺介绍">
                            <span>{{ props.row.description }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
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
            <el-table-column label="店铺名称" prop="name">
            </el-table-column>
            <el-table-column label="店铺地址" prop="address">
            </el-table-column>
            <el-table-column label="店铺介绍" prop="description">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" @click="handlefoot(scope.$index, scope.row)">添加食品</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[1, 2, 3, 4, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="list.length">
        </el-pagination>
        <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="店铺名称">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="详情地址">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                    当前城市：{{address}}
                </el-form-item>
                <el-form-item label="店铺介绍">
                    <el-input v-model="form.description" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店铺分类">
                    <el-select v-model="form.category" placeholder="请选择活动区域">
                        <!-- <el-option label="区域一" value="shanghai"></el-option> -->
                    </el-select>
                </el-form-item>
                <el-form-item label="店铺图片">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="form.image_path" :src="form.image_path" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="exided">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            address:"",
            list: [],
            currentPage: 1,
            pageSize: 5,
            form: {
                name: '',
                address: '',
                description: '',
                phone: '',
                delivery: false,
                category: [],
                image_path: '',
            },
            dialogFormVisible: false,
            exid:-1
        }
        
    },

    methods: {
        getList() {
            this.$axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=32.99073&longitude=112.528511&offset=0&limit=20').then((res) => {
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
            console.log(row.id);
            this.$axios.delete(`https://elm.cangdu.org/shopping/restaurant/${row.id}`).then(res => {
                console.log(res);
            })
        },
        handleEdit(index, row) {
            this.dialogFormVisible = true,
            this.form=row,
            this.exid=index
        },

        handleAvatarSuccess(res, file) {
            this.form.image_path = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        exided(){
            this.dialogFormVisible=false
            this.list[this.exid]=this.form
        }
    },
    created() {
        this.getList(),
        this.$axios.get('https://elm.cangdu.org/v1/cities?type=guess').then(res=>{
            console.log(res.data.name);
            this.address=res.data.name
        })
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

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
