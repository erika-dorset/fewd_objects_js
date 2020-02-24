function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.rooms - this.booked;
    };
}

var clyatonHotel = new Hotel('Clayton', 128, 25);
var lemonHotel = new Hotel('Lemon', 76, 14 )

console.log(clyatonHotel, lemonHotel);