// Define variables
$(document).ready(function(){
  var count = 0;
  var time = 31;
  var isSelected = false;
  var ticker;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

// Questions and Answer Arrays
  var question = ["At the beginning of the movie a pilot freezes up during an encounter with a MIG-28; What is his call sign?","After the flyby reprimand at Top Gun, what profession was Goose considering?","What is the name of the aircraft carrier that we see in both the beginning and ending of 'Top Gun'?","In the Top Gun briefing room: Iceman Says: 'The plaque for the alternates is down in the ______.'","In what month does Goose die?","Finish the line: 'Tower, this is ghostrider, requesting a fly-by.' - 'Negative, ghostrider, __________.'","What was Kelly McGillis's characters' full name in the movie?","Who directed 'Top Gun'?"];
  var answer = ["Cougar", "Truck driver", "USS Enterprise", "Ladies' room", "July", "the pattern is full", "Charlotte Blackwood", "Tony Scott"];
  var firstChoice = ["Cougar", "Piano Player", "USS Kitty Hawk", "Men's Room", "September", "the pattern is full", "Kathtryn Murphy", "Steven Spielberg"];
  var secondChoice = ["Iceman", "Truck driver", "USS Independence", "Instructor's Office", "December", "that is not allowed.", "Jenny Adamson", "Tony Scott"];
  var thirdChoice = ["Viper", "Singer", "USS Enterprise", "Your Mom's House", "July", "not on my watch", "Jaime Marshall", "James Cameron"];
  var fourthChoice = ["Goose", "Movie Star", "USS Patriot", "Ladies' room", "April", "request denied", "Charlotte Blackwood", "Ridley Scott"];

// Show & Hide Functions
  function showHolders() {
      $("#question-holder").show();
      $("#choice-holder-1").show();
      $("#choice-holder-2").show();
      $("#choice-holder-3").show();
      $("#choice-holder-4").show();
  }
  function hideHolders() {
      $("#question-holder").hide();
      $("#choice-holder-1").hide();
      $("#choice-holder-2").hide();
      $("#choice-holder-3").hide();
      $("#choice-holder-4").hide();
  }
  function hideResults() {
      $("#correct-holder").hide();
      $("#incorrect-holder").hide();
      $("#unanswered-holder").hide();
      $("#restart-holder").hide();
  }
  function displayQuestion () {
      hideResults();
      $("#answer-holder").hide();
      $("#image-holder").hide();
      $("#time-holder").show();
      showHolders();
      $("#question-holder").html(question[count]);
      $("#choice-holder-1").html(firstChoice[count]);
      $("#choice-holder-2").html(secondChoice[count]);
      $("#choice-holder-3").html(thirdChoice[count]);
      $("#choice-holder-4").html(fourthChoice[count]);
  
  // Hover CSS
      $("#choice-holder-1").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
      $("#choice-holder-2").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
      $("#choice-holder-3").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
      $("#choice-holder-4").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
  }
  $("#choice-holder-1").on("click", checkAnswer) 
  $("#choice-holder-2").on("click", checkAnswer)
  $("#choice-holder-3").on("click", checkAnswer)
  $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
  function checkAnswer() {

      hideHolders();

      if($(this).text() === answer[count]) {
          stopTime();
          isSelected = true;
          $("#answer-holder").show();
          $("#answer-holder").html("Right! The answer is: " + answer[count]);
          displayImage();
          correct++;
          count++;
      }
      else {
          stopTime();
          isSelected = true;
          $("#answer-holder").show();
          $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
          displayImage();
          incorrect++;
          count++;
      } 

      checkGameEnd();  
  }

// Chekc End Game Function
  function checkGameEnd() {
      if(count === question.length) {
          $("#time-holder").hide();
          showResults();
          count = 0;
          $(".start").show();
          $(".start").on("click", function() {
              resetResults();
              startGame();
          });
      }
  }

  function resetTime() {
      time = 31;
  }

  function displayTime() {
      time--;
      $("#time-holder").html("Time remaining: " + time);
    
          if(time <= 0) {
              hideHolders();
              stopTime();
              $("#answer-holder").show();
              $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
              displayImage();
              unanswered++;
              count++;
              checkGameEnd();
          }
  }

  function startTime() {
      clearInterval(ticker);
      ticker = setInterval(displayTime, 1000);
  }
  function stopTime() {
      clearInterval(ticker);
      resetTime();
      if(count < question.length - 1) {
          setTimeout(startTime, 2000);
          setTimeout(displayQuestion, 3000);
      }
  }

  resetTime();

// Display Images With Answer
  function displayImage() {
      if(count === 0) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/cougar.jpg">');
      }
      else if(count === 1) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/truckdriver.jpg">');
      }
      else if(count === 2) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/uss_enterprise.jpg">');
      }
      else if(count === 3) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/alternates.gif">');
      }
      else if(count === 4) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/goosedown.jpg">');
      }
      else if(count === 5) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="https://media.giphy.com/media/yx0JMbLoVvqA8/giphy.gif">')
      }
      else if(count === 6) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/topgunkelly.jpg">');
      }
      else if(count === 7) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/riptonyscott.jpg">');
      }
  }

// Show Results Function   
  function showResults() {
      $("#correct-holder").show();
      $("#correct-holder").html("Correct: " + correct);
      $("#incorrect-holder").show();
      $("#incorrect-holder").html("Incorrect: " + incorrect);
      $("#unanswered-holder").show();
      $("#unanswered-holder").html("Unanswered: " + unanswered);
      $("#restart-holder").show();
      $("#restart-holder").html("Click Start above to play again!");
  }

// Reset Results Function 
  function resetResults() {
      correct = 0;
      incorrect = 0;
      unanswered = 0;
  }

// Start Game Function
  function startGame() {
      $(".start").hide();
      startTime();
      displayQuestion();
  }

// Start Game On Click
$(".start").on("click", function() {
  startGame();
});
});