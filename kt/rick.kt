class Rick {
    fun never(): Rick {
        print("Never ")
        return this
    }

    fun gonna(): Rick {
        print("gonna ")
        return this
     }

    fun let(): Rick {
        print("let ")
        return this
    }

    fun you(): Rick {
        print("you ")
        return this
    }

    fun down() = println("down!")
}

fun main() {
    val rick = Rick()
    rick.never().gonna().let().you().down()
}
