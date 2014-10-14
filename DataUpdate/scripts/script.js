$(window).ready(function() {

	$(".reorderBtn").css("opacity","0");
	$(".removeBtn").css("opacity","0");

	$("#1").addClass("activeClass");
	$("#ul1").addClass("activeClass");
});

function workController($scope) {
    $scope.work = [
        {id:'1', name:'Newspaper Keyholder', details:'This piece of art is created by rolling newspapers. The width of newspaper strip should be around 2 inches. Create hooks by bending wires and sticking it in the center of the rolls.'},
        {id:'2', name:'Tissue paper roll birdhouse', details:'Cut the rolls having width of half inch. Color them and stick in the form of leaves on branches. Create birdhouse using toothpicks and thermocol.'},
        {id:'3', name:'Paper beads curtain', details:'Make paper beads using old newspaper. Choose the colorful papers. Use a thread to connect all the beads and form a curtain using them.Roll the news'},
        {id:'4', name:'Newspaper rolls surname', details:'Roll the newspapers into sticks and use craft glue to stick these on the cradboard. For every letter use same colored rolls.'}
    ];

	$scope.workDetails=$scope.work[0].details;
    $scope.workDetailsBtn=function(obj,id){
    		 $scope.workDetails=$scope.work[id-1].details;
    		 $("*").removeClass("activeClass");
    		 $('#'+id).addClass("activeClass");
			 $('#ul'+id).addClass("activeClass");	
    };

    $scope.btnTxt="Edit";
    $scope.edit=function(){
    	if($scope.btnTxt=="Edit")
    	{
    		$scope.btnTxt="Done";
    		$("#btnText").removeClass("glyphicon glyphicon-pencil");
    		$('.removeBtn').animate({
              paddingLeft: '15px',
              opacity:'1' },300);
			$('.reorderBtn').animate({
              paddingLeft: '15px',
              opacity:'1' },300);
    	}
    	else
    	{
    		$scope.btnTxt="Edit";
    		$("#btnText").addClass("glyphicon glyphicon-pencil");
    		$('.removeBtn').animate({
              paddingLeft: '-15px',
              opacity:'0' },300);
			$('.reorderBtn').animate({
              paddingLeft: '-15px',
              opacity:'0' },300);
    	}

    };
}




