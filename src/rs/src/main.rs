struct Rick {}

impl Rick {
    fn new() -> Self {
        Rick {}
    }

    fn never(&self) -> &Self {
        print!("Never ");
        &self
    }

    fn gonna(&self) -> &Self {
        print!("gonna ");
        &self
    }

    fn give(&self) -> &Self {
        print!("let ");
        &self
    }

    fn you(&self) -> &Self {
        print!("you ");
        &self
    }

    fn up(&self) {
        println!("down!");

    }
}

fn main() {
    let rick = Rick::new();
    rick.never().gonna().give().you().up();
}
