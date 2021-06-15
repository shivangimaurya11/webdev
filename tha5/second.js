function one(a)
{
    console.log(Array. isArray(a));
}
x='w3resources';
y=[1,2,4,0];
one(x);
one(y);
function clone(b)
{
 a=b.slice();
console.log(a);
}
m=[1,2,4,0];
n=[1,2,[4,0]];
clone(m);
clone(n);
function three(p,q)
{
    if(p==null)
    return [];
    else if(q==null)
    return p[0];
    else if(q<0)
    return [];
    else
    return a.slice(0,q);
}
console.log(three([7,9,0,-2]));
console.log(three([],3));
console.log(three([7,9,0,-2],3));
console.log(three([7,9,0,-2],6));
console.log(three([7,9,0,-2],-3));