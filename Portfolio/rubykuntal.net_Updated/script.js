    var imageWidth=900;
    var allImages=[];
    var currentImage =0;
    $(window).ready(function() {
            
            $("#workWindow div").hide();
            $("#mailersId").show();  

            allImages.push($('#workWindow #mailersId li').length);
            allImages.push($('#workWindow #mobileDMVSId li').length);
            allImages.push($('#workWindow #smartDMVSId li').length);
            allImages.push($('#workWindow #UIContestId li').length);
            allImages.push($('#workWindow #logosId li').length);

            $('#mailersId ul').width(allImages[0]*imageWidth);
            $('#mobileDMVSId ul').width(allImages[1]*imageWidth);
            $('#smartDMVSId ul').width(allImages[2]*imageWidth);
            $('#UIContestId ul').width(allImages[3]*imageWidth);
            $('#logosId ul').width(allImages[4]*imageWidth);

            $('.nxtBtn').click(function(obj){
                currentImage++;
                if(currentImage>=getselectedWork()) currentImage = 0;
                setFramePosition(currentImage);

            });

            $('.prevBtn').click(function(obj){

                currentImage--;
                if(currentImage<0) currentImage = getselectedWork()-1;
                setFramePosition(currentImage);

            });
             setTimeout(function(){$(".html5").addClass("animated bounce")},2500);
             setTimeout(function(){$(".css3").addClass("animated").addClass("bounce");},1000);
             setTimeout(function(){$(".javascript").addClass("animated").addClass("bounce");},700);
             setTimeout(function(){$(".jquery").addClass("animated").addClass("bounce");},1200);
             setTimeout(function(){$(".angularjs").addClass("animated").addClass("bounce");},3000);
             setTimeout(function(){$(".bootstrap").addClass("animated").addClass("bounce");},1800);

        });

        function getselectedWork(){
            if($('#mailersId').is(':visible'))
              return allImages[0];
            else if($('#mobileDMVSId').is(':visible'))
              return allImages[1];  
            else if($('#smartDMVSId').is(':visible'))
              return allImages[2];
            else if($('#UIContestId').is(':visible'))
              return allImages[3]; 
            else if($('#logosId').is(':visible'))
              return allImages[4];
        }

        function setFramePosition(pos){
          var px = imageWidth*pos*-1;
          $('.imgTxt ul').animate({
              left: px
          }, 600);
      }

      function resetPos(pos){
          var px = imageWidth*pos*-1;
          $('.imgTxt ul').css({
              left: px
          }, 600);
      }

      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

function navClicked(obj){
      currentImage = 0;
      resetPos(currentImage);

      if(obj.id=="FlyersNav")
      {
        $("#workWindow div").hide();
        $("#mailersId").show(); 
      }
      else if(obj.id=="MobileDMVSNav")
      {
        $("#workWindow div").hide();
        $("#mobileDMVSId").show();   
      }
      else if(obj.id=="SmartDMVSNav")
      {
        $("#workWindow div").hide();
        $("#smartDMVSId").show();   
      }
      else if(obj.id=="UIContestNav")
      {
        $("#workWindow div").hide();
        $("#UIContestId").show();  
      }
      else if(obj.id=="LogosNav")
      {
        $("#workWindow div").hide();
        $("#logosId").show();  
      }
    }



