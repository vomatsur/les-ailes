function hisobla (ovqatnomi,narxi){
  const nechta = +prompt(`${ovqatnomi} nechta zakas qilmoqchsiz`);

  switch (ovqatnomi) {
    case "Qiyqiriq сет":
      confirm(
        `${nechta} ta ${ovqatnomi}narxi${
          nechta * narxi
        } som \n Maxsulot zakas qilasizmi?`
      );
      alert("Zakas qabul qilindi");
      break;
  }
}







