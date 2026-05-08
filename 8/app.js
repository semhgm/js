var a = 5;

function globalWriteA(){
    console.log(a);
}
globalWriteA(); // 5

function localWriteA(){
    var a = 10;
    console.log(a);
}
localWriteA(); // 10
console.log(a); // 5

//var let const

// ============ var, let, const farkları ============

// var - fonksiyon kapsamlı

function varExample(){
    if(true){
        var x = 12;
    }
    console.log(x); // 12 scope dışından da erişilebiliyor.Dangerous!!
}

// let - blok kapsamlı
function letExample() {
    if(true){
        let y = 13; 
    }
    console.log(y); // ReferenceError: y is not defined
}

// const - yeniden atama yapılamaz
const PI = 3.14;
// PI = 3.15; // TypeError: Assignment to constant variable

// AMA const ile obje içeriği değiştirilebilir!
const kullanici = { ad: "Semih", yas: 24 };
kullanici.yas = 25;        // ✅ Çalışır - içerik değişti
kullanici.sehir = "Elazığ"; // ✅ Çalışır - yeni özellik eklendi
// kullanici = {};          // ❌ Hata - referans değiştirilemez
console.log(kullanici); // { ad: "Semih", yas: 25, sehir: "Elazığ" }


// ============ Veri Tipleri ============

// Primitive tipler
let isim = "Semih";              // string
let yas = 24;                    // number
let buyukSayi = 9007199254740993n; // bigint
let aktifMi = true;              // boolean
let tanimsiz;                    // undefined
let bos = null;                  // null
let id = Symbol("id");           // symbol

console.log(typeof isim);     // "string"
console.log(typeof yas);      // "number"
console.log(typeof bos);      // "object" - JS'in meşhur bug'ı!
console.log(typeof tanimsiz); // "undefined"

// Reference tipi - object
const dizi = [1, 2, 3];               // array
const obje = { dil: "JavaScript" };   // object
const fonksiyon = () => "merhaba";    // function

console.log(typeof dizi);      // "object"
console.log(typeof fonksiyon); // "function"


// ============ Primitive vs Reference farkı ============

// Primitive: değer kopyalanır
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (değişmedi)
console.log(b); // 10

// Reference: referans paylaşılır
let obj1 = { sayi: 5 };
let obj2 = obj1;        // aynı objeyi gösteriyorlar!
obj2.sayi = 10;
console.log(obj1.sayi); // 10 (obj1 de değişti!)
console.log(obj2.sayi); // 10


// ============ Pratik kural ============
const SABIT_DEGER = "değişmeyecek";  // varsayılan: const
let sayac = 0;                        // değişecekse: let
sayac++;
// var KULLANMA - eski ve sorunlu