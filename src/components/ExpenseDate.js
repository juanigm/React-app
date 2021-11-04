import './ExpenseItem.css';

function ExpenseDate(props) {
    const day = props.date.toLocaleString('es-US', {day: '2-digit'});
    const month = props.date.toLocaleString('es-US', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{day}</div>
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
}

export default ExpenseDate;