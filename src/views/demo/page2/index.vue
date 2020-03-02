<template>
  <d2-container>
    <el-form :model="configform" label-width="80px" style="margin: auto; margin-top:50px">
      <el-form-item label="Ip" :label-width="formLabelWidth">
        <el-input v-model="configform.IPADDR" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="Gateway" :label-width="formLabelWidth">
        <el-input v-model="configform.GATEWAY" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="danger" @click="onCancle">重置</el-button>
      </el-form-item>      
    </el-form>
  </d2-container>
</template>

<script>
export default {
  name: 'page2',
  data() {
    return {
      formLabelWidth: "120px",
      configform: {
        IPADDR: "",
        GATEWAY: ""
      }      
    }
  },
  mounted() {
    // this.getConf()
  },
  methods: {
    onSubmit() {
      this.$axios.post("/ipconfig",{...this.configform})
        .then(res=> {
          console.log('********************')
        })
        .catch(error =>{
          console.log(error);
        })
    },
    onCancle() {
      this.configform.IPADDR = '',
      this.configform.GATEWAY = ''
    },
    getConf(){
      this.$axios.get("/getipconf")
      .then(res=> {
        console.log('******ipipip*********')
        console.log(res)
        this.configform.IPADDR = res.ifcfg_addr
        this.configform.GATEWAY = res.ifcfg_gateway
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }
}
</script>
