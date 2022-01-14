import "dart:io";

class Rick {
    Rick never() {
        stdout.write("Never ");
        return this;
    }

    Rick gonna() {
        stdout.write("gonna ");
        return this;
    }

    Rick let() {
        stdout.write("let ");
        return this;
    }

    Rick you() {
        stdout.write("you ");
        return this;
    }

    void down() => print("down!");
}

void main() {
    Rick rick = Rick();
    rick.never().gonna().let().you().down();
}
