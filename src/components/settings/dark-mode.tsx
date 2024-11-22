'use client'
import { useThemeMode } from '@/hooks/settings/use-settings'
import React from 'react'
import Section from '../section-label'
import { cn } from '@/lib/utils'
import { SystemMode } from '../themes-placeholder/systemmode'
import { LightMode } from '../themes-placeholder/lightmode'
import { DarkMode } from '../themes-placeholder/darkmode'
import { Card } from '../ui/card'

type Props = {}

const DarkModetoggle = (props: Props) => {
  const { setTheme, theme } = useThemeMode()

  return (
    <Card className="flex flex-col gap-10 border  border-white rounded-xl p-5 shadow-lg">
      <div className="lg:col-span-1">
        <Section
          label="Interface Theme"
          message="Select or customize your UI theme "
        />
      </div>
      <div className="lg:col-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div
          className={cn(
            'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
            theme == 'system' && 'border-orangeDark'
          )}
          onClick={() => setTheme('system')}
        >
          <SystemMode />
          <p className='text-center'>System Mode</p>


        </div>
        <div
          className={cn(
            'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
            theme == 'light' && 'border-orangeDark'
          )}
          onClick={() => setTheme('light')}
        >
          <LightMode />
          <p className='text-center'>Light Mode</p>
          

        </div>
        <div
          className={cn(
            'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
            theme == 'dark' && 'border-orangeDark'
          )}
          onClick={() => setTheme('dark')}
        >
          <DarkMode />
          <p className='text-center'>Dark Mode</p>

        </div>
      </div>
    </Card>
  )
}

export default DarkModetoggle