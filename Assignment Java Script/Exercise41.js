/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
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
var names = ['Ali', 'Zain','Mohammad']
show_magicians(names);