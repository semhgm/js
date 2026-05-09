let yas = Number(prompt("Yaşınızı girin:"));
let butce = Number(prompt("Bütçenizi girin:"));
if(yas>=18 && butce>=400){
    alert("bedelli askerlik yapabilirsiniz");
}else{
    alert("bedelli askerlik yapamazsınız. mecbur askere gideceksiniz.");
}