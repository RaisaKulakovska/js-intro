
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var formZv=document.getElementById("mess");
function closeF(){
	formZv.style.display = 'none';
	cursor:"pointer";
}
function openF(){
	formZv.style.display = 'block';
}


// timer
function timer(){
var now=new Date();	
var StartDate=new Date("nov 18, 2019");
var msNow=now.getTime();
var msStart=StartDate.getTime();
var riznMs=msNow-msStart;
var riznS=riznMs/1000;	
var day=Math.floor(riznS/3600/24);
	var h = Math.floor((riznS - day*24*3600)/60/60);
	var m = Math.floor((riznS-(day*24*3600 + h*3600))/60);
    var s = Math.floor(riznS - (day*24*3600+h*3600 + m*60));

if(s == 59) {
		s = 0;		
		if(m == 59) {
			m = 0;
			++h;
		}
		else {
			++m;
		}
	}
	else {
		++s;
	}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

document.getElementById("day").innerHTML = day;
document.getElementById("hour").innerHTML = h;
document.getElementById("min").innerHTML = m;
document.getElementById("sec").innerHTML = s;
}
	
  
	setInterval('timer()', 1000);



/*drag a form*/
jQuery(document).ready(function(){
	$("#mess").draggable({
		/*containment: "parent",*/
		cursor: "crosshair",
		/*handle:".top",*/
	})
})

/*help*/
var formHelp=document.getElementById("help");

function help(){
formHelp.style.display = 'block';
}

setInterval('help()', 20000);

function closeHelp(){
	formHelp.style.display = 'none';
}

//-------------------------------------
let im1=document.querySelector('.im1')
let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=d3a6d97575ee472fa7fc3c51cd086c36'
    fetch(url)
     .then(
         function(response){
            console.log(response)
             return response.json();
         }
        )
        .then(
            function(data){
                console.log(data);
                return data.articles
            }
        )
    
    .then((tit)=>{
        console.log(tit)
            var title=tit.map(function(item){
            return item.title;
           })
           

           var img = tit.map(function(item){
            return item.urlToImage;           
            })
            console.log(img);

            var txt = tit.map(function(item){
                return item.description
            })
            console.log(txt)

            var url = tit.map(function(item){
                return item.url
            })
            console.log(url)

            let api = [ title , img , txt , url]
            return api;
        })        

    .then((api)=>{
        var div=[];
        div[0]=document.createElement('div');
               div[0].setAttribute('class','block');
               im1.insertAdjacentElement('afterbegin',div[0])


        img_my=document.createElement('img');
        img_my.setAttribute('src',api[1][0]);
        img_my.setAttribute('class','im1');
        div[0].insertAdjacentElement('afterbegin',img_my);
        div[0].addEventListener('click',function(){
            if(this.style.transform=='scale(2)'){
                this.style.transform='scale(1)';
            }
            else{
                this.style.transform='scale(2)'  
            }
        })
    })
 