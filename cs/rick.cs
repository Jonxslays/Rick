using System;

namespace Rick
{
    public class Rick
    {
        public Rick Never()
        {
            Console.Write("Never ");
            return this;
        }
        public Rick Gonna()
        {
            Console.Write("gonna ");
            return this;
        }
        public Rick Give()
        {
            Console.Write("let ");
            return this;
        }
        public Rick You()
        {
            Console.Write("you ");
            return this;
        }
        public void Up() => Console.WriteLine("down!");
    }
    class Program
    {
        static void Main(string[] args)
        {
            Rick rick = new Rick();
            rick.Never().Gonna().Give().You().Up();
        }
    }
}
