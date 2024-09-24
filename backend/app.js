const express = require('express');
const axios = require("axios");

const BASE_URL = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=`;

const app = express();
app.use(express.json());
app.use(express.static("dist/"));
app.post("/webhook/:wecomUuid", async (req, res) => {
  const data = req.body;

  const headers = req.headers;
  const wecomUuid = req.params.wecomUuid;

  let content = "";

  // PUSH
  if (data.event_name === "push") {
    content = "### Gitlab PUSH 🚀";
    content += "\n\n";
    content += "============"
    content += "\n\n";
    content += "**【实例】**：" + headers["x-gitlab-instance"];
    content += "\n";
    content += "**【用户】**：" + data.user_username;
    content += "\n";
    content += "**【项目】**：" + data.project?.path_with_namespace;
    content += "\n";
    content += "**【分支】**：" + data.ref;

    if (req.query?.verbose === "true")  {
      content += "\n";
      content += "--------\n\n"
      content += "**COMMITS：**\n\n";
      content += "```\n"; 
      data.commits.forEach(element => {
        content += `· ${element.id.substring(0, 7)}, ${element.author.name}: `;
        content += `"${element.message.replace(/\n+$/, '')}"\n`;
      });
      content += "```\n";
    }
  }

  if (content !== "") {
    try {
      const wecomWebhook = `${BASE_URL}${wecomUuid}`;
      console.log(wecomWebhook);
      console.log(content)
      await axios.post(wecomWebhook, {
        msgtype: "markdown",
        markdown: {
          content: content,
        },
      });
      res.send("ok");
    } catch (e) {
      console.log(e);
      res.status(500).send("server error");
    }
  } else {
    res.status(400).send("bad request");
  }
});

module.exports = app;
