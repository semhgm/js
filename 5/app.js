
// kullanıcıdan bir harf al ve metin içinde kaç kere geçtiğini bul

let metin = "ben semih yazılım mühendisliği öğrencisiyim ve halihazırda web teknolojileri ile ilgileniyorum";

const harf = prompt("Aramak istediğiniz harfi giriniz: ");

let sayac = 0;
for (let i = 0; i<metin.length; i++){

    if(metin[i].toLowerCase() === harf.toLowerCase()){
        sayac++;
    }
}
alert(`Aradığınız harf "${harf}" metinde ${sayac} kez geçiyor.`);