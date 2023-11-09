let final = 0
let list: number[] = []
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= final; index++) {
        basic.showNumber(index)
        list.push(9 - index)
    }
})
input.onButtonPressed(Button.AB, function () {
    final = 9
})
input.onButtonPressed(Button.B, function () {
    for (let value of list) {
        basic.showNumber(value)
    }
})
input.onGesture(Gesture.Shake, function () {
    list = [10, 11]
})
