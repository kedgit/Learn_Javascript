//modern way to concate string i.e string interpolation
const name ="kedar";
const age=23;
console.log(`my name is ${name.toUpperCase()} and i am ${age} years old.`);

console.log(name[0]);

console.log(name.toUpperCase());
console.log(name.charAt());
console.log(name.indexOf('e'));

console.log(name.slice(-4,3));

console.log(name.substring(0,2));

const extraspace="    username"
console.log(extraspace);
console.log(extraspace.trim());

const url="https://glowing-orbit-r47p9r5wgj5g2prvg.github.dev/";
console.log(url.replace('orbit','kedar'));

const array='kedar-sharanabasappa-mhetre';
const newarray=array.split('-');
console.log(newarray);

let text="kedar";
console.log(text.charCodeAt(3));
console.log(text.constructor());

// output

/*

1
ed
ke
    username
username
https://glowing-kedar-r47p9r5wgj5g2prvg.github.dev/
[ 'kedar', 'sharanabasappa', 'mhetre' ]
97

*/