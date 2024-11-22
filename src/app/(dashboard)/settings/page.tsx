import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        <BillingSettings />
        <DarkModetoggle />
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
