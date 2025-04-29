import { useState } from "react";

function Form1() {
            const [formData,setformData]=useState({
                'username':'',
                'email':''
            })

            const [status,setStatus]=useState(false)

            function handleChange(e){
                const {name,value}= e.target;
                    setformData((prev)=>({
                        ...prev,
                        [name]:value
                    }))
            }

            function handleSubmit(e){
                e.preventDefault();
                console.log(formData);
            }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label>Email:</label>
                    <input type="email"
                        name="email"    
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <input type="submit" onClick={()=>setStatus(!status)} disabled={status} value={status?"process..":"Submit"}/>

            </form>
        </>
    )
}

export default Form1;