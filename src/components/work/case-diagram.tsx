import type { DiagramCopy } from "@/content";
import { AiDiagram } from "./diagrams/ai-diagram";
import { BidDiagram } from "./diagrams/bid-diagram";
import { PlatformDiagram } from "./diagrams/platform-diagram";

export function CaseDiagram({ copy }: { copy: DiagramCopy }) {
  switch (copy.kind) {
    case "bid":
      return <BidDiagram copy={copy} />;
    case "ai":
      return <AiDiagram copy={copy} />;
    case "platform":
      return <PlatformDiagram copy={copy} />;
  }
}
