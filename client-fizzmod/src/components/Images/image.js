
import Banner_1 from '../../assets/png/Banner_1.png'
import Banner_2 from '../../assets/png/Banner_2.png'
import Banner_3 from '../../assets/png/Banner_3.png'
import Atun from '../../assets/jpg/atun.jpg'
import Cebolla from '../../assets/jpg/cebolla.jpg'
import Galletitas from '../../assets/jpg/galletitas.jpg'
import Manteca from '../../assets/jpg/manteca.jpg'

export default function images(Banner){
    switch(Banner){
        case "Banner_1.png":{
            return Banner_1;
        }
        case "Banner_2.png":{
            return Banner_2;
        }
        case "Banner_3.png":{
            return Banner_3;
        }
        case "atun.jpg":{
            return Atun;
        }
        case "cebolla.jpg":{
            return Cebolla;
        }
        case "galletitas.jpg":{
            return Galletitas;
        }
        case "manteca.jpg":{
            return Manteca;
        }
        default:{
            return "";
        }
    }
}