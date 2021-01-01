import moment from 'moment';

function past(days, date) {
    days = days * -1;

    if (days > 7 && days < 30) {
        return `[${days} day${days > 1 ? "s": ""} ago]`;
    } else if (days > 30 && days < 365) {
        const month = this.diff(date, 'month') * -1;
        return `[${month} month${month > 1 ? "s" : ""} ago]`;
    } else if (days > 365) {
        const years = this.diff(date, 'year') * -1;
        return `[${years} year${years > 1 ? "s" : ""} ago]`;
    }
}

function future(days, date) {
    if (days > 7 && days < 30) {
        return `[in ${days} day${days > 1 ? "s": ""}]`;
    } else if (days > 30 && days < 365) {
        const month = this.diff(date, 'month');
        return `[in ${month} month${month > 1 ? "s" : ""}]`;
    } else if (days > 365) {
        const years = this.diff(date, 'year');
        return `[in ${years} year${years > 1 ? "s" : ""}]`;
    }
}

moment.updateLocale('de', {
    calendar : {
        lastWeek: '[Last] dddd',
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: '[Next] dddd',
        sameElse: function (date) {
            const days = this.diff(date, 'days');
            
            if (days > 0) {
                return future.apply(this, [days, date]);
            } else if (days < 0) {
                return past.apply(this, [days, date])
            }
        },
    }
});