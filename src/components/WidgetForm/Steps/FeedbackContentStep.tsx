import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.source}
            alt={feedbackTypeInfo.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}{" "}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full ">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm  text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-[#8257e6] focus:ring-[#8257e6] focus:ring-1 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent "
          placeholder="Conte com detalhes o que está acontecetendo"
        />
        <footer className="flex gap-2 mt-2">
          <button type="button"
          className="bg-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#8257e6] "
          >
            <Camera className="w-10 h-6"/>
          </button>

          <button
            type="submit"
            className="p-2 bg-[#8257e6] rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-[#996dff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#8257e6] transition-colors  "
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
