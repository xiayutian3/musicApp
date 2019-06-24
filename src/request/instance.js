import axios from 'axios'


// 根据环境进行地址判断

// if (process.env.NODE_ENV == 'development') {    
//   axios.defaults.baseURL = process.env.API_ROOT;} 
// else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = process.env.API_ROOT;
// } 
// else if (process.env.NODE_ENV == 'production') {    
//   axios.defaults.baseURL = process.env.API_ROOT;
// }

var instance = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 1000*2,
  headers: {'X-Custom-Header': 'foobar'}
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;