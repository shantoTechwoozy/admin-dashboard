import cn from '@/utils/cn';
import React from 'react'

interface PropsTypes {
    children: React.ReactNode;
}


const SignupContainer: React.FC<PropsTypes> = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-6 mb-6">
            {children}
        </div>
    )
}

export default SignupContainer
