

function Picture(props){

debugger
console.log(props)
    return(
   
  
         <div> 
         <img src={props.img}  />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
         </div>
         
        
      
      

   
    );
}
export default  Picture;