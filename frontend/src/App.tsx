import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import { CopyIcon } from "lucide-react";
import CodeArea from "@/components/CodeArea";

export default function Component() {
  const [wecomWebhook, setWecomWebhook] = useState("");
  const [choice, setChoice] = useState("option1");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-[768px] space-y-8 p-8">
        <h1 className="text-3xl font-bold text-center">Gitlab Wecom Webhook</h1>

        <Textarea
          placeholder="https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=...."
          value={wecomWebhook}
          onChange={(e) => setWecomWebhook(e.target.value)}
          className="resize-none"
        />

        <RadioGroup
          value={choice}
          onValueChange={setChoice}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">文字风格</Label>
          </div>
          <img
            src="https://placeholder.pics/svg/100"
            alt="Preview of Option 1"
            className="rounded-md"
          />

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">卡片风格</Label>
          </div>
          <img
            src="https://placeholder.pics/svg/100"
            alt="Preview of Option 2"
            className="rounded-md"
          />
        </RadioGroup>
        <CodeArea url={wecomWebhook} />
      </div>
    </div>
  );
}
