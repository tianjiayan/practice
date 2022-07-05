import { ElLoading } from 'element-plus'
//loading加载处理
const loading = {
  loadingInstance: null,
  // 开启loading加载
  open() {
    if (this.loadingInstance == null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  //关闭loading加载
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default loading
