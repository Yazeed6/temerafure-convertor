const celsiusEL = document.getElementById("celsius")
const fahrenheitEL = document.getElementById("fahrenheit")
const kelvinEL = document.getElementById("kelvin")

function compt(event){ 
                    /* ال + يمنع ادخال نص */
    const currenValue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            kelvinEL.value     = (currenValue + 273.15).toFixed(2)
            fahrenheitEL.value = (currenValue * 1.8 + 32).toFixed(2)
            break;

        case "fahrenheit":
            celsiusEL.value = ( (currenValue - 32) / 1.8).toFixed(2)
            kelvinEL.value  = ( (currenValue - 32) / 1.8 + 273.15).toFixed(2)
            
            break;

        case "kelvin":
            celsiusEL.value    = (currenValue - 273.15).toFixed(2)
            fahrenheitEL.value = ((currenValue - 273.15) * 1.8 + 32) .toFixed(2)
            break;

        default:
            break;
    }
}