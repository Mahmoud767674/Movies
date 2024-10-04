var myHttp = new XMLHttpRequest ();
var moviesList ;
myHttp.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50')
myHttp.send();



myHttp.addEventListener('readystatechange' , function(){
    if( myHttp.readyState == 4 && myHttp.status == 200)
    {
        moviesList = JSON.parse( myHttp.response).results;
        displayPosts() ;

    }
})


function displayPosts()
{
  var box = ``;
  for(var i=0 ; i< moviesList.length ; i++)
  {
      box += ` <div class= "col-md-3" >
            <img src="https://image.tmdb.org/t/p/w500${moviesList[i].poster_path}" class="w-100"/>
               <h4>${moviesList[i].title}</h4>
               <p>${moviesList[i].overview}</p>
                </div>`
               
  }
   document.getElementById("rowData").innerHTML= box ; 
} 


 

// let person ={

// age:303,
// nam:"mamam",
// salary:5200,
//  wellcome:function () {
//     console.log(this.age);
// },
// calcsalary:function(){
//     let calctax=()=>{
//         return this.salary*0.1;
//     }
//     return this.salary -calctax();
// }


// }
// console.log(person.calcsalary());