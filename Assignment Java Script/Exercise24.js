/*
This is the Exericse Number 24

*/
// Find an item in an array
car =['Toyota Corolla' , 'Toyota Hilux', 'Toyota Yaris', 'Honda City', 'Honda City', 'Audi A3', 'Audi Q7', 'BMW 7 Series', 'Audi Etron', 'Bugatti Bolide', 'Rolls Royce Phantom'
]; 
for(i=0; i<car.length; i++)
{
    if(car[i] == 'Toyota Corolla')
    {
        console.log('True');
    }
    else 
    {
        console.log('False');
    }
}
// Check String equal or not equal
name="Student name is Ali";
if(name=="Student name is Ali"?console.log('String is Equal'):console.log('String is not Equal'));
// Check String equal or not equal using to lower case function
if(name.toLowerCase()=="Student name is Ali"?console.log('String is Equal'):console.log('String is not Equal'));
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
testNumber = 11;
if(testNumber == 11? console.log('numbers are equal'):console.log("numbers are not equal"));
if(testNumber > 11? console.log('numbers  greater then 11'):console.log("numbers not greater then 11"));
if(testNumber < 11? console.log('numbers  less then 11'):console.log("numbers not less then 11"));
// Tests using "and" and "or" operators
if(2+9 == 11 && 6+5 == 11?console.log('numbers are equal'):console.log("numbers are not equal"));
if(2+10 == 11 || 6+5 == 11?console.log('numbers are equal'):console.log("numbers are not equal"));

