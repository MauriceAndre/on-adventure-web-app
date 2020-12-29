import React from 'react';
import style from './Card.module.css';
import { join } from './../../../utils/arrayUtils';
import cover from './cover.png';
import { Badge } from 'react-bootstrap';

function Card({
    header = "starting soon",
    title,
    bgColor = "#44435e"
}) {
    return (        
        <div className={style["card"]}>
            <div className={join(style["header"])}>{header}</div>
            <div className={style["body"]} style={{ backgroundColor: bgColor }}>
                <div className={style["title"]}>{title}</div>
                <div className={style["date"]}>01.08 - 10.08</div>
                <Badge variant="secondary" className={style["seats"]}>4 / 5</Badge>
            </div>
            <div className={style["footer"]} style={{ backgroundColor: bgColor }}>
                <img src={cover} className={style["cover"]} />
            </div>
        </div>
    )
}

export default Card;