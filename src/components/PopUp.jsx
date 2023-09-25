import { useEffect, useState } from "react";

import { data } from "../data";

function PopUp({ popupPosition }) {
  const [region, setRegion] = useState();

  useEffect(() => {
    const getReg = data?.filter((e) => e.name == popupPosition?.name)[0];
    setRegion(getReg);
  }, [popupPosition?.name]);

  return (
    <>
      {popupPosition && (
        <div
          className="absolute bg-gradient-to-r from-red-300 via-white to-red-300 z-50 w-44 rounded-md p-2"
          style={{ top: popupPosition.y + 10, left: popupPosition.x + 10 }}
        >
          <div>{region?.name}</div>
          <div>
            <img src={region?.escudo} className="w-12" alt="" />
          </div>
          <div>{region?.población}</div>
        </div>
      )}
    </>
  );
}

export default PopUp;
