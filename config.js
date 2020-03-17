const fs = require("fs");
const path = require("path");
console.log(process.env.YAPI_NODE_ENV)
const env = process.env.YAPI_NODE_ENV === "production" ? ".prod" : "";
console.log("env\n")
console.log(env);
const configFileName = `config${env}.js`
console.log(configFileName);
const configFilePath = path.resolve(__dirname,`./${configFileName}`)
console.log(configFilePath)
let configWithEnv =  null; 
if (fs.existsSync(configFilePath)) {
  configWithEnv = require(configFilePath);
}

const defaultConfig = {
  "port": "8080",
  "adminAccount": "admin@admin.com",
  "closeRegister":true,
  "db": {
    "servername": "127.0.0.1",
    "DATABASE": "yapi",
    "port": 27017
  },
  "mail": {
    "enable": true,
    "host": "smtp.163.com",
    "port": 465,
    "from": "***@163.com",
    "auth": {
      "user": "***@163.com",
      "pass": "*****"
    }
  },
  "plugins": [
	{
  "name": "msal-sso",
  "options": {
  "msalConfig":{
   "auth":{
        "clientId": "7c9e9f51-df4f-4987-9809-30525ae10162",
        "authority": "https://login.microsoftonline.com/common",
        "redirectUri": "https://apimanagementplatform.azurewebsites.net/"
    },
   "cache": {
       "cacheLocation": "sessionStorage",
       "storeAuthStateInCookie": false,
       "forceRefresh": false
    }
  },
"type": "sso",
"successUrl": "https://apimanagementplatform.azurewebsites.net/group"
}
}
  ]
}
console.log("configENV\n")
console.log(configWithEnv)
const config = {...defaultConfig, configWithEnv}
console.log("config\n")
console.log(config)
module.exports = config
