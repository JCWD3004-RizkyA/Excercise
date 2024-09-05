class Ticket {
    constructor (movieTittle,seatNumber,ticketID) {
        this.MovieTittle = movieTittle;
        this.SeatNumber = seatNumber;
        this.TicketID = ticketID;
    }

    displayInfo() {
        return 'Movie : ' + this.MovieTittle +' Seat : ' + this.SeatNumber + 'TicketID : ' +this.TicketID
    }
}


class StandardTicket extends Ticket {
    constructor (movieTittle, seatNumber, ticketID ,AllSnacks) {
        super(movieTittle,seatNumber,ticketID)
        this.AllSnacks = ''
    
    }

    chooseSnackPackage(snacks) {
        
        this.AllSnacks += snacks + ' ' 
        return 'Snack Package for TicketID ' + this.TicketID + ' is set to ' + this.AllSnacks
    }
        
    
}

class VIPTicket extends Ticket {
    constructor (movieTittle, seatNumber, ticketID,hasAccess) {
        super(movieTittle,seatNumber,ticketID)
        this.hasAccess = false;
    
    }

    grantLoungeAccess(hasAccess) {
        if(hasAccess) {
            return 'Lounge access for ' + this.TicketID + ' is Granted' 
        } else {
            return 'Lounge access for ' + this.TicketID + ' is Not Granted' 
        }

    }
    
}


const standardTicket = new StandardTicket('Inception' , 'A12', 'ST123')
console.log(standardTicket.displayInfo());
console.log(standardTicket.chooseSnackPackage('PopCorn & Soda'))


const vipTicket = new VIPTicket('Interstallar' , 'B1', 'VT456')
console.log(vipTicket.displayInfo());
console.log(vipTicket.grantLoungeAccess(false))