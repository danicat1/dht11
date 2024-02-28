DHT11.setPin(DigitalPin.C16)
basic.forever(function () {
    basic.showString("" + (DHT11.temperature()))
    basic.pause(2000)
    basic.showString("" + (DHT11.humidity()))
    basic.pause(2000)
})
