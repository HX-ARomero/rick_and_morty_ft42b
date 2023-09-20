import { useState } from "react";
import validation from "./validation";

export default function Form(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "Por favor ingrese sus datos..."
    });


    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        // console.log(userData);
        setErrors(validation({
            ...userData,
            [name]: value
        }))
        console.log(errors);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }
 
   return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{textAlign:"right", lineHeight:"40px"}} >

            <label>Email: </label>
            <input
                type="text"
                name="email"
                value={userData.email}
                placeholder="Ingrese email..."
                onChange={handleChange}
            />
            <p style={{color:"red"}}>{errors.email ? errors.email : null} </p>

            <label>Password: </label>
            <input
                type="password"
                name="password"
                value={userData.password}
                placeholder="Ingrese contraseña..."
                onChange={handleChange}
            />
            <p style={{color:"red"}}>{errors.password ? errors.password : null} </p>
            <hr/>

            <button
                type="submit"
                disabled={errors.email || errors.password}
            >Submit</button>
        </form>
      </div>
   );
}
