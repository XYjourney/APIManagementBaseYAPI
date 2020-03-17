const env = process.env;
module.exports = 
{
  "port": env.PORT,
  "adminAccount": env.ADMIN,
  "closeRegister": env.CLOSEREGISTER === "true" ? true : false,
  "db": {
    "servername": env.MongoDB_HOST,
    "DATABASE": env.MongoDB_NAME,
    "port": env.MongoDB_PORT,
    "user": env.MongoDB_USER,
    "pass": env.MongoDB_SEC,
    "authSource": env.MongoDB_NAME
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
        "clientId": env.SSO_CLIENTID,
        "authority": env.SSO_AUTHORITY,
        "redirectUri": env.SSO_REDIRECT
    },
   "cache": {
       "cacheLocation": "sessionStorage",
       "storeAuthStateInCookie": false,
       "forceRefresh": false
    }
  },
"type": "sso",
"successUrl": env.SSO_SUCCESS
}
}
  ]
}