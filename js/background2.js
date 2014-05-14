var imgObject1 = new Image();
var imgObject2 = new Image();
var imgObject3 = new Image();
var imagesLoaded = 0;
var timeLoaded = 0;

function run(){
	var c=document.getElementById("screen");
	var ctx=c.getContext("2d");
	ctx.font="30px Courier";
	var t = 0;
	
	
	

	imgObject1.onload = function() {
		start(ctx);
	};
	imgObject2.onload = function() {
		start(ctx);
	};
	imgObject3.onload = function() {
		start(ctx);
	};
	imgObject1.src = 'http://i.imgur.com/nHw3bXS.png';//'http://i.imgur.com/oGJScCo.jpg';//'http://i.imgur.com/X0jI12M.jpg';//'http://i.imgur.com/1spChaQ.jpg';
	imgObject2.src = 'http://i.imgur.com/Dc8LYH1.png';//'http://i.imgur.com/jJ1WWJZ.jpg';//'http://i.imgur.com/E45Uq2M.png';
    imgObject3.src = 'http://i.imgur.com/BoQ1LeJ.png';	
	
}
function start(ctx){
	imagesLoaded++;
	if(imagesLoaded<3)
		return;
	timeLoaded = 0;
	
	
	
	var news = new newsCast("Updated ACM website!","Was it down for like half the year?");
	news.addwords("LOOK AT","THE ACM ","WEBSITE");
	news.addfeeder("Some days I just want to watch the world burn");
	//addScene(500, news,ctx);
	var com = new title();
	addScene(15000000, com,ctx);
	

	news = new newsCast("Josh wins! Josh wins!","\"Fear me! FEAR ME! MAHAHAHA\"");
	news.addwords("JOSH WON","HE IS A","HERO");
	news.addfeeder("Did you know that FREEDOM is all that matters?");
	//addScene(5000, news,ctx);
	
	timeoutID = window.setTimeout(function(){
		start(ctx);
	}, timeLoaded);
	
}

function newsCast(title, sub){
	/* Needed Vars for scene */
	this.img = new Array();
	this.imgLoc = ["http://i.imgur.com/nHw3bXS.png","http://i.imgur.com/Dc8LYH1.png","http://i.imgur.com/BoQ1LeJ.png"];
	this.lastScene = null;
	this.nextScene = null;
	this.loading = 0;
	/* Needed Vars for newscast */
	/* Access vars using functions please */
	this.title = title;
	this.sub = sub;
	this.word1 = "";
	this.word2 = "";
	this.word3 = "";
	this.feeder = "";
	
	this.addwords = function(word1,word2,word3) {
		this.word1 = word1;
		this.word2 = word2;
		this.word3 = word3;
	}
	
	this.addfeeder = function(feeder) {
		this.feeder = feeder;
	}
	
	this.setup = function() {
	}
	
	this.run = function(ctx,t) {
		//while(this.loading!=0){}
        displayback(ctx,t, this.img[0]);
		texttalk(ctx,t,this.word3,this.word2,this.word1);
		displayanchor(ctx,t,this.img[1]);
		textheadline(ctx,t,this.title,this.sub);
		displayicon(ctx,t,this.img[2]);
		rendertextfeeder(offScreenContext,t,this.feeder);
		
		refreshIntervalId = window.setInterval(function () {
				textfeeder(ctx,t);
				t = t + 26.0+22*Math.sin(t/800.0);
		}, 33);
		
		return function(){
		clearInterval(refreshIntervalId);
		};
    };
	
}

function colormeup(){
	this.run = function(ctx,t) {
		end();
		var r = 255, g = 255, b = 255;
		var ar = 1+ranA(), ag = 1+ranA(), ab = 1+ranA();
		var t = 1000*Math.random(), at = 1;
		function ranA(){return Math.random()-.5;} 
		ctx.beginPath();
		ctx.moveTo(0,600);
		ctx.lineTo(800,600);
		ctx.lineTo(800,0);
		ctx.lineTo(0,0);
		refreshIntervalId2 = window.setInterval(function () {
			function c(x,a) 
				{return ('0' + Math.floor(127+Math.sin((t*a)*6.28/180) * 127).toString(16)).substr(-2);}
			ctx.fillStyle = '#' + c(r,ar) + c(g,ag) + c(b,ab);
			ctx.fill();
			t += at;
		}, 33); 
		return function(){
			clearInterval(refreshIntervalId2);
			this.img = null;
		};
	};
}

