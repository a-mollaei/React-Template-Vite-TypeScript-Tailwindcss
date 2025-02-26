import {useState} from "react";
import {useNavigate} from 'react-router-dom';


const SignUp = () => {
    const [email , setemail] =
    useState("") ;
    const [password , setpassword] =
    useState("");
    const navigate = useNavigate() ;

    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">SignUp !!</h2>
                <label className="block mb-2 text-sm">Email :</label>
                <input type="email" className="w-full p-2 rounded mb-2 border" value="email" 
                onChange={(e) => setemail(e.target.value)} />
                <label className="block text-sm mb-2">password :</label>
                <input type="password" className="w-full p-2 mb=2 rounded border" value="password"
                onChange={(e) => setpassword(e.target.value)} />
                <button onClick={() => navigate('/Login')} type="submit" className="bg-blue-500 text-white rounded mt-4 p-2 w-full">Submit!!</button>
            </form>
        </div>
    )

};

export default SignUp ;