1\. Line 11 will print 3 because even though i was declared in the for block, var pierces through the for block. \
2. Line 12 will print 150 because even though discountedPrice was declared in the for block, var pierces through the for block. \
3. Line 13 will print 150 because finalPrice is a function-level variable, so it can be used anywhere in the function.\
4. The function will return the array [50, 100, 150] because discounted is a function-level variable, so it retains its value through each iteration of the for loop. \
5. Line 11 will produce an error because i was declared in the for loop using let, so it is only visible in the for loop.\
6. Line 12 will produce an error because discountedPrice was declared in the for loop using let, so it is only visible in the for loop.\
7. Line 13 will print 150 because finalPrice is a function-level variable, so it can be used anywhere in the function.\
8. The function will return the array [50, 100, 150] because discounted is a function-level variable, meaning it can be modified anywhere in the function.\
9. Line 11 will produce an error because i was declared in the for loop using let, so it is only visible in the for loop.\
10. Line 12 will produce an error because discountedPrice was declared in the for loop using const, which means it is only visible in the for loop.\
11. Line 13 will produce an error because finalPrice is a const variable, meaning it cannot be reassigned a value in the for loop.\
12. Assuming line 7 is gone since it causes the error, then the function will return the array [0,0,0]. Since final price is a const function-level variable, it can never change from the value 0. Therefore, the array is simply filled with 0's.\
13. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]\
14. A. 32 because the integer 2 is converted to '2', and then string concatenation is performed.
    B. 1 because the subtraction overrides the string '3' and calculates as an integer.
    C. 3 because null numericly converts to 0.
    D. 3null because null is converted to the string 'null', and then string concatenation is performed.
    E. 4 because true numericly converts to 1.
    F. 0 because false numericly converts to 0, and null numericly converts to 0.
    G. 3undefined because undefined is converted to the string 'undefined', and then string concatenation is performed.
    H. NaN because JS can't do arithmetic subtraction between two strings.\
15. A. true because string '2' becomes the number 2. 
    B. false because comparing the first characters, '2' is greater than '1'.
    C. true because JS converts '2' to the interger 2.
    D. false because type conversion is not performed, and a string is not the same as an integer.
    E. false because true is numericly converted to 1, which is not 2.
    F. true because Boolean(2) is true, and === compares the equality of true and true which are the same. \
16. === checks the equality without type conversion, while == checks the equality by converting operands of different types to numbers.\
17. 'How are you?' gets printed because true is converted to the integer 1, which is not equal to the integer 2. For the else if condition, the integer 2 is converted to the boolean true, so the appropriate string is printed. \
19. The result is [6,8,10]. In the first iteration of the loop, the new array will push the value of doSomething(1, function(1 + 2)). The new callback refers to the function in the for loop, so it executes function(3) = 6. This process repeats itself for the length of the array and then finally returns the new array.\
21. 1
    4
    3
    2
