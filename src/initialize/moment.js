import moment from 'moment';

moment.updateLocale('de', {
    calendar : {
        sameDay : '[Today]',
        nextDay : '[Tomorrow]',
        nextWeek : '[Next] dddd',
        sameElse : function (date) {
            const days = this.diff(date, 'days');
            
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