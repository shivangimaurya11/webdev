a='w3resource';
b=[1, 2, 4, 0];
function one(a)
{
    console.log(Array.isArray(a));

}
one(a);
one(b);
function two(b)
{
    x=b.slice(0);
    console.log(x);
}
c=[1, 2, 4, 0]
d=[1, 2, [4, 0]]
two(c);
two(d);
function three(x,y)
{
    if(x==null)
    console.log("[]");
    else if(y==null)
    console.log(x[0]);
    else if(y<0)
    console.log("[]");
    else
    console.log(x.slice(0,y));
}
e=[7, 9, 0, -2];
f=[];
three(e);
three(f,3);
three(e,3);
three(e,6);
three(e,-3);
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count=0,max=0,c,d;
for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr1.length;j++)
    {
        if(arr1[i]==arr1[j])
        {
            count++;
            c=arr1[i];
        }
    }
    if(max<count)
    {
        max=count;
        d=c;
    }
    count=0;
}
console.log(d,max,"times");