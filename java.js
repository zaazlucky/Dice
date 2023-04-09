image=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var n = Math.random();
n=n*5;
n=Math.floor(n);
document.querySelector(".img1").setAttribute("src",image[n]);
var m = Math.random();
m=m*6;
m=Math.floor(m);
document.querySelector(".img2").setAttribute("src",image[m]);
if(n>m)
{
    document.querySelector("h1").innerHTML="🚩 1st is winner!";
}
else if (n==m)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else
{
    document.querySelector("h1").innerHTML="2nd is winner! 🚩";
}