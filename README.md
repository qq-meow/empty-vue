# vue-cordova模版项目

## 项目初始化
```
npm install
```

### 运行调试
```
npm run serve
```

### Lint文件修复
```
npm run lint
```

### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
### Cordoava插件安装
```
cd src-cordova
// 安装Splashscreen插件方式1
cordova plugin add cordova-plugin-splashscreen
// 安装Splashscreen插件方式1
cordova plugin add https://github.com/apache/cordova-plugin-splashscreen.git
// 安装CDVGetToken插件（注：模版项目已经包括了CDVGetToken插件）
cordova plugin add /path/to/CDVGetToken

```
### Cordova插件使用
插件描述文件```plugin.xml```中```<clobbers target="***" />```部分```target```值即为相关插件调用的地址，相关原生能力会全局挂载到```window```下。

#### CDViamPlugin
CDViamPlugin的EndPoint为```cordova.plugins.CDViamPlugin```，```VUE```组件中调用方式为```window.cordova.plugins.CDViamPlugin.函数名```，以下为调用测试方法示例
```
    window.cordova.plugins.CDViamPlugin.testApi('Hello', function (suc) {
        alert('testApi'+suc);
    },
        function (err) {
            alert("testapi"+err);
        }
    );
```
#### CDVGetToken

##### SSO重新登录
```
 window.CDVGetToken.ssoLogin(function (suc) {
     alert('CDVGetToken.ssoLogin调用成功: ' + suc);
     }
    ,
     function (err) {
         alert("CDVGetToken.ssoLogin: " + err);
     }
 )
```

##### 获取SSO Token
```
 window.CDVGetToken.getSsoToken(function (suc) {
     alert('CDVGetToken.getSsoToken调用成功: ' + suc);
     }
    ,
     function (err) {
         alert("CDVGetToken.getSsoToken调用失败: " + err);
     }
 )
```
##### 更新SSO Token
```
 window.CDVGetToken.setSsoToken('新Token字符串',function (suc) {
     alert('CDVGetToken.setSsoToken调用成功: ' + suc);
     }
    ,
     function (err) {
         alert("CDVGetToken.setSsoToken调用失败: " + err);
     }
 )
```
##### 获取Access Token
```
 window.CDVGetToken.getSsoToken(function (suc) {
     alert('CDVGetToken.getAccessToken调用成功: ' + suc);
     }
    ,
     function (err) {
         alert("CDVGetToken.getAccessToken调用失败: " + err);
     }
 )
```
##### 更新Access Token
```
 window.CDVGetToken.setAccessToken('新Token字符串',function (suc) {
     alert('CDVGetToken.setAccessToken调用成功: ' + suc);
     }
    ,
     function (err) {
         alert("CDVGetToken.setAccessToken调用失败: " + err);
     }
 )
```


### 打包

```
cd ../
yarn run cordova-build

```