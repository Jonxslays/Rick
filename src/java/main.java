class Rick {
    public Rick never() {
        System.out.print("Never ");
        return this;
    }

    public Rick gonna() {
        System.out.print("gonna ");
        return this;
    }

    public Rick give() {
        System.out.print("let ");
        return this;
    }

    public Rick you() {
        System.out.print("you ");
        return this;
    }

    void up() {
        System.out.println("down!");
    }

    public static void main(String[] args) {
        new Rick().never().gonna().give().you().up();
    }
}