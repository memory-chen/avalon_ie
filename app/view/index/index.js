
let img = require('../../source/img/avatar.jpg');
console.log(img);
// avalon.config({
//   debug: false
// })
require('../../component/button/index');
let vm = avalon.define({
  $id: "test",
  name: "司徒正美24556678大概是",
  array: [11, 22, 33],
  config:{
    title:'这是测试',
    dataFloor:[]
  }
});

// setTimeout(function () {
//   vm.array.set(0, 444)
// }, 3000);

$.ajax({
  url:'/api/adrecomment/floorAd?classId=6',
  success:function(data){
    console.log(data);
    vm.config.dataFloor = data;
  }
})