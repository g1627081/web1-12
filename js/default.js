document.getElementById('form').onsubmit(){
   window.alert('押したよ！');
};
document.getElementById('form').onsubmit = function(){
   window.alert(document.getElementById('form').num.value);
};
