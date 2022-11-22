import "./UI/ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  function dateConvetToLocalString(type) {
    return date.toLocaleString("en-US", type);
  }
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">
          {dateConvetToLocalString({ month: "long" })}
        </div>
        <div className="expense-date__day">
          {dateConvetToLocalString({ day: "numeric" })}
        </div>
        <div className="expense-date__year">
          {dateConvetToLocalString({ year: "numeric" })}
        </div>
      </div>
    </div>
  );
};
export default ExpenseDate;
