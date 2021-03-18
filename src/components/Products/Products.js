import {SectionProduct} from "../SectionProduct";
import {Button} from "../Button/Button";

export function Products(props) {
    return <div>
        <h1>Products</h1>
        <SectionProduct title={props.data.title} img={props.data.img} link={props.data.link}/>
        <SectionProduct title={props.data2.title} img={props.data2.img} link={props.data2.link}/>
        <SectionProduct title={props.data3.title} img={props.data3.img} link={props.data3.link}/>
        <SectionProduct title={props.data4.title} img={props.data4.img} link={props.data4.link}/>
        <Button title={'Кнопка в Products'}/>
    </div>
}