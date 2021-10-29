var membername=["My Family Book","Mahalingam","Sakthikani","Balakirshnan","Uma","Kishore"];
var image=["https://i.postimg.cc/MKdhy06Z/family.jpg","img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
var number=0;
function Next(){
    if(number==6){
        number=0;
    }
    document.getElementById("member").src=image[number];
    document.getElementById("family").innerHTML=membername[number];
    number++;
}