var radiobtn_description = document.getElementById("description");
var radiobtn_moreinfo = document.getElementById("more_info");
var radiobtn_reviews = document.getElementById("reviews");
var query_description = document.querySelector(".product1_listEl_description_content");
var query_moreinfo = document.querySelector(".product1_listEl_moreinfo_content");
var query_reviews = document.querySelector(".product1_listEl_reviews_content");
var count_description = 0;
var count_moreinfo = 0;
var count_reviews = 0;

radiobtn_description.addEventListener("click", () =>{
   
if(radiobtn_description.checked && count_description<1)
{
     query_description.style.display = "block";
     count_description +=1;
}

else if(radiobtn_description.checked && count_description >= 1)
{
     query_description.style.display = "none";
     count_description=0;
}





});


radiobtn_moreinfo.addEventListener("click", () =>{

if(radiobtn_moreinfo.checked && count_moreinfo<1)
{
     query_moreinfo.style.display = "block";
     count_moreinfo +=1;
}

else if(radiobtn_moreinfo.checked && count_moreinfo >= 1)
{
     query_moreinfo.style.display = "none";
     count_moreinfo=0;
}

});



radiobtn_reviews.addEventListener("click", () =>{

if(radiobtn_reviews.checked && count_reviews<1)
{
     query_reviews.style.display = "block";
     count_reviews +=1;
}

else if(radiobtn_reviews.checked && count_reviews >= 1)
{
     query_reviews.style.display = "none";
     count_reviews=0;
}

});
