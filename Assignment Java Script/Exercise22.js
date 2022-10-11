/*
This is the Exericse Number 22
*/
invite =[
    {name:'Ghulam',last:'Abbas'},
{name:'Zain',last:'Abbas'},
{name:'Mohammad',last:'Ali'},
{name:'Ali',last:'Abbas'}    
]; 
unAvailableGuest=invite[1].name + invite[1].last;
invite[1].name = "Farhat";
invite[1].last = "Abbas";
for(i=0; i<invite.length+1; i++)
{
    console.log("AoA, Dear "+invite[i].name+"  "+invite[i].last+
    "\nyou are invited on the dinner at BBQ tonight on 11-11-2022 at 7:30 pm.\nIt is request to please be on time.\nWard Regrads,\n"
    + invite[3].name+" "+invite[3].last);
}
console.log("\nDue to some professional work "+ unAvailableGuest + "will not be able to particpate in the dinner, we shall miss him and next dinner will be on him.");
