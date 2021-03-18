import styles from './SectionProduct.module.css'
import {NavLink} from "react-router-dom";

export function SectionProduct(props) {
    return <div className={styles.SectionProduct}>
        <div>
            <h1>{props.title}</h1>
            <NavLink to={props.link}><span>Подробнее</span></NavLink>
        </div>
        <div>
            <img src={props.img} alt={''}/>
        </div>
    </div>
}