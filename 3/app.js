
a = 5;
b = 10;
c = a + b;
console.log(c);


function yazdir(isim, soyisim) {
    console.log("İsim: " + isim + " Soyisim: " + soyisim);
    return "İsim: " + isim + " Soyisim: " + soyisim;
}
yazdir("semih","gümüş");
metin = yazdir("semih","gümüş");
document.write(metin);


function checkAge(age) {
let yas = prompt("Yaşınızı giriniz: ");
if (yas < 18) {
    alert("Reşit değilsiniz.");
} else {
    alert("Reşitsiniz.");
}
}
