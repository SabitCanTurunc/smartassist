import { onGetAllAccountDomains } from '@/actions/settings';
import ConversationMenu from '@/components/conversations';
import Messenger from '@/components/conversations/messenger';
import InfoBar from '@/components/infobar';
import { Separator } from '@/components/ui/separator';
import React from 'react';

type Props = {};

const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains();
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className=" flex-shrink-0 h-full overflow-y-auto">
        <ConversationMenu domains={domains?.domains} />
      </div>

      <Separator orientation="vertical" className="h-full" />

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <InfoBar />
        <Messenger />
      </div>
    </div>
  );
};

export default ConversationPage;
