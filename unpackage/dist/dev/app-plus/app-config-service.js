
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/main/main","pages/agency/agency","pages/answerresult/answerresult","pages/dati/dati","pages/paihang/paihang","pages/shezhi/shezhi","pages/shopdetail/shopdetail","pages/tiku/tiku","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/flzn/flzn","pages/shop/shop","pages/main/equityExplain","pages/scan/scan","pages/blockchain/blockchain","pages/main/commission","pages/user/integral","pages/user/reception"],"window":{"navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"tabBar":{"color":"#545454","selectedColor":"rgb(2,173,111)","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/tab/tarbar_home_Normal@2x.png","selectedIconPath":"static/tab/tarbar_home_Selected@2x.png"},{"pagePath":"pages/shop/shop","text":"商城","iconPath":"static/tab/tarbar_shop_Normal@2x.png","selectedIconPath":"./static/tab/tarbar_scan_Selected@2x.png"},{"pagePath":"pages/blockchain/blockchain","text":"区块链","iconPath":"static/tab/tarbar_Blockchain_normal@2x.png","selectedIconPath":"static/tab/tarbar_Blockchain_Selectedl@2x.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/tab/tarbar_my_Normal@2x.png","selectedIconPath":"static/tab/tarbar_my_Selected@2x.png"}],"midButton":{"width":"50px","height":"45px","text":"扫码","iconWidth":"25px","iconPath":"static/tab/tarbar_scan_normal@2x.png"}},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"GarbageClassificationAdmin","compilerVersion":"2.7.14","entryPagePath":"pages/main/main","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/main/main","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/agency/agency","meta":{},"window":{}},{"path":"/pages/answerresult/answerresult","meta":{},"window":{}},{"path":"/pages/dati/dati","meta":{},"window":{}},{"path":"/pages/paihang/paihang","meta":{},"window":{}},{"path":"/pages/shezhi/shezhi","meta":{},"window":{}},{"path":"/pages/shopdetail/shopdetail","meta":{},"window":{}},{"path":"/pages/tiku/tiku","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/flzn/flzn","meta":{},"window":{"navigationBarTitleText":"分类指南"}},{"path":"/pages/shop/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城","navigationStyle":"custom"}},{"path":"/pages/main/equityExplain","meta":{},"window":{}},{"path":"/pages/scan/scan","meta":{},"window":{"navigationBarTitleText":"扫码"}},{"path":"/pages/blockchain/blockchain","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/main/commission","meta":{},"window":{"navigationBarTitleText":"分类代办"}},{"path":"/pages/user/integral","meta":{},"window":{"navigationBarTitleText":"我的积分","navigationBarBackgroundColor":"#048C84"}},{"path":"/pages/user/reception","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
