import '../form.css'
export default function Form (){
    return(
        <>
        <form>
            <div style={{width:"70%",display:"flex",flexDirection:"column"}}>
                <div >
                <label>* Username : </label>
            <input></input><br></br>
                </div>
           <div>
           <label>* Password : </label>
            <input type="password" placeholder=''></input><br></br>
           </div>
           
            <div style={{marginLeft:'6%'}}>
            <input type="checkbox" className='checkbox' ></input>    <label>Remember me</label><br></br>
            <button type="submit" style={{padding:"10px"}}>Submit</button>
        
            </div>
            </div>
           
           
        </form>
        </>
    )
}