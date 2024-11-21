'use client'
import { useConversation } from '@/hooks/conversation/use-conversation'
import React from 'react'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import ConversationSearch from './search'
import { Loader } from '../loader'
import ChatCard from './chat-card'
import { CardDescription } from '../ui/card'
import { Separator } from '../ui/separator'
import TabsMenu from '../tabs'

type Props = {
  domains?:
  | {
    name: string
    id: string
    icon: string
  }[]
  | undefined
}

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading, onGetActiveChatMessages } =
    useConversation()

  return (
    <div className="py-3 px-0">
      <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="unread">
          <ConversationSearch
            domains={domains}
            register={register}
          />
          <div className="flex flex-col">
            <div className=" flex-col h-full">
              <div className="flex-1 overflow-y-auto max-h-auto">
                <Loader loading={loading}>
                  {chatRooms.length ? (
                    chatRooms.map((room) => (
                      <ChatCard
                        seen={room.chatRoom[0].message[0]?.seen}
                        id={room.chatRoom[0].id}
                        onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                        createdAt={room.chatRoom[0].message[0]?.createdAt}
                        key={room.chatRoom[0].id}
                        title={room.email!}
                        description={room.chatRoom[0].message[0]?.message}
                      />
                    ))
                  ) : (
                    <CardDescription>No chats for your domain</CardDescription>
                  )}
                </Loader>
              </div>
            </div>

          </div>
        </TabsContent>
        <TabsContent value="all">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          all
        </TabsContent>
        <TabsContent value="expired">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          expired
        </TabsContent>
        <TabsContent value="starred">
          <Separator
            orientation="horizontal"
            className="mt-5"
          />
          starred
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ConversationMenu