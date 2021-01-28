1. The bug is that at line 9, num1 and num2 are being concatenated as a string instead of being added together like integers.
2. To fix this bug, I would use the Number(value) function, which converts the string to the number that would represent the string's numeric value. I would use it on both num1 and num2 and then add them up at line 9.


1. citylots.json
2. part2.js
3. 11.7 MB
4. 89 ms
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()
