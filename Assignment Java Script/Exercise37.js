/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(shirtSize, shirtMessage)
{
    var shirtSize='Large';
    shirtMessage='I love JavaScript';
    console.log('The size of the shirt will be '+shirtSize+' and ' +shirtMessage+ 'will be the message printed on it');
    var shirtSize='Midum';
    
    console.log('The size of the shirt will be '+shirtSize+' and ' +shirtMessage+ 'will be the message printed on it');
    var shirtSize='XXL';
    shirtMessage='I love JavaScript but will learn typescript too';
    console.log('The size of the shirt will be '+shirtSize+' and ' +shirtMessage+ 'will be the message printed on it');
}

make_shirt(17, 'Never Settle');