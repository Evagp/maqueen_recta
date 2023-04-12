input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 4))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 4))
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
