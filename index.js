function isPalindrome(data) {
   let counter = 0;
   let letters = data.split('');
   for (let i = 0; i < letters.length; i++) {
      let a = letters[i].toString();
      for (let n = letters.length - 1; n >= 0; n--)      {
         let b = letters[n].toString();
         if (a === b) {
            counter++;
            console.log('i = ' + a + ' ' + b)
            console.log(counter)
         } else {
            console.log('i = ' + a + ' ' + b)
            console.log('Different')
         }
         }
      }
}
isPalindrome('ssbb')