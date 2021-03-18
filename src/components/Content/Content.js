import img2 from "../../assets/boat.png";
import img1 from "../../assets/moto.png";
import img3 from "../../assets/rmvector.png";
import img4 from "../../assets/Maverick.png";
import {Products} from "../Products/Products";

export function Content() {

    const data = {
        title: 'Катера',
        img: img2,
        link: '/1'
    }
    const data2 = {
        title: 'Квадроциклы',
        img: img1,
        link: '/2'
    }
    const data3 = {
        title: 'Снегоходы',
        img: img3,
        link: '/3'
    }
    const data4 = {
        title: 'Вездеходы',
        img: img4,
        link: '/4'
    }
    return <div>
        <h1>Content</h1>
        <Products data={data} data2={data2} data3={data3} data4={data4}/>
    </div>
}