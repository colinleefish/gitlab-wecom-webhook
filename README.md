## 一个极简的 Gitlab 企业微信群机器人的 Webhook 服务

<a href="#下载和部署">下载和部署</a>

### 介绍

这个项目的作用是把 Gitlab Repo 的 PUSH 事件通过企业微信群机器人发送出来。

目前支持 PUSH，另外可以选择是否要带 COMMIT 信息。

### 截图

<img src="https://github.com/user-attachments/assets/d804b017-63c8-468b-9497-2c9fb8d788a0" style="width: 768px" />

### 下载和部署

```shell
docker pull ghcr.io/colinleefish/gitlab-wecom-webhook:latest
```

```docker-compose.yml
services:
  app:
    image: ghcr.io/colinleefish/gitlab-wecom-webhook:latest
    ports:
      - "4000:4000"
```

服务暴露在 :4000 端口，需要的话可以自己拿 Nginx 转一下。


