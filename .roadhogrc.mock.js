
export default {
    'GET /api/users': { users: [1,2] },    // 支持值为 Object 和 Array
    '/api/users/1': { id: 1 },     // GET POST 可省略
    'POST /api/users/create': (req, res) => { res.end('OK'); },  // 支持自定义函数，API 参考 express@4
};
