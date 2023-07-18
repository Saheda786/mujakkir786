 import Location from "./Location";
 function ExpenseItem(props){




    return  (
    <>
    
        <Location   location={props.location} />
       
  
   <div> {props.title}</div>
   <div> {props.amount}</div>
    </>
    
    
    );
}
export default  ExpenseItem;