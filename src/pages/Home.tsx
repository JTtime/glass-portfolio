import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import RightPane from "../components/RightPane";


export default function Home() {
    const [selectedPane, setSelectedPane] = useState<string | null>(null);

    return (
        <>
            <LeftPanel onSelect={setSelectedPane} />           
            <RightPane selected={selectedPane} onClose={() => setSelectedPane(null)} />            
        </>
    );
}
