import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import ControlButtons from "../components/ControlButtons";
import ContactMe from "../components/ContactMe";
import RightPane from "../components/RightPane";
import { Box } from "@mui/material";

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
