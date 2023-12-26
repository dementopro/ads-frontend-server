import { useTutorialsContext } from '@/context/tutorials';

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
};

const NavigationButtons = ({ onBack, onNext }: NavigationButtonsProps) => {
  const { goBack, goNext } = useTutorialsContext();

  return (
    <div className="w-[700px] flex">
      <button
        className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500 mr-10"
        onClick={onBack || goBack}
      >
        Back
      </button>
      <button
        className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-primary-purple hover:brightness-110 border-background-500`}
        onClick={onNext || goNext}
      >
        Next
      </button>
    </div>
  );
}

export default NavigationButtons;
