## 一个极简的 Gitlab 企业微信群机器人的 Webhook 服务

<a href="#下载和部署">下载和部署</a> | <a href="#用法">用法</a>

### 介绍

这个项目的作用是把 Gitlab Repo 的 PUSH 事件通过企业微信群机器人发送出来。

目前支持 PUSH，另外可以选择是否要带 COMMIT 信息。

### 截图

<img src="https://github.com/user-attachments/assets/d804b017-63c8-468b-9497-2c9fb8d788a0" style="width: 768px" />

### 下载和部署

docker-compose.yml
```docker-compose.yml
services:
  app:
    image: ghcr.io/colinleefish/gitlab-wecom-webhook:latest
    ports:
      - "4000:4000"
```

服务暴露在 :4000 端口，需要的话可以自己拿 Nginx 转一下。

### 用法

1. 去企业微信群里，生成一个群机器人，拿到群机器人的 Webhook 地址
2. 把机器人的 Webhook 粘贴到这个网站的白色文本框，然后就会生成另一个 Webhook 地址
3. 去 Gitlab 的某个具体的代码仓库，找到配置 Webhook 的地方，把网站上生成的 Webhook 粘贴进去
4. （可选）如果希望推送的消息里包含 commit 信息，可以在生成的 Webhoook 后面加上`?verbose=true`参数。

### 参数和效果

PUSH版（不带 COMMIT 信息）：直接使用生成的 Webhook 即可。

![gitlab-wecom-webhook-example](https://github.com/user-attachments/assets/2e0edcc8-aa60-4087-9db0-61a220bf3cf6)

PUSH版（带 COMMIT 信息）：在 Webhook 后面加上 GET 参数：`?verbose=true`

![gitlab-wecom-webhook-example-verbose](https://github.com/user-attachments/assets/db0e2a19-b96a-4903-a28a-f2f4499b15c8)
