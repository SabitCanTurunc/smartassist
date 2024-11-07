'use client'
import { Separator } from '@/components/ui/separator'
import { useSettings } from '@/hooks/settings/use-settings'
import React from 'react'
import PremiumBadge from '@/icons/premium-badge'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'
import { DomainUpdate } from './domain-update'
import CodeSnippet from './code-snippet'


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
            className="flex flex-col gap-8 pb-10"
            onSubmit={onUpdateSettings}
        >
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-2xl">Domain Settings</h2>
                <Separator orientation="horizontal" />
                <DomainUpdate
                    name={name}
                    register={register}
                    errors={errors}
                />
                <CodeSnippet id={id} />
            </div>
            



        </form>
    )
}

export default SettingsForm