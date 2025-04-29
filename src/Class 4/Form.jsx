import { useForm } from "react-hook-form";
import './Form.css'
// let all = [];

function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors , isSubmitting },
    } = useForm()

    async function dataHandle(data) {
    await new Promise((res)=>{setTimeout(res,2000)})
       console.log(data)
    }
    return (
        <>
            <h1>Form Handling</h1>
            <form onSubmit={handleSubmit(dataHandle)}>
                <div>
                    <label>Name:</label>
                    <input {...register("name", { required: true, minLength: { value:3 , message:"Min 3 character"}, maxLength: {value:7, message:"Max 7 Character"} })} />
                    {errors.name && <p className="input">{errors.name.message}</p>}
                </div>
                <br />
                <div>
                    <label>City:</label>
                    <input {...register("city", { required: true , minLength: { value:3 , message:"Min 3 character"}, maxLength: {value:7, message:"Max 7 Character"} })} />
                    {errors.city && <p className="input">{errors.city.message}</p>}
                </div>
                <br />
                <div>
                    <label>Course:</label>
                    <input {...register("course", { required: true })} />
                </div>
                <br />
                <div>
                    <label>Ducat-Id:</label>
                    <input {...register("id", { required: true })} />
                </div>
                <br />
                <div>
                    <label>Phone Number:</label>
                    <input {...register("contact", { required: true })} />
                </div>
                <input type="submit" disabled={isSubmitting} value={isSubmitting?"Processing":"Submit"}/>
            </form>
        </>
    )
}

export default Form;