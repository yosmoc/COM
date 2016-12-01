const SerialPort = require('serialport')
const port = new SerialPort("/dev/tty.usbserial-FTGXR6TY",
  { baudrate: 115200 }
)

port.on('open', err => {
  if (err) {
    return console.log('Error: ', err.message)
  } else {
    port.on('data', data => {
      console.log('Data received: ' + data)
    })

    port.write('main screen turn on', err => {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
    })
  }
})
