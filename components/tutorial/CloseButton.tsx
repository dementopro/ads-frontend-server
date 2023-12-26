import { Icon } from '@iconify/react';

import { useTutorialsContext } from '@/context/tutorials';

const CloseButton = () => {
  const { closeTutorial } = useTutorialsContext();

  return (
    <div className="cursor-pointer z-[9999] hover:opacity-80" onClick={closeTutorial as any}>
      <Icon icon="mdi:close-circle-outline" className="text-white" width={32} height={32} />
    </div>
  );
};

export default CloseButton;
