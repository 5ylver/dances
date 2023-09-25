import {
  allpaLlankay,
  argentino,
  avelinos,
  candelaria,
  caporal,
  carnaval,
  carnavaldearapa,
  chonguinada,
  contradanza,
  corcovados,
  cuatro,
  cusqueñita,
  danzadetijeras,
  diablada,
  diablada2,
  elegante,
  festejo,
  huaconada,
  huancadanza,
  huatrilla,
  huaylas,
  jaylli,
  marinera,
  morenada,
  negritodehco,
  negritos,
  qhapaqchuncho,
  saqra,
  seis,
  shipibo,
  sicaina,
  siete,
  tondero,
  uno,
  viejo,
  wititi,
} from "../assets";

function Dances({ SetpopupPosRegion }) {
  const handleDanceImg = (target) => {
    const container = document.getElementById("imgContainer");
    const imgs = container.querySelectorAll("img");

    imgs.forEach((img) => {
      img.setAttribute(
        "style",
        "filter: grayscale(1) blur(3px); transition: all 1s ease-in-out;"
      );
    });

    target.setAttribute(
      "style",
      "contrast: 1.1; transition: all .5s ease-in-out; z-index: 99"
    );
    target.classList.add("dance-img");
  };

  const handleRemoveDance = () => {
    const container = document.getElementById("imgContainer");
    const imgs = container.querySelectorAll("img");

    imgs.forEach((img) => {
      img.setAttribute("style", "transition: all .3s ease-in-out");
      img.classList.remove("dance-img");
    });
  };

  const paintRegion = (regions) => {
    const posReg = [];
    for (let i = 0; i < regions.length; i++) {
      const region = document.getElementsByName(regions[i])[0];

      const pos = region.getBoundingClientRect();
      posReg.push({
        name: regions[i].toString(),
        x: pos.left + pos.width / 4,
        y: pos.top + pos.height / 4,
      });

      region.setAttribute(
        "style",
        "fill:rgb(96, 165, 250); transition: all .3s ease-in-out"
      );
    }
    SetpopupPosRegion(posReg);
  };

  const notPaintRegion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      document
        .getElementsByName(arr[i])[0]
        .setAttribute("style", "transition: all .3s ease-in-out");
    }
    SetpopupPosRegion([]);
  };

  return (
    <div className="flex flex-1 pl-4 pb-7 pt-2" id="imgContainer">
      <div className="w-full">
        <h1 className="text-center text-xl font-bold text-white">
          Peruvian Dances
        </h1>

        <div className="h-full relative" id="fondo">
          {/* row 1 */}
          <div>
            <img
              src={negritodehco}
              id="negritodehco"
              className="h-60 absolute -left-1 z-[5]"
              draggable="false"
              alt="negritodehco"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Huánuco"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Huánuco"]);
              }}
            />

            <img
              src={marinera}
              className="h-60 absolute left-[5rem] z-[4]"
              id="marinera"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lambayeque", "La Libertad", "Piura"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lambayeque", "La Libertad", "Piura"]);
              }}
              alt=""
            />

            <img
              src={chonguinada}
              className="h-56 absolute left-56 z-[3]"
              id="chonguinada"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Pasco", "Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Pasco", "Junín"]);
              }}
              alt=""
            />

            <img
              src={diablada}
              className="h-56 absolute left-[22.5rem] z-[2]"
              id="diablada"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Puno"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Puno"]);
              }}
              alt=""
            />

            <img
              src={huaylas}
              className="h-52 absolute top-3 left-[33rem] z-[1]"
              id="huaylas"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={allpaLlankay}
              className="h-[12.3rem] absolute top-4 left-[40rem] z-[1]"
              id="allpaLlankay"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Cuzco"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Cuzco"]);
              }}
              alt=""
            />

            <img
              src={shipibo}
              className="h-52 absolute top-2 right-[6rem] z-[3]"
              id="shipibo"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Ucayali"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Ucayali"]);
              }}
              alt=""
            />

            <img
              src={wititi}
              className="h-52 absolute right-1 z-[4]"
              id="wititi"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Arequipa"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Arequipa"]);
              }}
              alt=""
            />
          </div>

          {/* row 2 */}
          <div>
            <img
              src={huaconada}
              className="h-[12.5rem] absolute left-0 top-52 z-[5]"
              id="huaconada"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={caporal}
              className="h-52 absolute left-28 top-52 z-[4]"
              id="caporal"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Puno"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Puno"]);
              }}
              alt=""
            />

            <img
              src={festejo}
              className="h-52 absolute left-56 top-52 z-[4]"
              id="festejo"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lima", "Ica"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lima", "Ica"]);
              }}
              alt=""
            />

            <img
              src={argentino}
              className="h-56 absolute left-[21.4rem] top-48 z-[3]"
              id="argentino"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={carnaval}
              className="h-56 absolute left-[28rem] top-[12.5rem] z-[4]"
              id="carnaval"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Tacna", "Arequipa"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Tacna", "Arequipa"]);
              }}
              alt=""
            />

            <img
              src={negritos}
              className="h-60 absolute left-[40rem] top-[12rem] z-[3]"
              id="negritos"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lima"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lima"]);
              }}
              alt=""
            />

            <img
              src={sicaina}
              className="h-[14rem] absolute right-[15rem] top-[12.5rem] z-[2]"
              id="sicaina"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={diablada2}
              className="h-[15rem] absolute right-[7.5rem] top-[12rem] z-[2]"
              id="diablada2"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Puno"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Puno"]);
              }}
              alt=""
            />

            <img
              src={uno}
              className="h-[12rem] absolute right-1 top-[14rem] z-[2]"
              id="uno"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Apurímac"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion([""]);
              }}
              alt=""
            />
          </div>

          {/* row 3 */}
          <div>
            <img
              src={danzadetijeras}
              className="h-60 absolute left-0 bottom-[13.5rem] z-[10]"
              id="danzadetijeras"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Apurímac", "Huancavelica", "Ayacucho"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Apurímac", "Huancavelica", "Ayacucho"]);
              }}
              alt=""
            />

            <img
              src={viejo}
              className="h-56 absolute left-40 bottom-[12.5rem] z-[9]"
              id="viejo"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={tondero}
              className="h-52 absolute left-64 bottom-[14rem] z-[8]"
              id="tondero"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lambayeque", "Piura"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lambayeque", "Piura"]);
              }}
              alt=""
            />

            <img
              src={cuatro}
              className="h-56 absolute left-[25rem] bottom-[12.5rem] z-[7]"
              id="tondero"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion([""]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion([""]);
              }}
              alt=""
            />

            <img
              src={huatrilla}
              className="h-60 absolute left-[31rem] bottom-[12.5rem] z-[6]"
              id="huatrilla"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={morenada}
              className="h-64 absolute left-[39rem] bottom-[12rem] z-[5]"
              id="morenada"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Tacna"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Tacna"]);
              }}
              alt=""
            />

            <img
              src={contradanza}
              className="h-64 absolute right-44 bottom-[12rem] z-[4]"
              id="contradanza"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["La Libertad"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["La Libertad"]);
              }}
              alt=""
            />

            <img
              src={carnavaldearapa}
              className="h-64 absolute right-2 bottom-[12rem] z-[3]"
              id="contradanza"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Puno"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Puno"]);
              }}
              alt=""
            />
          </div>

          {/* row 4 */}
          <div>
            <img
              src={corcovados}
              className="h-60 absolute left-0 bottom-7 z-[10]"
              id="corcovados"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lima"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lima"]);
              }}
              alt=""
            />

            <img
              src={cusqueñita}
              className="h-60 absolute left-20 bottom-7 z-[10]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lima"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lima"]);
              }}
              alt=""
            />

            <img
              src={siete}
              className="h-60 absolute left-40 bottom-5 z-[10]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lima"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lima"]);
              }}
              alt=""
            />

            <img
              src={qhapaqchuncho}
              className="h-60 absolute left-60 bottom-5 z-[11]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Cuzco"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Cuzco"]);
              }}
              alt=""
            />

            <img
              src={avelinos}
              className="h-56 absolute left-[22.5rem] bottom-5 z-[10]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={candelaria}
              className="h-56 absolute left-[30rem] bottom-5 z-[9]"
              id=""
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion([""]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion([""]);
              }}
              alt=""
            />

            <img
              src={huancadanza}
              className="h-56 absolute left-[34rem] bottom-5 z-[8]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Lima"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Lima"]);
              }}
              alt=""
            />

            <img
              src={saqra}
              className="h-56 absolute left-[39rem] bottom-5 z-[7]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Cuzco"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Cuzco"]);
              }}
              alt=""
            />

            <img
              src={seis}
              className="h-52 absolute left-[46rem] bottom-5 z-[6]"
              id="cusqueñita"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Cuzco"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Cuzco"]);
              }}
              alt=""
            />

            <img
              src={elegante}
              className="h-56 absolute left-[51rem] bottom-5 z-[7]"
              id="elegante"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />

            <img
              src={jaylli}
              className="h-56 absolute right-1 bottom-5 z-[7]"
              id="jaylli"
              onMouseEnter={({ target }) => {
                handleDanceImg(target);
                paintRegion(["Junín"]);
              }}
              onMouseOut={() => {
                handleRemoveDance();
                notPaintRegion(["Junín"]);
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dances;
