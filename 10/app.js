/** 
 * 
 * 
 * 
 * vize final notlarına göre dersten geçme durumunu kontrol eden bir program yazalım.
 * 
 * vize notu %40, final notu %60 etkili olsun.
 * geçme notu 50 olsun.
 * kullanıcıdan vize ve final notlarını alalım.
 * sonucu ekrana yazdıralım.
 * 
 * örnek çıktı:
 * vize notunu girin: 70
 * final notunu girin: 80
 * ortalamanız: 76
 * tebrikler, dersten geçtiniz!
 */


    const btnHesapla = document.getElementById("btnHesapla");

function hesapla() {
    let vize = parseFloat(document.getElementById("vize").value);
    let final = parseFloat(document.getElementById("final").value);

    // parseFloat sonucu sayı değilse (NaN ise) kullanıcıyı hemen uyar ve dur
    if (isNaN(vize) || isNaN(final)) {
        alert("Lütfen her iki notu da geçerli bir sayı olarak giriniz.");
        return; // Fonksiyonu burada bitir, hesaplamaya geçme
    }

    const ortalama = (vize * 0.4) + (final * 0.6);

    if (ortalama >= 50) {
        alert(`Ortalamanız: ${ortalama.toFixed(2)}. Tebrikler, geçtiniz!`);
    } else {
        alert(`Ortalamanız: ${ortalama.toFixed(2)}. Maalesef kaldınız.`);
    }
}
    btnHesapla.addEventListener("click", hesapla);
