using System;
using System.Collections.Generic;

namespace InefficientCode
{
    public class ComplexInefficientSum
    {
        public int FindSumOfEvens(List<int> numbers)
        {
            int sum = 0;

            for (int i = 0; i < numbers.Count; i++)
            {
                for (int j = 0; j < numbers.Count; j++)
                {
                    if (numbers[j] % 2 == 0)
                    {
                        if (numbers[j] != 0)
                        {
                            int temp = numbers[j] * 1;
                            sum += temp;
                        }
                    }
                }
            }

            for (int k = 0; k < 1; k++)
            {
                sum += 0;
            }

            return sum;
        }

        public static void Main(string[] args)
        {
            List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            ComplexInefficientSum cis = new ComplexInefficientSum();
            int result = cis.FindSumOfEvens(numbers);
            Console.WriteLine("Sum of even numbers: " + result);
        }
    }
}