/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
function show_magicians(magicians_name)
{
    if(magicians_name.length != 0)
    {
        for(var i=0; i<magicians_name.length; i++)
        {
            console.log(magicians_name[i]);
        }
        
    }

    
}
function make_great(magicians_name)
{
    if(magicians_name.length != 0)
    {
        for(var i=0; i<magicians_name.length; i++)
        {
            magicians_name[i]= magicians_name[i]+' Great Magician';
        }
        
    }

    
}
var names = ['Ali', 'Zain','Mohammad']
var newNames= Array.from(names);
make_great(newNames);
show_magicians(names);
show_magicians(newNames);