import ExpenseItem from "./ExpenseItem";
import "./UI/Expenses.css"
import Card from "./Card";

const Expenses = ({expenseData}) =>  {
  return (
    <Card className="expenses">
      {
        expenseData.map((expense) => {
          return (
            <ExpenseItem  key={expense.id} expense={expense} />
          )
        })
      }
    </Card>
  );
}
export default Expenses;
