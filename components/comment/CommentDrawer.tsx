"use client";

import { useEffect, useState } from "react";
import { getAllCommentsForPost } from "@/lib/actions/comments";
import { CommentDrawerSkeleton } from "./CommentDrawerSkeleton";
import { type Comment, CommentList } from "./CommentList";

interface CommentDrawerProps {
  postId: string;
  totalComments: number;
}

export function CommentDrawer({ postId, totalComments }: CommentDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedCount, setFetchedCount] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && fetchedCount !== totalComments) {
      setIsLoading(true);
      getAllCommentsForPost(postId)
        .then((data) => {
          setComments(data);
          setFetchedCount(totalComments);
        })
        .catch((err) => {
          console.error("Failed to load comments:", err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isOpen, postId, totalComments, fetchedCount]);

  return (
    <>
      {/* Trigger Button */}
      {/** biome-ignore lint/a11y/useButtonType: <> */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-8 px-5 py-1.5 border border-[#ff7a59] text-[#ff7a59] text-sm font-medium rounded-full hover:bg-[#ff7a59]/10 transition-colors"
      >
        See all Comments
      </button>

      {/* Native Dialog Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          {/** biome-ignore lint/a11y/noStaticElementInteractions: <> */}
          {/** biome-ignore lint/a11y/useKeyWithClickEvents: <> */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sliding Drawer */}
          {/* UPDATED: dark:bg-[var(--color-surface)] applies your #00212e color */}
          <div className="relative w-full max-w-md h-full bg-white dark:bg-surface shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* UPDATED: dark:border-[var(--color-border-light)] applies your #0a3a4a color */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-(--color-border-light)">
              <h3 className="text-xl font-bold text-primary-text">
                All Comments
              </h3>
              {/** biome-ignore lint/a11y/useButtonType: <> */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-black dark:hover:text-white"
              >
                {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {isLoading ? (
                <CommentDrawerSkeleton />
              ) : (
                <CommentList comments={comments} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
