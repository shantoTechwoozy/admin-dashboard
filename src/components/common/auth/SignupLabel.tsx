import React from 'react'


interface PropsTypes {
    label: string;
    required?: boolean;
}
const SignupLabel: React.FC<PropsTypes> = ({ label, required }) => {
    return (
        <label className="block text-gray-700">{label}{required && <span className="text-red">*</span>}</label>
    )
}

export default SignupLabel
