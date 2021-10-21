#include <iostream>

class Rick
{
    public:
        Rick never()
        {
            std::cout << "Never ";
            return *this;
        }

        Rick gonna()
        {
            std::cout << "gonna ";
            return *this;
        }

        Rick give()
        {
            std::cout << "let ";
            return *this;
        }

        Rick you()
        {
            std::cout << "you ";
            return *this;
        }

        void up()
        {
            std::cout << "down!" << std::endl;
        }
};

int main() {
    Rick rick;
    rick.never().gonna().give().you().up();
    return 0;
}
