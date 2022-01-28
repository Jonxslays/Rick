{
    class Rick {
        never() {
            process.stdout.write("never ");
            return this;
        }

        gonna() {
            process.stdout.write("gonna ");
            return this;
        }

        give() {
            process.stdout.write("let ");
            return this;
        }

        you() {
            process.stdout.write("you ");
            return this;
        }

        up() {
            process.stdout.write("down!\n");
        }
    }

    const rick = new Rick();
    rick.never().gonna().give().you().up();
}
