// 1) Функция которая принимает строку и возвращает количество слов в ней.

const loremString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit';
const arrString = loremString.split(' ');
const stringAmount= () => arrString.length;


// 2) Функция, которая получает строку и возвращает размер самого большого слова в ней
// function stringLength (){
//   debugger;
//   for(let i=0; i < arrString.length; i++){
//     if (arrString[i].length > arrString[i].length){
//       return arrString.length;
//     }
//   }
// }

const stringLength = arrString.reduce (function (i, j) {
  return i.length > j.length ? i : j;
})
