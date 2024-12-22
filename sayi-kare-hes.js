function kareleriAl(dizi) {
    return dizi.map((sayi) => sayi * sayi);
  }

  const sayilar = [2, 3, 4, 5];
  const kareler = kareleriAl(sayilar);
  console.log(kareler);
  