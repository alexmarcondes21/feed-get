import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback aqui </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          console.log(key, value);
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#8257e6] focus:border-[#8257e6] focus:outline-none"
            >
              <img src={value.source} alt={value.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
