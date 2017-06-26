/*document.getElementById('form').onsubmit(){
   window.alert('押したよ！');
};
document.getElementById('form').onsubmit = function(){
   window.alert(document.getElementById('form').num.value);
};
*/
for(var i= 1; i<100;i++)
{
   var li = document.createElement('li');
   if(i%15==0){
    li.textContent ='FizzBuzz';
   }
   else if(i%5==0){
    li.textContent ='Fizz';
   }
   else if(i%3==0){
    li.textContent ='Buzz';
   }
   else{
   li.textContent =i;
   }
   document.getElementById('while').appendChild(li);
}
