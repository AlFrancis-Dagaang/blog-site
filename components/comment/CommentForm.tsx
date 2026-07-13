"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { addComment } from "@/lib/actions/comments";
import { SubmitButton } from "./SubmitButton";

const initialState = { status: "idle" as const };

interface CommentFormProps {
  postId: string;
  slug: string;
}

export function CommentForm({ postId, slug }: CommentFormProps) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(addComment, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setIsAnonymous(false);
    }
  }, [state]);

  return (
    <div className="mb-12">
      {/* Toggle Switch */}
      <div className="flex items-center space-x-3 mb-4">
        <button
          type="button"
          onClick={() => setIsAnonymous(!isAnonymous)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
            isAnonymous ? "bg-brand" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
              isAnonymous ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </button>
        <span className="text-sm font-medium text-primary-text">
          Post Anonymously
        </span>
      </div>

      {/* Form Box - Added flex flex-col to stack items vertically */}
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col bg-gray-50/50 dark:bg-gray-800/20 border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-brand focus-within:border-brand transition-all"
      >
        {/* Hidden Inputs for Action context */}
        <input type="hidden" name="postId" value={postId} />
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="isAnonymous" value={String(isAnonymous)} />
        {isAnonymous && (
          <input type="hidden" name="authorName" value="Anonymous" />
        )}

        {/* Name Input (Hides when anonymous) */}
        {!isAnonymous && (
          <div className="border-b border-gray-300 dark:border-gray-700 px-4 py-3">
            <input
              type="text"
              name="authorName"
              placeholder="Your Name"
              required
              className="w-full bg-transparent text-sm text-primary-text focus:outline-none placeholder:text-gray-400"
            />
            {state.status === "error" && state.errors?.authorName && (
              <p className="text-xs text-red-500 mt-1">
                {state.errors.authorName[0]}
              </p>
            )}
          </div>
        )}

        {/* Body Textarea */}
        <div className="px-4 py-3 flex-1">
          <textarea
            name="body"
            placeholder="What are your thoughts ?"
            required
            rows={3}
            className="w-full bg-transparent text-sm text-primary-text focus:outline-none placeholder:text-gray-400 resize-none min-h-20"
          />
          {state.status === "error" && state.errors?.body && (
            <p className="text-xs text-red-500 mt-1">{state.errors.body[0]}</p>
          )}
        </div>

        {/* Footer Controls */}
        <div className="flex justify-end items-center px-4 py-3 gap-4">
          <button
            type="button"
            onClick={() => formRef.current?.reset()}
            className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Cancel
          </button>
          <SubmitButton />
        </div>

        {/* Success Message */}
        {state.status === "success" && (
          <div className="px-4 pb-3 flex justify-end">
            <p className="text-xs text-green-600">Comment posted</p>
          </div>
        )}
      </form>
    </div>
  );
}
