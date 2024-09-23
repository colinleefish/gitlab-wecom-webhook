import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import CodeArea from "@/components/CodeArea";

export default function App() {
  const [wecomWebhook, setWecomWebhook] = useState("");

  const wecomWebhookPlaceholder =
    "企业微信群机器人的Webhook地址，如:\nhttps://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=....";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-[768px] p-8">
        <h1 className="text-3xl font-bold text-center pb-8">Gitlab WeCom Webhook</h1>

        <Textarea
          placeholder={wecomWebhookPlaceholder}
          value={wecomWebhook}
          onChange={(e) => setWecomWebhook(e.target.value)}
          className="resize-none pb-8"
        />

        <CodeArea url={wecomWebhook} />

        <p className="text-xs text-gray-500">目前支持：push，commit</p>
      </div>
    </div>
  );
}
