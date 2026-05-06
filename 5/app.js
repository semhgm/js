
// kullanıcıdan bir harf al ve metin içinde kaç kere geçtiğini bul

// const { is } = require("express/lib/request");

// let metin = "ben semih yazılım mühendisliği öğrencisiyim ve halihazırda web teknolojileri ile ilgileniyorum";

// const harf = prompt("Aramak istediğiniz harfi giriniz: ");

// let sayac = 0;
// for (let i = 0; i<metin.length; i++){

//     if(metin[i].toLowerCase() === harf.toLowerCase()){
//         sayac++;
//     }
// }
// alert(`Aradığınız harf "${harf}" metinde ${sayac} kez geçiyor.`);


// is number perfect number

function isPerfectNumber(num) {

    let sum = 0;
    for (let i = 2; i <= num / 2; i++) {
        if(num %i ===0){
            sum +=i;
        };
    }
    if(sum + 1 + num ===num*2){
        console.log(`${num} mükemmel sayıdır.`);
    }
    else{
        console.log(`${num} mükemmel sayı değildir.`);
    }
    
}
isPerfectNumber(28);
isPerfectNumber(6);
isPerfectNumber(12);
isPerfectNumber(496);
isPerfectNumber(8128);