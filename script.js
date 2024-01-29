var carousel = document.querySelector("img");
var images = ["images/bridge.jpg","images/collosseum.jpg","images/praga.jpg","images/taj_mahal.jpg","images/the_great_wall.jpg"];
var num = 5;


function next(){
    num++;
    console.log("step1");
    console.log("num=",num);
    if(num>=images.length){
        num=0;
        console.log("step2");
        console.log("num",num);
        carousel.src=images[num]
        console.log("num",num);
    }
    else{
        console.log("step3");
        carousel.src=images[num]
        console.log("num",num);
    }

}
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
    }
    else{
        carousel.src=images[num]
    }
}