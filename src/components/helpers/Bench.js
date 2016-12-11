export default class convertToPounds {

   convert(stateArr, doConvert) {
     if(doConvert) {
       let arr = [];
       stateArr.forEach(function(element) {
         arr.push(Math.round(element * 2.2046))
       });
       return arr;
     }
     return stateArr;
   }
}
