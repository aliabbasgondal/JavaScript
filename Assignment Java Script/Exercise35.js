/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
animal = ['Cat', 'Tiger', 'Leopard'];
for(i=0; i<animal.length; i++)
{
    console.log(animal[i]);
}
for(i=0; i<animal.length; i++)
{
    if(animal[i]==='Cat')
    {
        console.log('A Cat would make a great pet');
    }
    else if(animal[i]==='Tiger')
    {
        console.log('A Tiger would not make a great pet');
    }
    else if(animal[i]==='Leopard')
    {
        console.log('A Leopard would not make a great pet');
    }
    
}

console.log('Tiger and Leopard are two of the members of Cat family');