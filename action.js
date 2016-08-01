/**
 * Created by yangjinfeng on 2016/7/31.
 */
angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.person = [
        {pic:"./images/08.jpg",name:"杨杨"},
        {pic:"./images/02.jpg",name:"阿芸"},
        {pic:"./images/05.jpg",name:"傻逼"}
    ];
    var pics=["./images/01.jpg","./images/02.jpg","./images/03.jpg","./images/04.jpg","./images/05.jpg",
        "./images/06.jpg","./images/07.jpg","./images/08.jpg","./images/09.jpg","./images/10.jpg"];


    (function(){
        if(localStorage.getItem('person')){
            $scope.person=JSON.parse(localStorage.getItem('person'));
        }
        else{
            localStorage.removeItem('person');
        }
    })();
    //删除好友
    $scope.delete=function(index){
        $scope.message=confirm("你确定要删除好友吗？");
        if($scope.message==true){
            $scope.person.splice(index,1);
            localStorage.removeItem('person');
        }
        else{
            alert("你已取消删除好友");
        }
    };

    //置顶
    $scope.stick=function(index){
        var a=$scope.person[index];
        $scope.person.splice(index,1);
        $scope.person.unshift(a)
    };

    //清空好友
    $scope.clear=function(index){
        $scope.message=confirm("你确定要清空好友吗？");
        if($scope.message==true){
            $scope.person.length=0;
            localStorage.removeItem('person');
        }
       else{
            alert("你已取消清空好友");
        }
    };

    //添加好友
    $scope.add=function(){
        if(!$scope.names){
            alert("名字为空");
        }
        else{
            $scope.message=confirm("你确定要添加吗？？");
            if($scope.message==true){
                var b={
                    pic:pics[Math.floor(Math.random() * 10)],
                    name:$scope.names
                };
                $scope.person.unshift(b);
                $scope.conserve($scope.person);
            }
            else{
                alert("你已取消添加好友");
            }

        }
    };
    $scope.cancel=function(){
        $scope.names="";
    };
//
    $scope.conserve = function (person) {
        //判断是不是数组
        if (Array.isArray(person)) {
            localStorage.setItem('person', JSON.stringify(person));
        }
    }
});
