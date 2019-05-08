import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amout',
    startdate: moment(0),
    endDate: moment(0).add(3, 'day')
};

export { filters, altFilters };