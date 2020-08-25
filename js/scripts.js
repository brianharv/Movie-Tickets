function BoxOffice () {
  this.tickets = [];
}

//Business Logic for Ticket------
function Ticket(Time, Age, movieAge) {
  this.time = Time,
  this.age = Age,
  this.movieAge = movieAge;
}

Ticket.prototype.discount = function() {
  if (this.age >= 65 || this.age < 12) {
    return true;
  } else {
    return false;
  };
}

  
Ticket.prototype.isNew = function () {
    if (this.movieAge <= 2) {
      return true;
    } else {
      return false;
    }
  };

Ticket.prototype.Time = function () {
  if (this.time < 12) {
    return true;
  } else {
    return false;
  }
};


Ticket.prototype.price = function () {
  let start = 20;

  if (this.discount() === true) {
    start = start - 5;
  }

  if (this.isNew() === true) {
    start = start + 5;
  } 

  if (this.Time() === true) {
    start = start - 5;
  }
  return start;
}


function attachEventListeners () {
  $(".btn-primary").click(function(){
    $("#output").hide().fadeIn();
  });
};  


//UI Logic ---------
$(document).ready(function(){
  attachEventListeners();
  $("#Tickets").submit(function(event){
    event.preventDefault();
    let Age = $("input#ageInput").val();
    let Time = $("input#timeInput").val();
    let movieAge = $("input#movieInput").val();
    let finalTicket = new Ticket(Time, Age, movieAge);
    let finalPrice = finalTicket.price();
    $("input#ageInput").val("");
    $("input#timeInput").val("");
    $("input#movieInput").val("");
    $("#output").fadeIn().text("Your total movie price is: $" + finalPrice + ".00");
    });
});

