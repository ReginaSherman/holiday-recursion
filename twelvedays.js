
 var verses = {
  12: "12 Drummers Drumming",
  11: "11 Pipers Piping",
  10: "10 Lords-a-Leaping",
  9: "9 Ladies Dancing",
  8: "8 Maids-a-Milking",
  7: "7 Swans-a-Swimming",
  6: "6 Geese-a-Laying",
  5: "5 Golden Rings",
  4: "4 Calling Birds",
  3: "3 French Hens",
  2: "2 Turtle Doves",
  1: "And a Partridge in a Pear Tree."
}

function printVerse(i) {
  if (i >= 1)
 return `${verses[i]}, ${printVerse(i - 1)}`;
}

// console.log(printVerse(1))

function printSong(i) {
  if (i <= 12) {
    console.log(`On the ${i} day of Christmas, my true love gave to me: ${printVerse(i)}`);
    printSong(i+1)
  }
}
printSong(1)


