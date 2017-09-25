/**
 * entry 配置文件
 */
module.exports = [
  {
    path: '',
    name: 'index',
    template: 'src/pages/index.html'
  }, {
    path: 'goods/',
    name: 'detail',
    template: 'src/pages/goods/detail.html'
  }, {
    path: 'goods/',
    name: 'empty',
    template: 'src/pages/goods/empty.html'
  }, {
    path: 'order/',
    name: 'success',
    template: 'src/pages/order/success.html'
  }, {
    path: 'order/',
    name: 'detail',
    template: 'src/pages/order/detail.html'
  }, {
    path: 'order/',
    name: 'process',
    template: 'src/pages/order/process.html'
  }, {
    path: 'order/',
    name: 'list',
    template: 'src/pages/order/list.html'
  }, {
    path: 'pay/',
    name: 'cashier',
    template: 'src/pages/pay/cashier.html'
  }, {
    path: '',
    name: 'notFound',
    template: 'src/pages/notFound.html'
  }
];