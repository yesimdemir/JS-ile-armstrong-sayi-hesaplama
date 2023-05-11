
//ARMSTRONG SAYISI HESAPLAMA


let sayi = prompt("Sayı giriniz: ");
let toplam = 0;
for(let i = 0; i<sayi; i++){
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır.");
}
else{
    alert("Armstrong sayısı değildir.");
}