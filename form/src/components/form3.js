import { useState } from "react"

export default function Form3 (){

const [dropdown,setDropDown]=useState(false);
const[selectedOption,setSelectedOption]=useState({ name: '', id: '' });
const data=[
    { id: 1, location_name: "India", Code: 25 },
    { id: 2, location_name: "USA", Code: 21 },
    { id: 3, location_name: "UK", Code: 20 }
];


function showDropdown (){
    setDropDown(!dropdown)
}

function handleOptionClick(location){
    setSelectedOption({ name: location.location_name, id: location.id });
setDropDown(false)
}


function handleSubmit(event) {
    event.preventDefault();
    console.log(`Selected Location: ${selectedOption.name}\nID: ${selectedOption.id}`);
}

    return(
        <>
        <form onSubmit={handleSubmit}>

            <label>Select a location</label><br></br>
            <div style={{display:"flex"}}>
            <input type="text" value={selectedOption.name}></input>
            <img src=".\dropdown.webp" style={{height:"20px"}} onClick={showDropdown}></img>
            </div>
{dropdown &&
    data.map(item=>(
      <p onClick={()=>handleOptionClick(item)}> {item.location_name}</p> 
    ))
}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}