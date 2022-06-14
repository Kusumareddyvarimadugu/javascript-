<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Document</title>
    </head>

<body>
    <script>
        var num=192;
        var sum=0;
        document.write('Number:'+num+"<br>");
        while(num!=0){
            sum+=num%10;
            num=praseInt(num/10);
        }
        document.write("sum of digit number is"+sum);
    </script>
</body>
</html>