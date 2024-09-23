import { useEffect, useState } from "react";

type TCodeArea = {
  url: string;
};

export default function CodeArea({ url }: TCodeArea) {
  const [gitlabWebhook, setGitlabWebhook] = useState("");

  const urlPrefix = () => {
    const host = window.location.host;
    const protocol = window.location.protocol; // 'http:' or 'https:'
    return protocol + "//" + host;
  };

  function extractUUID(url: string) {
    const regex =
      /^https:\/\/qyapi\.weixin\.qq\.com\/cgi-bin\/webhook\/send\?key=([0-9a-fA-F-]{36})$/;

    const match = url.match(regex);
    if (match) {
      return match[1]; // This is the extracted UUID
    }
    return null; // Return null if the format doesn't match
  }

  useEffect(() => {
    const uuid = extractUUID(url);
    if (uuid) {
      const gitlabWebhook = `${urlPrefix()}/webhook/${uuid}`;
      setGitlabWebhook(gitlabWebhook);
    } else {
      setGitlabWebhook("");
    }
  }, [url]);

  return (
    <>
      {/* <p className="text-sm py-0 mb-4">粘贴下面的地址到 Gitlab Webhook</p> */}
      <div className="mb-4 mt-2 max-h-[650px]  rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
        <code
          className={`${
            gitlabWebhook !== "" ? "text-white" : "text-gray-400"
          } rounded bg-muted py-2 font-mono text-xs px-4`}
        >
          {gitlabWebhook !== ""
            ? gitlabWebhook
            : "请输入合理的企业微信webhook地址"}
        </code>
      </div>
    </>
  );
}
