/*

    Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
favorite_fruits = ['Apple', 'Grapes','Oranges'];


for(i=0; i<favorite_fruits.length-1; i++)
{
   
if (favorite_fruits[i]=='Apple')
{
    console.log(' really like '+favorite_fruits[i]);
}
else if(favorite_fruits[i]=='Banana')
{console.log(' really like '+favorite_fruits[i]);}
else if (favorite_fruits[i]=='Grapes'){
    console.log(' really like '+favorite_fruits[i]);
}
else if (favorite_fruits[i]=='Oranges'){
    console.log(' really like '+favorite_fruits[i]);
}
else{
    console.log('No Favorite fruite found');
}

}