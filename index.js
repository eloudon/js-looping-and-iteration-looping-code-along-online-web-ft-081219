function writeCards( arrayNames, birthday ) {
  let thankYou = []
  for ( let i = 0; i < arrayNames.length; i++ ) {
      thankYou.push( `Thank you, ${arrayNames[i]}, for the wonderful ${birthday} gift!`)
  }
  return thankYou
}



  function countDown (i) {
      while (i>-1) {
          console.log(i--);
      }
  }