function commercial(){

	/* Needed Vars for scene */
	this.img = new Array();
	this.imgLoc = ["http://i.imgur.com/wmoebV5.png", "http://i.imgur.com/LMFL7o7.gif", "http://i.imgur.com/2keK5ax.png","http://i.imgur.com/1qRVA9Q.png"];
	this.lastScene = null;
	this.nextScene = null;
	this.loading = 0;
	
	
	this.title = "";
	this.sub = "";
	this.setup = function() {
		this.imgLoc = new Array();
		var site = "art/";
		for (i=0;i<25;i++) 
		{
			number = ""+(Math.floor(Math.random() * 646));
			while(number.length < 3)
				number = "0"+number;
			this.imgLoc[i] = site + number + ".png";
			//alert(this.imgLoc[i]);	
			
		}
	}

	this.run = function(ctx,t) {
		var img = this.img;
		ctx.beginPath();
		ctx.moveTo(0,600);
		ctx.lineTo(800,600);
		ctx.lineTo(800,0);
		ctx.lineTo(0,0);
		count = 0;
		refreshIntervalId2 = window.setInterval(function() {
			function c(num) 
				{return ('0' + Math.floor(num).toString(16)).substr(-2);}
			function i(num)
				{return ('0' + Math.floor(255-num).toString(16)).substr(-2);}
			R = Math.random() * 255;
			B = Math.random() * 255;
			G = Math.random() * 255;
				
				
			Color = '#' + c(R) + c(G) + c(B);
			iColor = '#' + i(R) + i(G) + i(B);
			ctx.fillStyle = Color;
			ctx.fill();
			var num = Math.floor(Math.random()*img.length);
			if(img[count]!=null)
				ctx.drawImage(img[count++],Math.random() * 300+100,Math.random() * 150+70);
			
			
			ctx.fillStyle = iColor;
			ctx.font="50px Bold Courier";
			ctx.fillText("Whats your favorite pokemon?",10,70);
			t += 30;
		}, 600); 
		return function(){
			clearInterval(refreshIntervalId2);
			this.img = null;
		};
	};
}

function title(){

	/* Needed Vars for scene */
	this.img = new Array();
	this.imgLoc = ["http://i.imgur.com/nHw3bXS.png"];
	this.lastScene = null;
	this.nextScene = null;
	this.loading = 0;
	
	
	this.title = "";
	this.sub = "";
	this.setup = function() {
		
	}

	this.run = function(ctx,t) {
		var img = this.img;
		var letterS = [1,0, 2,0, 3,0, 0,1, 0,2, 1,2, 2,2, 3,2, 3,3,   2,4, 1,4, 0,4];
		var letterP = [0,0, 1,0, 2,0, 0,1, 0,2, 1,2,2,2, 2,1, 0,3,0,4];
		var letterE = [0,0, 1,0, 2,0, 0,1, 0,2, 1,2, 0,3,0,4,1,4,2,4];
		var letterD = [0,0, 1,0,2,0,  0,1, 0,2, 0,3,0,4,1,4 ,2,4 ,3,1,3,2,3,3];
		
		var letterA = [0,0, 1,0, 2,0, 3,0,2,2, 0,1, 0,2, 1,2, 0,3, 0,4, 3,4,3,1,3,2,3,3];
		var letterC = [0,0, 1,0, 2,0, 0,1, 0,2, 0,3,0,4,1,4,2,4];
		var letterM = [0,0, 2,0,1,0, 0,2, 0,1, 2,1,2,2,2,3,2,4, 4,4,  0,3, 0,4 ,3,0 ,4,1 ,4,2, 4,3, 4,4, 4,4];
		
		count = 0;
		S1 = Math.random()*500+500;
		S2 = Math.random()*500+500;
		S3 = Math.random()*500+500;
		function ranA(){return Math.random()-.5;} 
		var ar = 1+ranA(), ag = 2+ranA(), ab = 2+ranA();
		refreshIntervalId2 = window.setInterval(function() {
			R1 = 200;
			G1 = 200;
			B1 = 200;
			R2 = 138;
			G2 = 181;
			B2 = 255;
			
			
			
			
			Color2 = '#A0C8FF';
			
			
			function c(num,a) 
				{return ('0' + Math.floor((num-(num/3))+Math.sin((t*a)*6.28/18000) *(num/3)).toString(16)).substr(-2);}
			
			function l(letter,x,y){
				
				for(var q=0;q<letter.length;q+=2)
					if(letter[q]==x&&letter[q+1]==y) return 80-50*Math.floor(Math.sin(((t*ar+t*ag+t*ab)/3-1)*6.28/18000)); 
				return 0;} 
			function a(num,x,y) 
				{	return num;
				
				}
			function m(num,x,y) 
				{return num - 4+4*Math.sin(12  +(t/S1-y*Math.cos(t/4300)+Math.floor(x*Math.tan(t/4100))))
							 - 4+4*Math.cos(12  +(t/S1-Math.floor(y*Math.tan(t/4300))+x*Math.sin(t/4100)))
							//- 4+4*Math.cos(152 +(t/S2-y*Math.cos(t/4300)+x*Math.sin(t/1200)))//;}
							- 2+Math.floor(2*Math.atan(234 +(t/15-y/x)));}
			function newColor(x,y) 
				{return '#' + c(a(m(R1,x,y),x,y),ar) + c(a(m(G1,x,y),x,y),ag) + c(a(m(B1,x,y),x,y),ab);}	
				
			
			
			pixelSize = 10;
			for(var x = 1;x<595/pixelSize;x++)
				for(var y = 1;y<595/pixelSize;y++)
				{
					ctx.fillStyle = newColor(x,y);
					ctx.fillRect(x*pixelSize-pixelSize,y*pixelSize-pixelSize,pixelSize,pixelSize);
				}
			
			//if(img[0]!=null)
			//	ctx.drawImage(img[0],10,10);
			


			t += 30;
		}, 60); 
		return function(){
			clearInterval(refreshIntervalId2);
			this.img = null;
		};
	};
}

