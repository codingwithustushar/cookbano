let input = document.getElementById("inputbox")

async function fetchdata(food){
     food = input.value; 
 try{
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`);

    let res = await data.json();
    console.log(res);
    
 }
 catch(error){
    console.log(error)
 }
}
// fetchdata();

input.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        fetchdata();
    }
})