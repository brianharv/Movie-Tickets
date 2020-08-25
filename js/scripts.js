// function BoxOffice () {
//   this.tickets = [];
// }
// BoxOffice.prototype.addTicket = function (ticket) {
//   this.tickets.push(ticket)
// }


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


Ticket.prototype.ticketOutput = function() {
  return this.time + this.age + this.nameOfMovie + this.Price;
}

//get inputs
//pass inputs into ticket
//pass inputs through the price function

