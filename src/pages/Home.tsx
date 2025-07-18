import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import ControlButtons from "../components/ControlButtons";
import RightPane from "../components/RightPane";

export default function Home() {
  const [selectedPane, setSelectedPane] = useState<string | null>(null);

  return (
    <>
      <LeftPanel />
      <ControlButtons onSelect={setSelectedPane} />
      <RightPane selected={selectedPane} onClose={() => setSelectedPane(null)} />
    </>
  );
}
