input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G A C5 B D ", 60)
    music.playMelody("A F A C5 A B G D ", 296)
    music.playTone(262, music.beat(BeatFraction.Breve))
    music.playMelody("C F C5 B G C5 A G ", 303)
    music.playMelody("C5 A B C5 B A C5 B ", 277)
    music.playMelody("C D E D F A C5 B ", 120)
    music.playMelody("C5 B A F D F C5 A ", 159)
    music.playMelody("E F A C5 B A C5 A ", 229)
    music.playMelody("C D E G F A B C5 ", 300)
    music.playMelody("B G C5 A E A C5 D ", 381)
    music.playMelody("C5 B C5 B C5 B G E ", 478)
    music.playMelody("C5 A E D C C C C ", 500)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        # # . # #
        # . . # #
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # # . # #
        . . . . #
        . . . . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("- G G B - G A - ", 120)
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 2961, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.pause(1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1957, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
basic.forever(function () {
	
})
