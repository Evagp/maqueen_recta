input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(2000)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    maqueen.motorStop(maqueen.Motors.All)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 4))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(2000)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    maqueen.motorStop(maqueen.Motors.All)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 4))
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
basic.forever(function () {
	
})
