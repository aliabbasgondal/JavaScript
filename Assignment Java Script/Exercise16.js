/*
This is the Exericse Number 16
*/
invite =[
    "Ghulam Abbas","Zain Abbas", "Mohammad Ali", "Ali Abbas"  
]; 
unAvailableGuest=invite[1];
invite[1]="Farhat Abbas";

for(i=0; i<invite.length-1; i++)
{
    console.log("AoA, Dear "+invite[i]+
    "\nyou are invited on the dinner at BBQ tonight on 11-11-2022 at 7:30 pm.\nIt is request to please be on time.\nWard Regrads,\n"
    + invite[invite.length-1]);
}
console.log("\nDue to some professional work "+ unAvailableGuest + " will not be able to particpate in the dinner, we shall miss him and next dinner will be on him.");

console.log("\nI have found a bigger dinner table");
invite.unshift("Zain Abbas");
invite.push("Zaha Ali");
invite.splice(invite.length/2,0,"Maira Abbas");
arrayLength=invite.length;
for(i=0; i<arrayLength-1; i++)
{
    console.log("AoA, Dear "+invite[i]+
    "\nyou are invited on the dinner at BBQ tonight on 11-11-2022 at 7:30 pm.\nIt is request to please be on time.\nWard Regrads,\n"
    + invite[arrayLength-1]);
}

