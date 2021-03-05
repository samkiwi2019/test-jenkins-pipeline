console.log('I am coming!');

function printStars(n = 5){
   for(let i=1;i<=n;i++){
      let str='';
      for(let j=i; j<=n;j++){
          str+='⭐';
      }
      str=str + '\n';
      console.log(str);
   }
}

printStars();

console.log('finished');
