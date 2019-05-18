import selectExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toEqual(0);
});

test('should successfully add up a single expense', () => {
    const res = selectExpensesTotal([expenses[2]]);
    expect(res).toBe(expenses[2].amount);
});

test('should correctly add up expenses', () => {
    const res = selectExpensesTotal(expenses);
    const total =  expenses.map((expense) => expense.amount).reduce((sum, value) => sum + value, 0);
    expect(res).toBe(total);
});