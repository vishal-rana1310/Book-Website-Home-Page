var download  = setInterval(totalDownloads, 10);
var sold = setInterval(totalSold, 10);
var customer = setInterval(happyCustomer, 10);
var num1 = 1;
var num2 = 1;
var num3 = 1;
const stars = document.querySelectorAll('.star');
const star1 = document.querySelectorAll('.star1');
const selfHelpBooks = document.querySelectorAll('.self-help');
const busiNess = document.querySelectorAll('.business');
const webD = document.querySelectorAll('.web-dev');
const author = document.querySelectorAll('.nap-hill');
const author1 = document.querySelectorAll('.adam-hunt');
const author2 = document.querySelectorAll('.john-snow');
const categoryArr = ["self-help", "business", "web-dev", "adam-hunt", "john-snow", "nap-hill"];
const author3 = document.querySelectorAll('.robert-downey');
const all_Books = document.querySelectorAll('.book-card')

//Star Ratings

for(i=0; i<stars.length; i++){
//getting the current number of star in var number
stars[i].number = (i+1);
stars[i].addEventListener('click', yourRating);

}
function yourRating(){
   let number = this.number;
    stars.forEach(function(e, index){
        if(index < number){
            e.classList.add("yellowgreen");
        }else{
            e.classList.remove("yellowgreen");
        }
    })
}

for(i=0; i<star1.length; i++){
    star1[i].number1= (i+1);
    star1[i].addEventListener('click', yoursRating);
    
}
function yoursRating(){
    let number1 = this.number1;
    star1.forEach(function(e, index){
        if(index < number1){
            e.classList.add("yellowgreen");
        }else{
            e.classList.remove("yellowgreen");
        }
    })
}



//Achievement numbers

function totalDownloads(){
    num1++;
    document.querySelector("#download").innerHTML = num1+"+";
    //stops the counting
    if(num1 == 300){
        clearInterval(download);
    }
}
function totalSold(){
    num2++;
    document.querySelector("#number1").innerHTML = num2+"+";
    //stops the counting
    if(num2 == 264){
        clearInterval(sold);
    }
}
function happyCustomer(){
    num3++;
    document.querySelector("#number3").innerHTML = num3+"+";
    //stops the counting
    if(num3 == 325){
        clearInterval(customer);
    }
}

//Book Category---->

function allBooks(){
     all_Books.forEach(element => {
         element.style.display = "block";
     });
}
 categoryArr.forEach(element => {
     if(element === "web-dev"){
         document.getElementById('web-dev').addEventListener('click', show3);
         function show3(){
            webD.forEach(elem => {
                elem.style.display = "block";
                console.log(elem);
            });
            selfHelpBooks.forEach(ele => {
                ele.style.display = "none";
            });
            busiNess.forEach(el => {
                el.style.display = "none";
            });
         }
         
     }else if(element === "business"){
        document.getElementById('business').addEventListener('click', show2);
        function show2(){
            webD.forEach(elem => {
                elem.style.display = "none";
            });
            selfHelpBooks.forEach(ele => {
                ele.style.display = "none";
            });
            busiNess.forEach(el => {
                el.style.display = "block";
            });
        }
       
    }else if(element === "self-help"){
        document.getElementById('self-help').addEventListener("click", show);
        function show(){

            webD.forEach(elem => {
                elem.style.display = "none";
            });
            selfHelpBooks.forEach(ele => {
                ele.style.display = "block";
            });
            busiNess.forEach(el => {
                el.style.display = "none";
            });
        }
    }else if(element === "adam-hunt"){
        document.getElementById('adam-hunt').addEventListener('click', adamHunt);
        function adamHunt(){

            author.forEach(elem => {
                elem.style.display = "none";
            });
            author1.forEach(ele => {
                ele.style.display = "block";
            });
            author2.forEach(el => {
                el.style.display = "none";
            });
        }
    }else if(element === "nap-hill"){
        document.getElementById('nap-hill').addEventListener('click', napHill);
        function napHill(){

            author1.forEach(elem => {
                elem.style.display = "none";
            });
            author.forEach(ele => {
                ele.style.display = "block";
            });
            author2.forEach(el => {
                el.style.display = "none";
            });
        }
    }else{
        document.getElementById('john-snow').addEventListener('click', johnSnow);
        function johnSnow(){

            author1.forEach(elem => {
                elem.style.display = "none";
            });
            author.forEach(ele => {
                ele.style.display = "none";
            });
            author2.forEach(el => {
                el.style.display = "block";
            });
        }
    }
     
 });