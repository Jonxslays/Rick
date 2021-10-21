class Rick:
    def never(self) -> "Rick":
        print("never ", end="")
        return self

    def gonna(self) -> "Rick":
        print("gonna ", end="")
        return self

    def give(self) -> "Rick":
        print("let ", end="")
        return self

    def you(self) -> "Rick":
        print("you ", end="")
        return self

    def up(self) -> None:
        print("down!")

rick = Rick()
rick.never().gonna().give().you().up()
