"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/ui/icons";

interface CopyEmailProps {
  email: string;
  label: string;
  copied: string;
  failed: string;
}

type Status = "idle" | "copied" | "failed";

export function CopyEmail({ email, label, copied, failed }: CopyEmailProps) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <button type="button" onClick={copy} className="btn btn-night-line">
        {status === "copied" ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        {label}
      </button>
      <span role="status" className="text-sm text-fog">
        {status === "copied" ? copied : status === "failed" ? failed : ""}
      </span>
    </span>
  );
}
