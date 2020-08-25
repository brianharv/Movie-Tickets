function BoxOffice () {
  this.tickets = [];
}
BoxOffice.prototype.addTicket = function (ticket) {
  this.tickets.push(ticket)
}
//Business Logic for Ticket------
function Ticket(Time, Age, nameOfMovie) {
  this.time = Time,
  this.age = Age,
  this.nameOfMovie = nameOfMovie;
}

function price(){
  if Age <= 12 
}

Ticket.prototype.ticketOutput = function() {
  return this.time + this.age + this.nameOfMovie;
}