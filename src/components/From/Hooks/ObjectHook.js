import { useState } from "react"

const useObjectHookInputState = (defaultValue = null) => {

    const [Value, setValue] = useState(defaultValue)

    const onChange = events => {

        setValue(events.target.value)

    }

    return { Value, onChange }

}

export default useObjectHookInputState