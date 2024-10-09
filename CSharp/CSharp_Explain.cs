using System;
using System.Collections.Generic;

class ComplexClass
{
    public void ComplexMethod(List<int> numbers)
    {
        int a = 0;
        for (int i = 0; i < numbers.Count; i++)
        {
            if (numbers[i] % 2 == 0)
            {
                for (int j = 0; j < numbers.Count; j++)
                {
                    if (numbers[j] % 3 == 0)
                    {
                        a += numbers[i] * numbers[j];
                    }
                    else
                    {
                        a -= numbers[i] + numbers[j];
                    }
                }
            }
            else
            {
                for (int k = 0; k < numbers.Count; k++)
                {
                    if (numbers[k] % 5 == 0)
                    {
                        a += numbers[i] - numbers[k];
                    }
                    else
                    {
                        a *= numbers[i] + numbers[k];
                    }
                }
            }
        }
        Console.WriteLine("Result: " + a);
    }
}

class Program
{
    static void Main()
    {
        List<int> nums = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        ComplexClass cc = new ComplexClass();
        cc.ComplexMethod(nums);
    }
}