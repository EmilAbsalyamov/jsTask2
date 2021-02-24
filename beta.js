function isPalindrome(data) {
   let counter = 0;
   let letters = data.split('');
   for (let i = 0; i < letters.length; i++) {
      let first = letters[i]
      for (let second = i + 1; second < letters.length; second++) {
      
         if (first === letters[second]) {
            counter++;
            console.log('счетчик= ' + counter + ' first= ' + first + ' sec= ' + letters[second])
         }
      }
      let arSum = letters.reduce((a, b) => ((parseInt(a) + parseInt(b))));
      console.log(arSum)
   }
   
   console.log(letters)
} 
isPalindrome('124')