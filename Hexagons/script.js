function getHexCoordinates(initialcoordx, initialcoordy, length)
{
	 var pointsList=[];
	 pointsList[0]=[initialcoordx,initialcoordy];

	 var x = length/2 + initialcoordx;
	 var x1=length/2;
	 var y = length*Math.sqrt(3)/2 + initialcoordy;
	 var y1 = length*Math.sqrt(3)/2;
	 pointsList[1]=[x,y];

	 x = x+length;
	 pointsList[2]=[x,y];

	 x = x+x1;
	 pointsList[3]=[x,initialcoordy];

	 x = x-x1;
	 pointsList[4]=[x,(-y1+initialcoordy)];

	 x = x-length;
	 pointsList[5]=[x,(-y1+initialcoordy)];

	 return pointsList;
}