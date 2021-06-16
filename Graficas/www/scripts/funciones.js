//var dataFunciones:  [
var funciones =  [
    {
	    num: "x*x+y*y",
	    den: "3"
    },
    {
		num: "2*Math.sqrt(Math.abs(y*y*x*x))"
    },
    {
        num: "230*x",
		den: "y"
    },
    {
		num:  "x*x*x*x*x*y - y*y*y*y*y*x",
		den:  "500000000"
    },
    {
		num:  "x*x*x*y + y*y*y*x",
		den:  "10000"
    },
    {
        num:  "x*x*x*x + y*y*y*y",
        den:  "10*Math.sqrt(Math.abs(x*x*x - y*y*y))"
    },
    {
		num:  "100*(x-y)*(x+y)",
		den:  "Math.sqrt(Math.abs(x*y))"
    },
    {
        num:  "10*(Math.cos(x)*y+x*Math.cos(y))",
        den:  "Math.log(Math.abs(x+y+1))"
    },
    {
		num:  "500*Math.sqrt(Math.abs(y*y+x*x))",
		den:  "1"
    },
    {
        num:  "x*x-y*y",
        den:  "Math.sin(x-y)*y"
    },
    {
		num:  "Math.pow(x,4)",
		den:  "x*y"
    },
    {
		num:  "Math.pow(x,2)+Math.pow(y,2)",
		den:  "20*Math.cos(y)"
    },
    {
		num:  "Math.sqrt(Math.abs(y*y*x*x))",
		den:  "10*Math.sin(y)"
    },
    {
        num:  "Math.cos(x+y)*5000000",
        den:  "x*x+y*y"
    },
    {
        num:  "120*Math.pow(Math.log(Math.abs(x*y)),3)"
    },
    {
        num:  "100*Math.pow(Math.log(Math.abs(x*x*y*y)),3)",
    },
    {
        num:  "Math.pow(Math.log(Math.abs(x*x+y*y)),3)",
        den:  "1.5*Math.cos(x*x+y*y)"
    },
    {
        num:  "x*x*y*y",
        den:  "5*Math.pow(Math.log(Math.abs(x*x+y*y)),3)"
    },
    {
        num:  "Math.pow(x+y,3)",
        den:  "4*Math.sqrt(Math.abs(x*y))"
    },
    {
        num:  "Math.pow(y*y+x*x,3)", 
        den:  "1"
    },
    {
        num:  "Math.abs(Math.pow(y,2) - Math.sqrt(Math.abs(Math.pow(x,3))))",    
        den:  "0.5"
    },
    {
        num:  "Math.pow(x+y,2)*200",
        den:  "Math.sqrt(Math.abs(2*y+3*x))"
    },
    {
        num:  "x*x*y*y",
        den:  "7*Math.sqrt(Math.abs(9*y*x))"
    },
    {
        num:  "x*x*x*y",
        den:  "30*Math.sqrt(Math.abs(x*x-y*x))"
    },
    {
        num:  "x*x*y*y",
        den:  "40*Math.sqrt(Math.abs(x*x-y*y))"
    },
    {
        num:  "x*x*x*y*y*y",
        den:  "x*y*x*50"
    },
    {
        num:  "x*x*x*x*y*y - y*y*y*y*x*x",
        den:  "200000000"
    },
    {
        num:  "x*x*x*y + y*y*y*x",
        den:  "100*Math.sqrt(Math.abs(y*x))"
    },
    {
        num:  "x*y+x*y - Math.sqrt(Math.abs(y*x*x*x - y*y*y*x))",
        den:  "1"
    },
    {
		num:  "5*(x+y)*(x+y)",
		den:  "Math.sqrt(Math.abs(x*y))"
    },
    {
        num:  "Math.pow(y*y+x*x,3)", 
        den:  "1000000000"
    },
    {
        num:  "Math.pow(x,3)+Math.pow(y,3)",
        den:  "100"
    },
    {
        num:  "100*Math.pow(x+y,3)",
        den:  "x*y"
    },
    {
        num:  "Math.abs(Math.pow(x*y,4)-20*Math.pow(x+y,6))",
        den:  "Math.abs(Math.pow(x*y,3))"
    },
    {
        num:  "x*y",
        den:  "x-y"
    },
    {
        num:  "x*x*x - y*y*y", 
        den:  "256*Math.atan(x-y)"
    },
    {
        num:  "x*x*x*Math.log(Math.abs(y)+1)",
        den:  "Math.abs(x-y)"
    },
    {
        num:  "Math.sqrt(Math.abs(x*y*y+x*x*y))",
        den:  "0.05*y"
    },
    {
        num:  "Math.pow(x*x,2)-Math.pow(13*y,2)+Math.pow(3*y,2)-7*x",
        den:  "x"
    },
    {
        num:  "Math.cos(y)*x*x-y*y*Math.sin(x)",
        den:  "0.1*(3*x-4*y)"
    },
    {
        num:  "Math.pow(Math.abs(Math.cos(y)*y+Math.sin(x)*x),3)",
        den:  "4*x*y-Math.atan(x-y)"
    },
    {
        num:  "(x*x+y*y)*Math.pow(Math.cos(x*x)+Math.sin(y*y),2)",
        den:  "5*(x-y)"
    },
    {
        num:  "3*x*y",
		den:  "Math.log(Math.abs(x-y))"
    },
    {
        num:  "12*(Math.sin(x)*y+x*Math.cos(y))",
        den:  "Math.sqrt(Math.abs(x+y+1))"
    },
    {
        num:  "Math.pow(x*x+y*y,2)",
        den:  "10*(6*x-8*y)"
    },
    {
        num:  "Math.pow(y*y-x*x,2)",
        den:  "15*(x+y)"
    },
    {
        num:  "1000*Math.sqrt(Math.abs(y*y-x*x))"
    },
    {
        num:  "y*y*y+x*x*x",
        den:  "4*Math.sqrt(Math.abs(x+y))"
    },
    {
        num:  "y*y*x*x",
        den:  "2"
    },
    {
        num:  "-y*70 + Math.cos(x)*x*x*y",
        den:  "0.3*x*x-0.3*y*y"
    },
    {
        num:  "x*x*y*y*Math.sin(x-y) + x*y",
        den:  "200*(y-x)"
    },
    {
        num:  "Math.pow(x+x+x,2)-Math.pow(y*y,2)*Math.cos((x*x)/(y*y))",
        den:  "500*(y+x)"
    },
    {
        num:  "(x*x+y*y)*Math.sin(y*x)",
        den:  "60*Math.atan(10*x+5*y)"
    },
    {
        num:  "Math.pow(x*x,2)*Math.cos((x/(y+1)))",
        den:  "500000+(y*x*50)"
    },
    {
        num:  "x*x*x + y*y*y",
        den:  "100*Math.sin(x+y)*(x+y)"
    },
    {
        num:  "x*y",
        den:  "100*Math.cos(y*x)"
    },
    {
        num:  "100*Math.cos(x*y)*Math.log(Math.abs(x/y))",
        den:  "Math.sin(y+x)"
    },
    {
        num:  "x*x - y*y",
        den:  "Math.cos(x*y)*50"
    },
    {
        num:  "x*x - y*y",
        den:  "Math.cos(x+y)*(x+y)"
    },
    {
        num:  "x*x*y + y*y*x",
        den:  "Math.log(Math.abs(x+y+3))*50 + x+y"
    },
    {
        num:  "5000*Math.pow(x+y,2)",
        den:  "(x*x+y*y-x*y)"
    },
    {
        num:  "Math.log(Math.abs(x*x-y*y))*(x+y)*100000",
        den:  "x+y"
    },
    {
        num:  "10000*Math.sqrt(Math.abs((x*x+y*y)*(x+y)))",
        den:  "((3*x*y)-x*x-y*y)"
    },
    {
        num:  "2000000*Math.sin(x*x+y*y)+(x*x*y)",
        den:  "(3*x*x+50*y)"
    },
    {
        num:  "1000000*Math.atan(1000*(x*x+y*y))*Math.pow(x*y,2)",
        den:  "x*y" //-Math.tan(x*x*y*y)",
    },
    {
        num:  "100000*(x+y*x-y)",
        den:  "(Math.atan(x*x+y*y))"
    },
    {
        num:  "(Math.sin(x)*0.8+1)*(x+y*x-y)",
        den:  "(Math.atan(x*y)*(x+y))/(Math.exp(Math.abs(y/x)+1))"
    },
    {
        num:  "10*Math.sqrt(Math.abs((y*x)+(2*x)+0.1))",
        den:  "Math.sqrt(1+Math.abs(y-x)*Math.abs(Math.cos(y)*Math.sin(x)))"
    },
    {
        num:  "x*x-y*y",
        den:  "Math.sin(x*y)*Math.sqrt(Math.abs(x*x+y*y+1))"
    },
    {
  		num:  "Math.pow(x,4)+Math.pow(y,2)",
		den:  "10*(x-y)"
    },
    {
        num:  "20000*(x*x-y*y)",
        den:  "Math.sqrt(Math.abs(x*x+y*y+1))"
    },
    {
        num:  "425*x*y",
        den:  "Math.sqrt(Math.abs(x*x+y*y+1))"
    },
    {
        num:  "30000*(Math.pow(x*y + x*y,3) % 100)",
        den:  "(x*x+y*y)"
    },
    {
        num:  "4*(y*y*y*y - Math.sqrt(Math.abs(3*y*x*x*x)))",
        den:  "2"
    },
    {
        num: "x*x*x*x*x + y*y*y*y*y",
        den: "10000000"
    }
];

//var funciones:  JSON.parse(dataFunciones);
