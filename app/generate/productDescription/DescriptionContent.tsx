// Import necessary components and modules
import { Tab } from '@headlessui/react';
import GenerateContent from '@/app/generate/productDescription/GenerateContent';
import { useRouter, useSearchParams } from 'next/navigation';
import { IGeneTextForm } from '@/types/generate';
import { capitalize } from '@/lib/format';

// DescriptionContent Component: Renders a tabbed interface for different content modes
const DescriptionContent = () => {
  const router = useRouter();
  const categories: Record<IGeneTextForm['mode'], JSX.Element> = {
    // Define content categories for different modes
    description: <GenerateContent mode='description' />,
    email: <GenerateContent mode='email' />,
    Instagram: <GenerateContent mode='Instagram' />,
    LinkedIn: <GenerateContent mode='LinkedIn' />,
    Twitter: <GenerateContent mode='Twitter' />,
  };
  const modes = Object.keys(categories);
  const params = useSearchParams();

  function handleChange(index: number) {
    // Update the 'mode' parameter in the URL based on the selected tab
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set('mode', modes[index]);
    url.search = searchParams.toString();
    router.replace(url.toString()); // Replace the current URL with the updated URL
  }

  function getIndex() {
    const mode = params.get('mode');
    const index = modes.findIndex((el) => el === mode);
    return index === -1 ? 0 : index;
  }

  return (
    <div>
      <div className="w-full">
        <Tab.Group defaultIndex={getIndex()} onChange={(index) => handleChange(index)}>
          <Tab.List className="flex gap-5">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={
                  ({ selected }) =>
                    `rounded-lg px-4 py-2 text-base leading-5 font-medium text-primary-gray bg-[#35363A] hover:text-white outline-none
                  ${selected ? 'text-white border border-[#848484]' : ''}`
                }
              >
                {capitalize(category)}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            {Object.values(categories).map((el, idx) => (
              <Tab.Panel key={idx}>
                <div className='w-full'>
                  {el}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DescriptionContent;