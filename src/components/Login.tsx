import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const mockUser = [
    {email: 'user1@sad.com', password: '123'} ,
    {email: 'user2@sad.com', password: '456'},
]

const Login = () => {

    const [email , setemail] =
    useState("");
    const [password , setpassword] =
    useState("");
    const navigate = useNavigate();
    const [error, seterror] =
        useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
    const user = mockUser.find((user) => user.email === email && user.password === password);
    if(user) {
        seterror('');
        navigate('/Dashboard');
        alert('Welcome!!');
    }else{
        alert('Error!!');
        console.log('Error!!')
        seterror('error');
    };
    }


    return(
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md w-80'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Vorod</h2>

                <label className='block mb-2 text-sm'>Email : </label>

                <input type='email' className="w-full p-2 border rounded mb-2" value={email}

                onChange={(e) => setemail(e.target.value)} />

                <label className='block mb-2 text-sm'>Ramz-Vorod</label>

                <input type='password' className="w-full p-2 border rounded mb-2" value={password} 

                onChange={(e) => setpassword(e.target.value)} />

                <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded mt-4">Vorod!!</button>

                <button className='w-full bg-amber-600 text-white p-2 rounded mt-4'>forget password ?</button>

                <button onClick={() => navigate('/SignUp')} className="w-full bg-blue-300 text-white p-2 rounded mt-4">Register</button>

            </form>

        </div>
    )


};

export default Login ;