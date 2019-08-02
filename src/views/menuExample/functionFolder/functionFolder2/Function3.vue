<template>
  <div class="view-container" v-loading="loading">
    <el-breadcrumb>
      <el-breadcrumb-item>组织管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view-body">
      <el-tree
        v-if="orgTreeData.length > 0"
        :data="orgTreeData"
        :props="defaultProps"
        node-key="department_id"
        default-expand-all
        :expand-on-click-node="false">
        <div
          class="text-button-wrap"
          slot-scope="{ node, data }"
          @mouseover="tempId = data.department_id"
          @mouseout="tempId = null">
          <span class="fill-width">
            <span>{{ node.label }}</span>
            <span v-show="tempId == data.department_id">
            <!-- <span v-show="data.depart_name == '总公司'"> -->
              <el-button
                type="text"@click.stop="showNodeDialog('new', data)">
                添加次级
              </el-button>
              <el-button
                type="text"
                @click.stop="showNodeDialog('edit', data)">
                编辑
              </el-button>
              <el-button
                type="text"
                class="text-danger"
                @click.stop="deleteOrg(data)">
                删除
              </el-button>
            </span>
          </span>
        </div>
      </el-tree>
    </div>
    <div class="view-footer"></div>

    <el-dialog
      title="部门组织"
      :close-on-click-modal="false"
      :visible.sync="orgDialogVisible"
      width="30%">
      <el-form ref="orgForm" label-width="80px" :model="orgForm" :rules="orgRules">
        <el-form-item label="部门名称" prop="depart_name">
          <el-input v-model="orgForm.depart_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="orgDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('orgForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading:      false,
        orgTreeData: [
          {
            "department_id": 1,
            "pid": 0,
            "depart_name": "总公司",
            "child": [{
              "department_id": 2,
              "pid": 1,
              "depart_name": "杭州分公司",
              "child": [{
                "department_id": 4,
                "pid": 2,
                "depart_name": "下城区分公司"
              }, {
                "department_id": 5,
                "pid": 2,
                "depart_name": "西湖区分公司1"
              }]
            }, {
              "department_id": 3,
              "pid": 1,
              "depart_name": "温州分公司"
            }]
          }, 
          {
            "department_id": 19,
            "pid": 0,
            "depart_name": "测试顶级",
            "child": [{
              "department_id": 20,
              "pid": 19,
              "depart_name": "测试次级"
            }]
          }
        ],
        tempId:       null, //鼠标浮动对应的节点id
        defaultProps: {
          children: 'child',
          label: 'depart_name'
        },
        tempOperateType: "new",// 操作类型 new新增 edit编辑
        orgDialogVisible: false,
        orgForm: {
          depart_name: ""
        },
        orgRules: {
          depart_name: [{required: true, message: '请输入部门名称', trigger: 'blur'}]
        }
      }
    },
    mounted() {
      // this.getOrgTreeData()
    },
    methods: {
      /**
       * 查询树形数据 并赋予初始值
       * @return {[type]} [description]
       */
      getOrgTreeData() {
        
        let config = {
          method: "get",
          params: {},
          url: `${this.$common.basePath}/admin/admin/showDepartment`
        }
        this.loading = true
        this.$axios(config).then(response => {
          this.orgTreeData = response.data
          this.loading = false
        }).catch(error => {
          this.loading = false
          this.$message.error(error.msg)
        })
      },
      /**
       * 点击新增/编辑的按钮根据点击的不同 进入不同的操作逻辑
       * @param  {[type]} type 操作类型
       * @param  {[type]} data 当前操作的数据
       * @return {[type]}      [description]
       */
      showNodeDialog(type, data) {
        this.tempOperateType = type
        this.orgForm = {
          depart_name: "",
        }
        if(type == "edit") {//编辑节点, 将已有数据写入
          this.orgForm = this.$common.deepCopy(data)
          delete this.orgForm.child
          
        } else {
          if(data) {//新增模式下传入data, 为添加子节点 添加pid字段
            this.orgForm.pid = data.department_id
          } else { //添加顶级节点

          }
        }
        this.$nextTick(_ => {
          this.$refs.orgForm.clearValidate()
        })
        this.orgDialogVisible = true
      },
      /**
       * 删除组织
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */
      deleteOrg(data) {
        this.$confirm("删除后需要再次添加", "确认删除?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(_ => {
          let config = {
            method: "get",
            params: {
              department_id: data.department_id
            },
            url:   `${this.$common.basePath}/admin/admin/deleteDepartment`
          }
          this.$axios(config).then(response => {
            this.$message.success(response.msg)
            this.getOrgTreeData()
            this.orgDialogVisible = false
          }).catch(error => {
            this.$message.error(error.msg)
          })
        }).catch(error => {})
      },
      /**
       * 提交表单
       * @param  {[type]} formName 表单名称
       * @return {[type]}          [description]
       */
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if(valid) {
            let config = {
              method: "post",
              data:   this[formName],
              url:    ""
            }
            if(this.tempOperateType == "new") {
              config.url = `${this.$common.basePath}/admin/admin/addDepartment`
            } else {
              config.url = `${this.$common.basePath}/admin/admin/editDepartment`
            }
            this.$axios(config).then(response => {
              this.$message.success(response.msg)
              this.getOrgTreeData()
              this.orgDialogVisible = false
            }).catch(error => {
              this.$message.error(error.msg)
            })
          }
        })
      }
    }
  }
</script>