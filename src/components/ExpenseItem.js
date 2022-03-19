function ExpenseItem() {
    return (
        // root element has to be 1 element, nesting all other elements
        <div>
            <div>19/03/2022</div>
            <div>
                <h2>Car Loan</h2>
                <div>€ 220.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
