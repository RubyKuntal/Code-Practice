var modalText;

$(window).ready(function() {

	$("#0").addClass("activeClass");
	//$("#ul0").addClass("activeClass");
});

$('#myModal').on('show.bs.modal', function (e) {
          modalText=$("#craftName").val();
        });

/*
function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    ev.target.appendChild(document.getElementById(data));
}*/

function workController($scope) {

    $scope.work = [
        {id:'1', name:'Newspaper Keyholder', details:'This piece of art is created by rolling newspapers. The width of newspaper strip should be around 2 inches. Create hooks by bending wires and sticking it in the center of the rolls.'},
        {id:'2', name:'Tissue paper roll birdhouse', details:'Cut the rolls having width of half inch. Color them and stick in the form of leaves on branches. Create birdhouse using toothpicks and thermocol.'},
        {id:'3', name:'Paper beads curtain', details:'Make paper beads using old newspaper. Choose the colorful papers. Use a thread to connect all the beads and form a curtain using them.Roll the news'},
        {id:'4', name:'Newspaper rolls surname', details:'Roll the newspapers into sticks and use craft glue to stick these on the cradboard. For every letter use same colored rolls.'}
    ];

	$scope.workDetails=$scope.work[0].details;
    $scope.workDetailsBtn=function(obj,id){
    		 $scope.workDetails=$scope.work[id].details;
    		 $("*").removeClass("activeClass");
    		 $('#'+id).addClass("activeClass");
			 //$('#ul'+id).addClass("activeClass");	
    };

    $scope.add=function(txt){

        if(modalText=='')
        {
            $scope.work.push({
                id:($scope.work.length)+1,
                name: $scope.craftName,
                details: $scope.craftDetails
            });
            $scope.workDetails=$scope.work[0].details;
            //$("*").removeClass("activeClass");
            //$('#'+eval(($scope.work.length)-1)).addClass("activeClass");
            if(($scope.work.length)==1)
            {
                 $(".detailsDiv").show();
                 $("#editBtn").show(); 
                 $scope.workDetails=$scope.work[0].details;
                 
            }
        }
        else
        {
            var id;
            for(var i=0;i<=$scope.work.length;i++)
            {
                if(modalText==$scope.work[i].name)
                {
                    id=i;
                    break;
                }
            }
            $scope.work[id].name=$scope.craftName;
            $scope.work[id].details=$scope.craftDetails;
            $scope.workDetails=$scope.craftDetails;
            $("*").removeClass("activeClass");
            $('#'+id).addClass("activeClass");
        }
        $scope.craftName = "";
        $scope.craftDetails = "";

        $('#myModal').modal('hide');
    	 
    };

    $scope.delete=function($index){
         $scope.work.splice($index,1);
         if($index<($scope.work.length))
         {
             $scope.workDetails=$scope.work[0].details;
                $("*").removeClass("activeClass");
             $('#0').addClass("activeClass");
             //$('#ul0').addClass("activeClass");   
         }
         else if($index==($scope.work.length) && ($scope.work.length)==0)
         {
             $(".detailsDiv").hide();
             $("#editBtn").hide();
             $("#addBtn").show();
             $scope.btnTxt="Edit";
             $("#btnText").addClass("glyphicon glyphicon-pencil");
         }
    };

    $scope.saveUpdate=function(id){
        $scope.craftName=$scope.work[id].name;
        $scope.craftDetails=$scope.work[id].details;
    };

    $scope.btnTxt="Edit";
    $scope.edit=function(){
    	if($scope.btnTxt=="Edit")
    	{        
    		$scope.btnTxt="Done";
            $("#addBtn").hide();
    		$("#btnText").removeClass("glyphicon glyphicon-pencil");

    		$('.removeBtn').animate({
              paddingLeft: '15px',
              paddingRight: '15px',
              opacity:'1' },300);
			$('.reorderBtn').animate({
              paddingLeft: '15px',
              paddingRight: '15px',
              opacity:'1' },300);
            $('.saveUpdate').animate({
              paddingLeft: '15px',
              opacity:'1' },300);

            /*for(var i=0;i<obj.length;i++)
            {
                var txt="<input type='text' class='form-control' value='"+obj[i].name+"'>";
                $('#'+i).html(txt);
            }

            var txtDetails="<textarea rows='8' cols='50' maxlength='1000' class='form-control'>"+$scope.workDetails+"</textarea>";
                $(".detailsDiv").html(txtDetails);
                $('#0').addClass("activeClass");*/
    	}
    	else
    	{
    		$scope.btnTxt="Edit";
            $("#addBtn").show();
    		$("#btnText").addClass("glyphicon glyphicon-pencil");
    		$('.removeBtn').animate({
              paddingLeft: '-15px',
              paddingRight: '-15px',
              opacity:'0' },300);
			$('.reorderBtn').animate({
              paddingLeft: '-15px',
              paddingRight: '-15px',
              opacity:'0' },300);
            $('.saveUpdate').animate({
              paddingLeft: '-15px',
              paddingRight: '-15px',
              opacity:'0' },300);

            /*for(var i=0;i<obj.length;i++)
            {
                $('#'+i).html(obj[i].name);
            }
            $(".detailsDiv").html($scope.workDetails);
            $('#0').addClass("activeClass");*/
    	}

    };
}




