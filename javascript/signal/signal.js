var r=0, o=0, g=0, atm=0;

function automatic()
{
	if(atm==0)
	{
		atm=1;
		val=(document.getElementById("seconds").value)*1000;
		red();		
	}
}

function stop()
{
	if(atm==1)
	{
		atm=0;
	}
}

function red()
{	
	if(r==0)
	{
		if(g==1||o==1)
		{
			document.getElementById("red").src="images/redon.jpg";
			document.getElementById("green").src="images/greenoff.jpg";
			document.getElementById("orange").src="images/orangeoff.jpg";
			r=1;
			o=0;
			g=0;		
		}
		else if (g==0&&o==0)
		{
			document.getElementById("red").src="images/redon.jpg";			
			r=1;
		}
	}	
		
	else
	{
		document.getElementById("red").src="images/redoff.jpg";
		r=0;
	}
	if (atm==1)
	{
		var t=setTimeout("green()",val);
	}
}

function orange()
{
	if(o==0)
	{
		if(r==1||g==1)
		{
			document.getElementById("orange").src="images/orangeon.jpg";
			document.getElementById("green").src="images/greenoff.jpg";
			document.getElementById("red").src="images/redoff.jpg";
			r=0;
			o=1;
			g=0;		
		}
		else if (g==0&&r==0)
		{
			document.getElementById("orange").src="images/orangeon.jpg";			
			o=1;
		}
	}
	else
	{
		document.getElementById("orange").src="images/orangeoff.jpg";
		o=0;
	}
	if (atm==1)
	{
		var t=setTimeout("red()",val);
	}
}

function green()
{
	if(g==0)
	{
		if(r==1||o==1)
		{
			document.getElementById("green").src="images/greenon.jpg";
			document.getElementById("red").src="images/redoff.jpg";
			document.getElementById("orange").src="images/orangeoff.jpg";
			r=0;
			o=0;
			g=1;		
		}
		else if (r==0&&o==0)
		{
			document.getElementById("green").src="images/greenon.jpg";			
			g=1;
		}
	}	
	else
	{
		document.getElementById("green").src="images/greenoff.jpg";
		g=0;
	}
	if (atm==1)
	{
		var t=setTimeout("orange()",val);
	}

}