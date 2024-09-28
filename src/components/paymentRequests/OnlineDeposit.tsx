import { Button } from 'keep-react'
import KeepInput from '../keep-react/KeepInput'

const OnlineDeposit = () => {
  return (
    <div>
      <KeepInput
        label='Payment Method'
        className=''
      />
      <KeepInput
        label='Total Amount Submitted'
        className=''
      />
      <KeepInput
        label='Final Amount'
        className=''
      />
      <KeepInput
        label='Date Of Deposit'
        className=''
      />
      <KeepInput
        label='Select Account'
        className=''
      />
      <KeepInput
        label='Transaction/Reference Number'
        className=''
      />
      <Button variant='link'
        className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm text-white shadow-md transition-colors hover:bg-blue-700 mt-5"
      >Submit</Button>
    </div>
  )
}

export default OnlineDeposit