function blank(){
	this.run = function(ctx,t,end) {
		end();
		ctx.fillStyle = "rgba(0,0,0, 2)";
		ctx.beginPath();
		ctx.moveTo(0,600);
		ctx.lineTo(800,600);
		ctx.lineTo(800,0);
		ctx.lineTo(0,0);
		ctx.fill();
		return function(){
			
		};
	};
}



function addScene(time, refreshCallback, ctx) {
	if(this.end==null)
		this.end = function()
		{};
	if(timeLoaded==0)
		this.last = null;
	if(this.last!=null){
		this.last.nextScene = refreshCallback;
		refreshCallback.lastScene = this.last;
		
		}
	if(this.last==null||this.last.lastScene==null)
	{
		refreshCallback.setup();
		preLoadImg(refreshCallback);
	}
	this.last = refreshCallback;
	
    timeoutID = window.setTimeout(function(){
		
		this.end();
		
		temp = refreshCallback.run(ctx,0);
		if(refreshCallback.nextScene!=null)
		{
			refreshCallback.nextScene.setup();
			preLoadImg(refreshCallback.nextScene);
		}
		//else
		//	alert("LOL");
		this.end = temp;
		
	}, timeLoaded);
	timeLoaded += time;
		
}

function preLoadImg(refreshCallback){
	for (i=0;i<refreshCallback.imgLoc.length;i++) 
	{
		if(refreshCallback.img[i]==null){
			refreshCallback.img[i] = new Image();
			if(refreshCallback.loading!=null)
				refreshCallback.loading += 1;
			refreshCallback.img[i].onload = function() {
				if(refreshCallback.loading!=null)
					refreshCallback.loading -= 1;
				
			};
			refreshCallback.img[i].src = refreshCallback.imgLoc[i] ;
		}
	}
	
	
	//
	
}

function rendertextfeeder(ctx,t,line){
	var speed = 3.0;
	ctx.fillStyle = "rgba(30,30,30, 2)";
	ctx.font="30px Courier";
	ctx.beginPath();
	ctx.moveTo(0,35);
	ctx.lineTo(0,0);
	ctx.lineTo(2800,0);
	ctx.lineTo(2800,35);
	ctx.fill();
	ctx.fillStyle = "rgba(255,255,205, 2)";
	ctx.fillText(line,800,25);
}

function textfeeder(ctx,t){
	var speed = 1;
	
	ctx.drawImage(
	offScreenContext.canvas,               // => the synthesized image
	speed*t%2800, 0, 800, 35,          // => frame of offScreenContext that get's drawn
	0, 565, 800, 35                        // => frame of ctx to draw in
	);
	
}

function texttalk(ctx,t,word1,word2,word3){
	var speed = 5.0;
	ctx.fillStyle = "rgba(240,40,20,0.4)";
	ctx.font="80px Courier";
	ctx.beginPath();
	ctx.moveTo(00,340);
	ctx.lineTo(00,100);
	ctx.lineTo(800,100);
	ctx.lineTo(800,340);
	ctx.fill();
	ctx.fillStyle = "rgba(255,255,255, 2)";
	ctx.fillText(word1,330-speed*t%300,313);
	ctx.fillText(word2,330-speed*t%300,243);
	ctx.fillText(word3,330-speed*t%300,173);
}



function textheadline(ctx,t,mainline,subline){
	
	ctx.fillStyle = "rgba(80,80,220, 2)";
	ctx.beginPath();
	ctx.moveTo(0,490);
	ctx.lineTo(0,565);
	ctx.lineTo(650,565);
	ctx.lineTo(650,490);
	ctx.fill();
	ctx.fillStyle = "rgba(255,255,255, 2)";
	ctx.font="50px Courier";
	ctx.fillText(mainline,30,530);
	ctx.font="25px Courier";
	ctx.fillText(subline,30,557);
	
}

function displayback(ctx,t,img){
	if(img == null)
		return;
	ctx.drawImage(img,0,0);
}

function displayanchor(ctx,t,img){
	if(img == null)
		return;
	ctx.drawImage(img,40,256);
}

function displayicon(ctx,t,img){
	if(img == null)
		return;
	ctx.drawImage(img,675,450);
}


run();