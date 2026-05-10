const btnHesapla = document.getElementById("btnHesapla");
const sonucAlan = document.getElementById("sonucAlan");

function hesapla() {
    let vize = parseFloat(document.getElementById("vizeNote").value);
    let final = parseFloat(document.getElementById("finalNote").value);

    if (isNaN(vize) || isNaN(final)) {
        sonucAlan.style.display = "block";
        sonucAlan.className = "mt-4 alert alert-warning text-center";
        sonucAlan.textContent = "Lütfen notları giriniz!";
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);
    sonucAlan.style.display = "block"; // Görünür yap

    if (ortalama >= 50) {
        sonucAlan.className = "mt-4 alert alert-success text-center";
        sonucAlan.innerHTML = `Ortalama: ${ortalama.toFixed(2)} <br> 🎉 Tebrikler Geçtiniz!`;
    } else {
        sonucAlan.className = "mt-4 alert alert-danger text-center";
        sonucAlan.innerHTML = `Ortalama: ${ortalama.toFixed(2)} <br> ❌ Maalesef Kaldınız.`;
    }
}

btnHesapla.addEventListener("click", hesapla);