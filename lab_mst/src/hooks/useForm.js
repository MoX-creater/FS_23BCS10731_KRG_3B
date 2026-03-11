import { useState } from "react";

export default function useForm(init) {
    const [values, setValues] = useState(init);

    return {
        values,
        handleChange: (e) => setValues({ ...values, [e.target.name]: e.target.value }),
        resetForm: () => setValues(init)
    };
}
