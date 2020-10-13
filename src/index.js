
    $(document).ready(function(){
        $('#course-drob').mouseover(function(){
            $("#drobdown").css("display","block");
        });
        $('#course-drob').mouseout(function(){
            $("#drobdown").css("display","none");
        });

        $('a').mouseover(function(){
            $("#page_indi").css("display","none");
        });
        $('a').mouseout(function(){
            $("#page_indi").css("display","block");
        });
    });
    
    $(function() {
        var $all_msg = $('#a-text');
        var $wordList = $('#a-text').text().split("");
        $('#a-text').text("");
        $.each($wordList, function(idx, elem) {
          var newEL = $("<span/>").text(elem).css({
            opacity: 0
          });
          newEL.appendTo($all_msg);
          newEL.delay(idx * 70);
          newEL.animate({
            opacity: 1
          }, 1000);
        });
      });

      $(document).ready(function(){
        $(window).scroll(function() { // check if scroll event happened
          if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".nav-top").css("background-color", "#131313"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
          } else {
            $(".nav-top").css("background-color", "transparent"); // if not, change it back to transparent
          }
        });
      });


      $(document).ready(function(){
        $('#course-drob-mobile').click(function(){
          $('#drobdown-mobile').toggleClass("d-none");
        });
        $('.hum').click(function(){
          $('.nav-mobile').toggleClass("h-100");
        });
      });



document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
    t.style.top = n.clientY + "px",
    e.style.left = n.clientX + "px",
    e.style.top = n.clientY + "px",
    i.style.left = n.clientX + "px",
    i.style.top = n.clientY + "px";
    });
    var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
    function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
    }
    function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a]);
    }
    function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }

    $(document).ready(function () {"use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);

    });


    var acursor= document.getElementById('a_cursor');
    document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        acursor.style.left = x + "px";
        acursor.style.top = y + "px";
    });


