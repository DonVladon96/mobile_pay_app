import MTS from "../../../Image/public/mts.png";
import MegafonImg from "../../../Image/public/megafon.png";
import Beeline from "../../../Image/public/beeline.png";
import Tele2 from "../../../Image/public/tele2.png";
import Yota from "../../../Image/public/yota.png";
import Tinkoff from "../../../Image/public/tinkoff.png";
import Sber from "../../../Image/public/sberbank.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Item {
    id: number; 
    title: string; 
    desc: string;
    image: string | StaticImport;
  }
  
  interface ItemsDictionary {
    [key: string]: Item[]
  }
  
  export const items: ItemsDictionary = {
    MTS: [
      {
        id: 1,
        title: 'MTS',
        desc: 'На шаг впереди',
        image: MTS,
      }
    ],
    Megafon: [
        {
        id: 2,
        title: 'Megafon',
        desc: 'Будущее зависит от тебя!',
        image: MegafonImg,
        }
    ],
    Beeline: [
        {
        id: 3,
        title: 'Beeline',
        desc: 'Живи на яркой стороне!',
        image: Beeline,
        }
    ],
    Tele2: [
        {
        id: 4,
        title: 'Tele2',
        desc: 'Всегда дешевле' ,
        image: Tele2,
        }
    ],
    Yota: [
        {
        id: 5,
        title: 'Yota',
        desc: 'Ведь можем, когда захотим',
        image: Yota,
        }
    ],
    Tinkoff: [
        {
        id: 6,
        title: 'Tinkoff',
        desc: 'Он такой один',
        image: Tinkoff,
        }
    ],
    Sber: [
        {
        id: 7,
        title: 'Sber',
        desc: 'Всегда рядом',
        image: Sber,
        }
    ],
  }