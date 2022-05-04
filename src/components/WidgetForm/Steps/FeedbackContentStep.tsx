import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState("");

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({
      screenshot,
      comment,
    });
    onFeedbackSent();
  }
  
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
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full " onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm  text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-[#8257e6] focus:ring-[#8257e6] focus:ring-1 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent "
          placeholder="Conte com detalhes o que está acontecetendo"
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-[#8257e6] rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-[#996dff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#8257e6] transition-colors  disabled:opacity-50 disabled:hover:bg-[#8257e6]"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
