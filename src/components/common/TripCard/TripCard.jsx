import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { join } from './../../../utils/arrayUtils';
import Card from './../Card';
import style from './TripCard.module.css';

const dateFormat = "MM.DD.YYYY";

function TripCard({
    title,
    startDate,
    endDate,
    labels,
    color,
    participants,
    seats,
    coverImg
}) {
    // TODO
    moment.updateLocale('de', {
        calendar : {
            sameDay : '[Today]',
            nextDay : '[Tomorrow]',
            nextWeek : '[Next] dddd',
            sameElse : function (date) {
                const days = this.diff(date, 'days');
                console.log(days);
                if (days > 7 && days < 30) {
                    return `[in ${days} day${days > 1 ? "s": ""}]`;
                } else if (days > 30 && days < 365) {
                    const month = this.diff(date, 'month');
                    return `[in ${month} month${month > 1 ? "s" : ""}]`;
                } else if (days > 365) {
                    const years = this.diff(date, 'year');
                    return `[in ${years} year${years > 1 ? "s" : ""}]`;
                }
            },
        }
    });

    const getHeaderVariant = () => {
        const days = moment().diff(startDate, 'days');
    
        if(days === 0) {
            return "danger"
        } else if(days > -7) {
            return "warning";
        } else {
            return "info"
        }
    }

    return (
        <Card variant={color}>
            <Card.Header variant={getHeaderVariant()}>
                {moment(startDate).calendar()}
            </Card.Header>
            <Card.Body>
                <div key="title" className={style["title"]}>{title}</div>
                    <div className={style["date"]}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    {" "}
                    {moment(startDate).format(dateFormat)} - {moment(endDate).format(dateFormat)}
                </div>
                <div key="seats" className={style["seats"]}>
                    <FontAwesomeIcon icon={faUserFriends} />
                    {" "}
                    {participants} / {seats}
                </div>
                <div key="labels" className={join(style["labels"], "mt-1")}>
                    {labels.map((label) => {
                        return <Badge key={label} variant="dark" className="mr-1">{label}</Badge>
                    })}
                </div>
            </Card.Body>
            <Card.Footer>
                <img alt="Trip cover" src={coverImg} className={style["cover"]} />
            </Card.Footer>
        </Card>
    )
}

TripCard.propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    labels: PropTypes.arrayOf(String),
    color: PropTypes.string,
    participants: PropTypes.number,
    seats: PropTypes.number,
    coverImg: PropTypes.string
}

export default TripCard;