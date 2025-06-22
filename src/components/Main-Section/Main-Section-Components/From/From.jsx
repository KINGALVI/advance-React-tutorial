import { useEffect, useRef, useState } from "react";
import useArrayHookInputState from "./Hooks/ArrayHook";
import useObjectHookInputState from "./Hooks/ObjectHook";
import ReusableFrom from "./ReusableFrom/ReusableFrom";

const From = () => {

    ///// controlled element : use 'useState()' to controlled the input field /////

    const [submit, setSubmit] = useState([]);
    const hendelControlledFieldSubmit = Submit => {

        // 'preventDefault()' method use in react router to stop reloding the webpage after submit button click .
        Submit.preventDefault()

        //this is the method of how to show a error if user give less then 5 password key .
        if (Password.length < 5) {
            setError('Password Must Be 5 Characters or Longer')
        }
        else {
            setError('')
            setSubmit({ Name, Email, Password })
        }

    }

    const [Name, setName] = useState('')
    const handelInformation = events => {

        // thish method is used for to get the value form input field .
        setName(events.target.value)

    }



    const [Email, SetEmail] = useState('')

    const hendelEmail = events => {

        SetEmail(events.target.value)

    }



    const [Password, setPassword] = useState('')

    const [Error, setError] = useState('')

    const hendelpassword = events => {

        const passwordKey = events.target.value

        setPassword(passwordKey)

    }








    ///// uncontrolled element : use 'useRef()' to controlled the input field /////

    // Uncontrolled elements: Using `useRef()` to manage input fields
    // Unlike controlled components (which use state to store input values),
    // uncontrolled components use `useRef()` to directly reference input fields.
    // This allows reading values without requiring React state updates.

    const NameRef = useRef(null);
    const EmailRef = useRef(null);
    const PasswordRef = useRef(null);

    // Autofocus on input fields when the component mounts using `useEffect()`
    // The `useEffect()` hook runs after the initial render, automatically setting
    // focus on the input fields in sequence. This improves user experience.
    useEffect(() => {
        NameRef.current.focus();  // Set focus on the name input field
        EmailRef.current.focus(); // Set focus on the email input field
        PasswordRef.current.focus(); // Set focus on the password input field
    }, []);

    // Handling form submission for uncontrolled fields
    // Instead of using state, this function retrieves values using `useRef().current.value`.
    // This makes the input handling straightforward and avoids unnecessary re-renders.
    const hendelUncontrolledFieldSubmit = events => {
        events.preventDefault();  // Prevents page refresh on form submission
        console.log(NameRef.current.value);  // Logs name input value
        console.log(EmailRef.current.value); // Logs email input value
        console.log(PasswordRef.current.value); // Logs password input value
    };








    ///// costom hook element : use costom hook system to controlled the input field ////

    // Array custom hook
    const [ArrayHookName, ArrayhandelHookName] = useArrayHookInputState('Hook Name')

    // Object custom hook
    const ObjectHookEmail = useObjectHookInputState('HookEmail@alvi.com')
    const ObjecthookEmail = ObjectHookEmail.Value


    //show the custom hook information
    const [HookInformation, handelHookInformation] = useState([])

    const hendelHookFieldSubmit = events => {

        events.preventDefault()

        handelHookInformation({ ArrayHookName, ObjecthookEmail })

    }









    {/***** Reusable element : Reusable system are use singel input field for various work Like login, signup etc *****/ }

    const handelSignUpFrom = Data => {
        console.log('Sign Up Information', Data)
    }

    const handelLogInFrom = Data => {
        console.log('Log In Inforamtion', Data)
    }

    return (
        <>
            {/***** controlled element : use 'useState()' to controlled the input field *****/}
            <br /><br /><br /><br /><br />
            <center className="text-5xl">Controlled Element</center>
            <br /><br />
            <form className="flex justify-center" onSubmit={hendelControlledFieldSubmit}>

                <input
                    type="text"
                    placeholder="Search"
                    value={Name}
                    onChange={handelInformation}
                    className="input input-bordered join-item w-52" />

                <input
                    type="email"
                    value={Email}
                    placeholder="Email"
                    onChange={hendelEmail}
                    className="input input-bordered join-item w-52" />

                <input
                    type="password"
                    value={Password}
                    placeholder="Password"
                    onChange={hendelpassword}
                    className="input input-bordered join-item w-52"

                    //we can use requierd method to make a input field requierd for submit .
                    required />

                <button className="btn btn-primary join-item" type="submit" value="submit" onClick={hendelControlledFieldSubmit}>Submit</button>
            </form>

            <br />

            <center>{Error}</center>

            <br />

            <center>
                <p>Name: {submit.Name}</p>
                <p>Email: {submit.Email}</p>
                <p>Password: {submit.Password}</p>
            </center>
            <br /><br /><br /><br /><br />









            {/***** uncontrolled element : use 'useRef()' to controlled the input field *****/}
            <center className="text-5xl">Uncontrolled Element</center>
            <br /><br />
            <form className="flex justify-center" onSubmit={hendelUncontrolledFieldSubmit}>

                <input
                    type="text"

                    // `defaultValue={}` is used to display a pre-filled value in the input field. 
                    // Unlike `value`, `defaultValue` allows the field to remain editable.
                    // Example: This input will initially display "Your Name" until the user changes it.
                    defaultValue={'Your Name'}

                    // Using `ref={}` to reference this input field
                    // This enables direct manipulation of the input element without relying on React state.
                    ref={NameRef}

                    placeholder="Search"
                    className="input input-bordered join-item w-52"
                />

                <input
                    type="email"
                    ref={EmailRef}
                    placeholder="Email"
                    className="input input-bordered join-item w-52" />

                <input
                    type="password"
                    ref={PasswordRef}
                    placeholder="Password"
                    className="input input-bordered join-item w-52" />

                <button className="btn btn-primary join-item" type="submit" value="submit">Submit</button>
            </form>

            <br /><br /><br /><br /><br />








            {/***** hook element : use costom hook system to controlled the input field *****/}

            <center className="text-5xl">Hook Element</center>
            <br /><br />
            <form className="flex justify-center" onSubmit={hendelHookFieldSubmit}>

                {/* Array custom hook */}
                <input
                    type="text"
                    value={ArrayHookName}
                    onChange={ArrayhandelHookName}
                    placeholder="Search"
                    className="input input-bordered join-item w-52"
                />

                {/* Object custom hook */}
                <input
                    type="email"
                    {...ObjectHookEmail}
                    placeholder="Email"
                    className="input input-bordered join-item w-52" />

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered join-item w-52" />

                <button className="btn btn-primary join-item" type="submit" value="submit">Submit</button>
            </form>

            <br />

            <center>
                {HookInformation.ArrayHookName}
                <br /><br />
                {HookInformation.ObjecthookEmail}
            </center>

            <br /><br /><br /><br /><br />









            {/***** Reusable element : Reusable system are use singel input field for various work Like login, signup etc *****/}

            {/* Reusable Element Example  */}
            <ReusableFrom FromTitel={'Reusable Element'} Context={'Sign Up'} FromButton={'Sign In'} hendelReusableFieldSubmit={handelSignUpFrom} />

            {/* Reusable Element Example  */}
            <ReusableFrom FromTitel={'Reusable Element'} Context={'Log In'} FromButton={'Log In'} hendelReusableFieldSubmit={handelLogInFrom} />

            {/* Default Reusable Element Example  */}
            <ReusableFrom />

            {/* children Reusable Element Example  */}
            <ReusableFrom FromTitel={'children Reusable Element'} Context={'children Element'}> <center className="text-2xl pt-5"><i><b>This is children Component</b></i></center> </ReusableFrom>

        </>
    );
};

export default From;