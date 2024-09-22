import React from 'react'

interface PropsTypes {
    children: React.ReactNode;
}

const HomeContainer: React.FC<PropsTypes> = ({ children }) => {
    return (
        <div className="w-full max-w-screen-lg mx-auto">
            {children}
        </div>
    )
}

export default HomeContainer
