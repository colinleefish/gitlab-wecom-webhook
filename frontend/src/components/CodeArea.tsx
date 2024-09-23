import { useEffect, useState } from "react";

type TCodeArea = {
  url: string;
};

export default function CodeArea({ url }: TCodeArea) {
  const [gitlabWebhook, setGitlabWebhook] = useState("");

  useEffect(() => {
    const gitlabWebhook = `{"url": "${url}"}`;
    setGitlabWebhook(gitlabWebhook);
  }, [url]);

  //   const handleCopy = () => {
  //     navigator.clipboard.writeText(gitlabWebhook);
  //   };

  return (
    <>
      <div className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
        <code className="rounded bg-muted px-4 py-2 font-mono text-sm text-white text-wrap">
          {gitlabWebhook}
        </code>
      </div>
    </>
  );
}
