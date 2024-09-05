class Patient {
    constructor(name, age, patientID) {
        this.Name = name;
        this.Age = age;
        this.PatientID = patientID;
    }
}

class InPatient extends Patient {
    constructor(name, age, patientID, roomNumber) {
        super(name, age, patientID);
        this.RoomNumber = '';
    }

    assignRoom(roomNumber) {
        return {
            name        : this.Name,
            age         : this.Age,
            patientID   : this.PatientID,
            roomNumber  : roomNumber
        }
    }
}

class OutPatient extends Patient {
    constructor(name, age, patientID, appointmentDate) {
        super(name, age, patientID)
        this.AppointmentDate = ''
    }

    rescheduleAppointment(date) {
        return {
            name             : this.Name,
            age              : this.Age,
            patientID        : this.PatientID,
            appointmentDate  : date
        }
    }
}


const inPatient = new InPatient('John Doe' , 45 , 'P001')
console.log(inPatient.assignRoom("101A"))


const outPatient = new OutPatient('Jane Smith' , 30 , 'P002')
console.log(outPatient.rescheduleAppointment('2024-09-10'))