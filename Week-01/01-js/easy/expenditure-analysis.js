/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySeparation = {}
  const result = []
  transactions.forEach((item, index)=>{
      if(categorySeparation.hasOwnProperty(item.category)){
        categorySeparation[item.category] = categorySeparation[item.category] + item.price
      }else{
        categorySeparation[item.category] = item.price
      }

  })

  for(const key in categorySeparation){
    result.push({'category': key, 'totalSpent': categorySeparation[key]})
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;