for(let i = 0; i <= 10; i++){
    console.log(i);
}

let u = 0;
while(u <=10){
    console.log(u);
    u++
}

let m=0;
do{
    console.log(m); m++
} while (m<=10)

for(let k = 1; k <= 100; k++){
    if (k % 2 !== 0)
    console.log(k);
}

for(let k = 1; k <= 100; k++){
    if (k % 2 == 0)
    console.log(k);
}



const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(countries.length);

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
  )
  console.log(countriesContainingLand)
