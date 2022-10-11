personalMessage="Mohammad Ali Abbas";

upperCase = personalMessage.toUpperCase();
lowerCase = personalMessage.toLowerCase();
titleCase = personalMessage.split(' ')
.map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
.join(' ');
console.log(upperCase);
console.log(lowerCase);
console.log(titleCase);

