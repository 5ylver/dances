import { useState } from "react";

import { Dances, PeruMap, PopUp, PopUpRegion } from "./components";

function App() {
  const [popupPosition, setPopupPosition] = useState();
  const [popupPosRegion, SetpopupPosRegion] = useState([]);

  // useEffect(() => {
  //   fetch("text.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((e) => console.log("qq", e));
  // }, []);

  return (
    <div className="h-screen bg-slate-900 flex pl-7">
      <PeruMap setPopupPosition={setPopupPosition} />
      <PopUp popupPosition={popupPosition} />

      <Dances SetpopupPosRegion={SetpopupPosRegion} />
      <PopUpRegion popupPosRegion={popupPosRegion} />
    </div>
  );
}

export default App;
