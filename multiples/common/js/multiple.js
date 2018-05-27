function multiple(n) {
    var n,i,sum = 0;
    for(i=3; i < n; ++i)
    {
      if(i>=3 && i%3==0)
         { 
            sum += i;
                }
      else if(i>= 5 && i%5==0)
         {
            sum +=i;
             }
    }
    return sum;
}