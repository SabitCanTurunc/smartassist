'use client'
import { Separator } from '@/components/ui/separator'
import { useSettings } from '@/hooks/settings/use-settings'
import React from 'react'
import { DomainUpdate } from './domain-update'
import CodeSnippet from './code-snippet'
import PremiumBadge from '@/icons/premium-badge'
import EditChatbotIcon from './edit-chatbot-icon'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'
import { Card } from '@/components/ui/card'
import { TrashIcon } from '@heroicons/react/24/solid'

const WelcomeMessage = dynamic(
  () => import('./greetings-message').then((props) => props.default),
  {
    ssr: false,
  }
)

type Props = {
  id: string
  name: string
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
  chatBot: {
    id: string
    icon: string | null
    welcomeMessage: string | null
  } | null
}

const SettingsForm = ({ id, name, chatBot, plan }: Props) => {
  const {
    register,
    onUpdateSettings,
    errors,
    onDeleteDomain,
    deleting,
    loading,
  } = useSettings(id)
  return (
    <form
      className="flex flex-col gap-8 pb-10 "
      onSubmit={onUpdateSettings}
    >
      <div className="flex flex-col lg:flex-row gap-2">

        <Card className=' gap-5 border border-b-white'>
          <Card className='p-10 border border-b-white'>


            <h2 className="font-bold text-2xl p-5">Domain Settings</h2>
            <Separator orientation="horizontal" />
            <DomainUpdate name={name} register={register} errors={errors} />
          </Card>
          <div className="col-span-1 relative ">
            <Image
              src="/images/bot-ui.png"
              className="sticky top-0"
              alt="bot-ui"
              width={530}
              height={769}
            />
          </div>
          <div className="flex gap-5 justify-center p-10">
            <Button
              onClick={onDeleteDomain}
              variant="destructive"
              type="button"
              className="px-10 h-[50px] flex items-center gap-3"
            >
              <TrashIcon className="w-5 h-5 text-white" /> 
              <Loader loading={deleting}>Delete Domain</Loader>
              
            </Button>
          </div>


        </Card>


        <Card className=' overflow-y-visible'>
          <Card className='pb-10 border border-b-white'>
            <CodeSnippet id={id} />

          </Card>

          <Card className="flex flex-col gap-3 mt-10 p-10 border border-b-white">
            <div className="flex gap-4 items-center">
              <h2 className="font-bold text-2xl">Chatbot Settings</h2>
              <div className="flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold dark:text-black">
                <PremiumBadge />
                Premium
              </div>
            </div>
            <Separator orientation="horizontal" />
            <div className="grid md:grid-cols-2">
              <div className="col-span-1 flex flex-col gap-5 order-last md:order-first">
                <EditChatbotIcon
                  chatBot={chatBot}
                  register={register}
                  errors={errors}
                />
                <WelcomeMessage
                  message={chatBot?.welcomeMessage!}
                  register={register}
                  errors={errors}
                />
                <Button
                  type="submit"
                  className="w-[100px] h-[50px]"
                >
                  <Loader loading={loading}>Save</Loader>
                </Button>
              </div>

            </div>

          </Card>
        </Card>
      </div>





    </form>
  )
}

export default SettingsForm