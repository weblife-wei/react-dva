const context = require.context('./', false, /\.js$/);//返回存储文件名的上下文对象
//遍历上下文对象，返回上文件名组成的数组
console.dir(context.keys().map(key=>context(key)))
export default context    
.keys()
.filter(item => item !== './index.js')     //除了遍历models中的index.js
.map(key => context(key));