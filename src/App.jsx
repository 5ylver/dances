import { useState } from "react";

import { Dances, PeruMap, PopUp, PopUpRegion } from "./components";

function App() {
  const [popupPosition, setPopupPosition] = useState();
  const [popupPosRegion, SetpopupPosRegion] = useState([]);

  return (
    <div className="h-screen bg-slate-900 flex pl-7">
      <PopUp popupPosition={popupPosition} />
      <PeruMap setPopupPosition={setPopupPosition} />

      <PopUpRegion popupPosRegion={popupPosRegion} />
      <Dances SetpopupPosRegion={SetpopupPosRegion} />
    </div>
  );
}

export default App;
