insertingCard = (card, ev) => {
  let whatKey = ev.which || ev.keyCode;

  if (card.value.length < 18 && whatKey != 8 && whatKey != 45) {
    if ((card.value.length + 1) % 5 == 0) {
      card.value += '-';
      if (whatKey == 32) {
        ev.preventDefault();
      }
    } else {
      if (whatKey == 32) {
        ev.preventDefault();
      }
    }
  }
};

insertingDate = (inputDate, ev) => {
  let whatKey = ev.which || ev.keyCode;
  if (inputDate.value.length == 1 && whatKey != 8) {
    ev.preventDefault();
    inputDate.value += String.fromCharCode(whatKey) + ' / ';
  }
};

submitCheckout = () => {
  alert('Thank You for the purchase');
};
