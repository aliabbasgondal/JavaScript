/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.
*/
function items_list(items)
{
    
console.log('List of Items in Sandwich:\n');
items.forEach(e  => {
    console.log(e);
    
});
    
}
var itemList = ['checken', 'pickles','Mayo']

items_list(itemList);

var itemList = ['BBQ Checken', 'pickles','Mayo']

items_list(itemList);
var itemList = ['Beaf', 'pickles','Mayo']

items_list(itemList);
