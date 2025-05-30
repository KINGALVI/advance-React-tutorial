import { useState } from "react";

const From = () => {

    const [Information, SetInformation] = useState([])
    const hendelSubmit = Submit => {
        // 'preventDefault()' method use in react router to stop reloding the webpage after submit button click .
        Submit.preventDefault()

        // by thease method used for get value form input field 
        Submit.target.value

        SetInformation(hendelName)

    }

    const [Email, SetEmail] = useState([])
    const hendelName = events => {
       SetEmail(events.target.value)
    }

    return (
        <>

            <br /><br /><br /><br /><br />
            <form className="flex justify-center" onClick={hendelSubmit}>

                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered join-item w-52" />

                <input
                    type="email"
                    placeholder="Search"

                    // we can use onChange={} method to track down every key press in input field .
                    onChange={hendelName}

                    className="input input-bordered join-item w-52" />

                <input
                    type="password"
                    placeholder="Search"
                    className="input input-bordered join-item w-52" 
                    required/>

                <button className="btn btn-primary join-item" type="submit" value="submit">Search</button>
            </form>
            <br /><br /><br /><br /><br />

            {Information}

        </>
    );
};

export default From;