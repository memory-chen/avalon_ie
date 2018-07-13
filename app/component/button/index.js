avalon.component('ms-button', {
    template: require('./template.html'),
    onInit:function(){
        console.log(11)
    },
    defaults: {
        title:'',
        buttonText: "button",
        dataFloor:[]
    }
})