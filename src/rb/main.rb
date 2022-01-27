class Rick
    def never()
        print "Never "
        self
    end
    def gonna()
        print "gonna "
        self
    end
    def give()
        print "let "
        self
    end
    def you()
        print "you "
        self
    end
    def up()
        print "down!"
    end
end

rick = Rick.new
rick.never().gonna().give().you().up()