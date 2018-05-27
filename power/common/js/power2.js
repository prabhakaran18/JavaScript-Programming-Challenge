function power(n) {
    var n,i,count = 0,sum=2;
    i=sum;
    while(i<=n)
    {
        count++;
        sum=sum*2;
        i=sum;
    }
    return count;
}