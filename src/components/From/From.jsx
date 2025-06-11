import { useEffect, useRef, useState } from "react";
import useArrayHookInputState from "./Hooks/ArrayHook";
import useObjectHookInputState from "./Hooks/ObjectHook";

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








    ///// hook element : use hook system to controlled the input field ////

    const [HookName, handelHookName] = useArrayHookInputState('Hook Name')

    const HookEmail = useObjectHookInputState('HookEmail@alvi.com')


    const [HookInformation, handelHookInformation] = useState([])

    const hendelHookFieldSubmit = events => {

        events.preventDefault()

        const hookEmail = HookEmail.Value

        handelHookInformation({ HookName, hookEmail })

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

                    // ✅ `defaultValue` is used to display a pre-filled value in the input field.
                    // Unlike `value`, `defaultValue` allows the field to remain editable.
                    // Example: This input will initially display "Your Name" until the user changes it.
                    defaultValue={'Your Name'}

                    // ✅ Using `useRef()` to reference this input field
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








            {/***** hook element : use hook system to controlled the input field *****/}

            <center className="text-5xl">Hook Element</center>
            <br /><br />
            <form className="flex justify-center" onSubmit={hendelHookFieldSubmit}>

                <input
                    type="text"
                    value={HookName}
                    onChange={handelHookName}
                    placeholder="Search"
                    className="input input-bordered join-item w-52"
                />

                <input
                    type="email"
                    {...HookEmail}
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
                {HookInformation.HookName}
                <br /><br />
                {HookInformation.hookEmail}
            </center>

            <br /><br /><br /><br /><br />
        </>
    );
};

export default From;