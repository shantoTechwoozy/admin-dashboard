import React from 'react'

const SwitchButton = () => {
    return (
        <div className="ml-auto flex items-center gap-2 mr-5">
            <label className="relative inline-flex cursor-pointer items-center">
                <input id="switch-2" type="checkbox" className="peer sr-only" />
                <switch className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-200 after:bg-orange-500 after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-focus:ring-green-300"></switch>
            </label>
            <span className="text-sm text-gray-700 font-medium">Direct Flights Only</span>
        </div>
    )
}

export default SwitchButton
