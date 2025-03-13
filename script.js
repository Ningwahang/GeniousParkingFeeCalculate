


function calculateParkingFee() {
    const parkingType = document.getElementById('parkingType').value;
    const entryTime = document.getElementById('entryTime').value;
    const exitTime = document.getElementById('exitTime').value;

    if (!entryTime || !exitTime) {
        document.getElementById('result').innerText = "Please enter both entry and exit times.";
        return;
    }

    const entryDate = new Date(`1970-01-01T${entryTime}:00`);
    const exitDate = new Date(`1970-01-01T${exitTime}:00`);

    // If exit time is before entry time, assume it means the next day
    if (exitDate < entryDate) {
        exitDate.setDate(exitDate.getDate() + 1);
    }

    const totalMinutes = (exitDate - entryDate) / (1000 * 60);
    const parkingFee = calculateFee(parkingType, totalMinutes);
    
    document.getElementById('result').innerText = `Total Parking Fee: $${parkingFee.toFixed(2)}`;
}

function calculateFee(parkingType, minutes) {
    let fee = 0;

    switch (parkingType) {
        case 'firstTimeCar':
            if (minutes <= 30) {
                return 0; // First 30 minutes free
            } else {
                const chargeableMinutes = minutes - 30;
                const chargeableHours = Math.ceil(chargeableMinutes / 60);
                return chargeableHours * 20; // $20 per hour
            }

        case 'secondTimeCar':
            const chargeableMinutesCar = minutes;
            const chargeableHoursCar = Math.ceil(chargeableMinutesCar / 60);
            return chargeableHoursCar * 20; // $20 per hour

        case 'firstTimeVan':
            if (minutes <= 20) {
                return 0; // First 20 minutes free
            } else {
                const chargeableMinutesVan = minutes - 20;
                const chargeableHoursVan = Math.ceil(chargeableMinutesVan / 60);
                return chargeableHoursVan * 30; // $30 per hour
            }

        case 'secondTimeVan':
            const chargeableMinutesV = minutes;
            const chargeableHoursV = Math.ceil(chargeableMinutesV / 60);
            return chargeableHoursV * 30; // $30 per hour

        case 'agentCar':
            const chargeableMinutesAgent = minutes;
            const chargeableHoursAgent = Math.ceil(chargeableMinutesAgent / 60);
            return chargeableHoursAgent * 20; // $20 per hour

        case 'residentCharging':
            const chargeableMinutesResident = minutes;
            const chargeableHoursResident = Math.ceil(chargeableMinutesResident / 60);
            return chargeableHoursResident * 10; // $10 per hour

        case 'visitorCharging':
            const chargeableMinutesVisitor = minutes;
            const chargeableHoursVisitor = Math.ceil(chargeableMinutesVisitor / 60);
            return chargeableHoursVisitor * 30; // $30 per hour

        default:
            return 0;
    }
}


