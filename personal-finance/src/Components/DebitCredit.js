import React from 'react'

export const DebitCredit = () => {
    return (
        <div class = "debit-credit-container">
       <div>
         <h4>Income</h4>
         <p id= "money-plus" class = "money plus">+$0.00</p>   
        </div>
        <div>
            <h4>Expense</h4>
            <p id = "money-minus" class = "money minus">-$0.00</p>
        </div>
        </div>
        
    );
}
