input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
})
basic.forever(function () {
	
})
