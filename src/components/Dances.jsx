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

function Dances() {
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
            />

            <img
              src={marinera}
              className="h-60 absolute left-[5rem] z-[4]"
              id="marinera"
              alt=""
            />

            <img
              src={chonguinada}
              className="h-56 absolute left-56 z-[3]"
              id="chonguinada"
              alt=""
            />

            <img
              src={diablada}
              className="h-56 absolute left-[22.5rem] z-[2]"
              id="diablada"
              alt=""
            />

            <img
              src={huaylas}
              className="h-52 absolute top-3 left-[33rem] z-[1]"
              id="huaylas"
              alt=""
            />

            <img
              src={allpaLlankay}
              className="h-[12.3rem] absolute top-4 left-[40rem] z-[1]"
              id="allpaLlankay"
              alt=""
            />

            <img
              src={shipibo}
              className="h-52 absolute top-2 right-[6rem] z-[3]"
              id="shipibo"
              alt=""
            />

            <img
              src={wititi}
              className="h-52 absolute right-1 z-[4]"
              id="wititi"
              alt=""
            />
          </div>

          {/* row 2 */}
          <div>
            <img
              src={huaconada}
              className="h-[12.5rem] absolute left-0 top-52 z-[5]"
              id="huaconada"
              alt=""
            />

            <img
              src={caporal}
              className="h-52 absolute left-28 top-52 z-[4]"
              id="caporal"
              alt=""
            />

            <img
              src={festejo}
              className="h-52 absolute left-56 top-52 z-[4]"
              id="festejo"
              alt=""
            />

            <img
              src={argentino}
              className="h-56 absolute left-[21.4rem] top-48 z-[3]"
              id="argentino"
              alt=""
            />

            <img
              src={carnaval}
              className="h-56 absolute left-[28rem] top-[12.5rem] z-[4]"
              id="carnaval"
              alt=""
            />

            <img
              src={negritos}
              className="h-60 absolute left-[40rem] top-[12rem] z-[3]"
              id="negritos"
              alt=""
            />

            <img
              src={sicaina}
              className="h-[14rem] absolute right-[15rem] top-[12.5rem] z-[2]"
              id="sicaina"
              alt=""
            />

            <img
              src={diablada2}
              className="h-[15rem] absolute right-[7.5rem] top-[12rem] z-[2]"
              id="diablada2"
              alt=""
            />

            <img
              src={uno}
              className="h-[12rem] absolute right-1 top-[14rem] z-[2]"
              id="uno"
              alt=""
            />
          </div>

          {/* row 3 */}
          <div>
            <img
              src={danzadetijeras}
              className="h-60 absolute left-0 bottom-[13.5rem] z-[10]"
              id="danzadetijeras"
              alt=""
            />

            <img
              src={viejo}
              className="h-56 absolute left-40 bottom-[12.5rem] z-[9]"
              id="viejo"
              alt=""
            />

            <img
              src={tondero}
              className="h-52 absolute left-64 bottom-[14rem] z-[8]"
              id="tondero"
              alt=""
            />

            <img
              src={cuatro}
              className="h-56 absolute left-[25rem] bottom-[12.5rem] z-[7]"
              id="tondero"
              alt=""
            />

            <img
              src={huatrilla}
              className="h-60 absolute left-[31rem] bottom-[12.5rem] z-[6]"
              id="huatrilla"
              alt=""
            />

            <img
              src={morenada}
              className="h-64 absolute left-[39rem] bottom-[12rem] z-[5]"
              id="morenada"
              alt=""
            />

            <img
              src={contradanza}
              className="h-64 absolute right-44 bottom-[12rem] z-[4]"
              id="contradanza"
              alt=""
            />

            <img
              src={carnavaldearapa}
              className="h-64 absolute right-2 bottom-[12rem] z-[3]"
              id="contradanza"
              alt=""
            />
          </div>

          {/* row 4 */}
          <div>
            <img
              src={corcovados}
              className="h-60 absolute left-0 bottom-7 z-[10]"
              id="corcovados"
              alt=""
            />

            <img
              src={cusqueñita}
              className="h-60 absolute left-20 bottom-7 z-[10]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={siete}
              className="h-60 absolute left-40 bottom-5 z-[10]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={qhapaqchuncho}
              className="h-60 absolute left-60 bottom-5 z-[11]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={avelinos}
              className="h-56 absolute left-[22.5rem] bottom-5 z-[10]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={candelaria}
              className="h-56 absolute left-[30rem] bottom-5 z-[9]"
              id=""
              alt=""
            />

            <img
              src={huancadanza}
              className="h-56 absolute left-[34rem] bottom-5 z-[8]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={saqra}
              className="h-56 absolute left-[39rem] bottom-5 z-[7]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={seis}
              className="h-52 absolute left-[46rem] bottom-5 z-[6]"
              id="cusqueñita"
              alt=""
            />

            <img
              src={elegante}
              className="h-56 absolute left-[51rem] bottom-5 z-[7]"
              id="elegante"
              alt=""
            />

            <img
              src={jaylli}
              className="h-56 absolute right-1 bottom-5 z-[7]"
              id="jaylli"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dances;
