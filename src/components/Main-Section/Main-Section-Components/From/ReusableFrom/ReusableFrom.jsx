const ReusableFrom = ({
    /* Default Value of Props */
    FromTitel = 'Default Reusable Title',
    Context = 'Default Resusable Field',
    FromButton = 'Default Submit',
    hendelReusableFieldSubmit,

    // children is value used for to add html or react component inside the JSX Element .
    children

}) => {

    const hendelReusableField = events => {
        events.preventDefault()
        const Data = {
            Name: events.target.text.value,
            Email: events.target.email.value,
            Password: events.target.password.value,
        }

        hendelReusableFieldSubmit(Data)

    }

    return (
        <>

            <center className="text-5xl">{FromTitel}</center>

            {/* the children component will shwo up here */}
            {children}

            <br />

            <center className="text-3xl">{Context}</center>

            <br />

            <form className="flex justify-center" onSubmit={hendelReusableField}>

                <input
                    type="text"

                    //'name' is used for give a input field an Specific value
                    name="text"

                    placeholder="Search"
                    className="input input-bordered join-item w-52"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered join-item w-52" />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered join-item w-52" />

                <input className="btn btn-primary join-item" type="submit" value={FromButton} />
            </form>

            <br />

            <center>

                <br /><br />

            </center>
        </>
    );
};

export default ReusableFrom;