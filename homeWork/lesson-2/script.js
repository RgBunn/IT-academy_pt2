
const purchases = [
    { date: 'Feb', category: 'Food', amount: 50 },
    { date: 'Feb', category: 'Clothing', amount: 100 },
    { date: 'Feb', category: 'Entertainment', amount: 75 },
    { date: 'Mar', category: 'Food', amount: 25 },
    { date: 'Mar', category: 'Clothing', amount: 200 },
    { date: 'Mar', category: 'Entertainment', amount: 50 },
    { date: 'Mar', category: 'Food', amount: 100 },
    { date: 'Mar', category: 'Clothing', amount: 150 },
    { date: 'Apr', category: 'Entertainment', amount: 100 },
    { date: 'Apr', category: 'Food', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
    { date: 'Jul', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Food', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
];




const makePurchaseStat = (purchases) => {
    // 1 Calculate total expenses
    const total=purchases.reduce((acc, current)=>acc+current.amount,0);


    // 2 Calculate totals for each category
    const categoriesTotal=purchases.reduce((accumulator,currentValue,index,array)=>{
        if(!accumulator[currentValue.category]) {
            accumulator[currentValue.category]=0;
        }
        accumulator[currentValue.category]+=currentValue.amount;
        return accumulator;
    },{})


//3 Monthly totals
    const monthlyTotals=purchases.reduce((accumulator,currentValue)=>{
        if(!accumulator[currentValue.date]) {
            accumulator[currentValue.date]=0;
        }
        accumulator[currentValue.date]+=currentValue.amount;
        return accumulator;
    },{})



return {
    total:total,
    categories:categoriesTotal,
    monthly:monthlyTotals
}
}
console.log(makePurchaseStat(purchases))
