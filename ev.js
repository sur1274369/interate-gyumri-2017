'use strict';

// let counter = 0;
//  const interval = setInterval(function(){
//    console.log(`Called ${++counter}times`);
//    if(counter == 8){
//      clearInterval(interval);
//    }
//  },500)


process.stdin.on('data',function(d){
  console.log(d);
  console.log(d.toString().toUpperCase())
})
