let age, message;
let a = prompt(`Введіть свій рік народження:`);
if (a === null || a === `` || isNaN(a)) {
  message = `Шкода, що Ви не ввели свій рік народження.\n`;
} else {
  age = 2023 - a;
  message = `Ваш вік: ${age} роки\n`;
}
let b = prompt(`Введіть місто, в якому ви живете:`);
if (b === null || b === ``) {
  message += `Шкода, що Ви не ввели місто, в якому ви живете.\n`;
} else {
  function country(city) {
    let country;
    switch (city) {
      case `Київ`:
        country = `України`;
        break;
      case `Вашингтон`:
        country = `США`;
        break;
      case `Лондон`:
        country = `Великої Британії`;
        break;
      default:
        country = `невідомої країни`;
    }
    return country;
  }
  if (b === `Київ` || b === `Вашингтон` || b === `Лондон`) {
    message += `Ви живете у столиці ${country(b)}\n`;
  } else {
    message += `Ви живете у місті ${b}\n`;
  }
}
let c = prompt(`Введіть свій улюблений вид спорту:`);
if (c === null || c === ``) {
  message += `Шкода, що Ви не ввели свій улюблений вид спорту.\n`;
} else {
  function sport(champions) {
    let sport;
    switch (champions) {
      case `Футбол`:
        champions = `Пеле`;
        break;
      case `Баскетбол`:
        champions = `Джордан`;
        break;
      case `Автоспорт`:
        champions = `Колін Макрей`;
        break;
      default:
        champions = ``;
    }
    return champions;
  }
  if (c === `Футбол` || c === `Баскетбол` || c === `Автоспорт`) {
    message += `Круто! Хочете бути як ${sport(c)}?`;
  } else {
    message += `Ваш улюблений вид спорту - ${c}.`;
  }
}
alert(message);
