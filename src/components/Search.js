import React,{useState} from "react";






const Data=({countries})=>{
// console.log(countries);
let[input,getinput]=useState("")
let[iteams,getiteams]=useState(countries)

function search(e){
    e.preventDefault();
    
    let filterit=countries.filter((item)=>{
      
     
     if((item.toLowerCase()).includes((input.toLowerCase())))
      {
        
        return 1;
    
    }
    return 0;
  
    })
   getiteams(filterit)
}
    return( 
   <div>
  
        <form onSubmit={search}>
            <input type="text" onChange={(e)=>{
                getinput(e.target.value);
            }}></input>
            <button type="submit">Search</button>
        </form>
        <div>{iteams.map((ele,index)=>(
            <p key={index}>{ele}</p>
        ))}</div>
    </div>
    )
}


export default Data;