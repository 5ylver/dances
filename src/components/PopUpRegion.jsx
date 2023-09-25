function PopUpRegion({ popupPosRegion }) {
  return (
    <>
      {popupPosRegion.map((reg, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-r from-red-300 via-white to-red-300 text-black z-[100] w-auto rounded-md p-2"
          style={{ top: reg.y + 10, left: reg.x }}
        >
          {reg.name}
        </div>
      ))}
    </>
  );
}

export default PopUpRegion;
