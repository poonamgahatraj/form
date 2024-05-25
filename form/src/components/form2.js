import { useState } from "react"

export default function Form2(){
const[dropDown,setDropDown]=useState(false);
const [selectedOption, setSelectedOption] = useState("");
const [noteText, setNoteText] = useState("");
    function showDropdown(){
        setDropDown(!dropDown)
    }

    function handleOptionClick(option) {
        setSelectedOption(option);
        setDropDown(false);

        if (option === "Male") {
            setNoteText("Hi man");
        } else if (option === "Female") {
            setNoteText("Hii lady");
        } else {
            setNoteText(""); // Clear note text for "Others" option
        }
    }
    return(
        <>
         <form>
            <div style={{width:"70%",display:"flex",flexDirection:"column"}}>
                <div >
                <label>* Note : </label>
            <input value={noteText}></input><br></br>
                </div>
           <div>
           <label>* Gender : </label>
           <div style={{display:"flex"}}>
           <input placeholder='select an option and change input text above' value={selectedOption}></input> 
              <img src=".\dropdown.webp" style={{height:'20px'}} onClick={showDropdown}></img><br></br>
           </div>
            
           </div>
{dropDown &&
    <div>
            <p onClick={() => handleOptionClick("Male")}>Male</p>
            <p onClick={() => handleOptionClick("Female")}>Female</p>
            <p  onClick={() => handleOptionClick("Others")}>Others</p>
           </div>
}
           
         
            </div>
           
           
        </form>
        </>
    )
}