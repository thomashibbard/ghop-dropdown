angular.module("tabs", [])
    .controller("main", function ($scope, $timeout) {

        $scope.secondaryMenuTabs = {
            "singleItem": false,
            "settingsType": "Var Settings",
            "navs": [
                {
                    "name":"Code",
                    "index":0,
                    "isDefault": true
                },
                {
                    "name":"Images",
                    "index":1,
                    "isDefault": false
                },
                {
                    "name":"Phinigo",
                    "index":2,
                    "isDefault": false
                }
            ]
        };
        /*check*/
        $scope.dropdownVisible = false;
        $scope.currentIndex = 0;
        $scope.changeIndex = function(index){
            $scope.currentIndex = index;
        };
        /*check each element in the array of dropdown items and display the item in the
        dropdown that has the property isDefault set to true*/
        $scope.dropdown = false;
        $scope.selectedDropdownIndex = 0;
        $scope.setDefaultTab = function(){
            for (var item = 0; item < $scope.secondaryMenuTabs.navs.length; item++){
                if ($scope.secondaryMenuTabs.navs[item].isDefault === true){
                    $scope.selectedDropdownIndex = item;
                }
            }
        };
        $scope.setDefaultTab();
        $scope.selectDropdownNav = function(index){
            console.log("%c " + $scope.secondaryMenuTabs.navs[index].name, " color: red" , " selected at $scope.secondaryMenuTabs.navs position " + index);
            $scope.selectedDropdownIndex = index;
            $scope.dropdownVisible = false;
        };

    });