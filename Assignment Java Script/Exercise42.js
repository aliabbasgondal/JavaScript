/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
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
make_great(names);
show_magicians(names);