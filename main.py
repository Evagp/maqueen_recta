def on_button_pressed_a():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 100)
    basic.pause(2000)
    maqueen.motor_stop(maqueen.Motors.ALL)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
