export interface Comment {
  id: string;
  postId: string;
  authorName: string;
  body: string;
  createdAt: Date | string;
}

interface CommentListProps {
  comments: Comment[];
}

function getRelativeTime(date: Date | string) {
  const now = new Date();
  const past = new Date(date);
  const diffInMs = now.getTime() - past.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInHours < 24) return `${diffInHours}h ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;

  return past.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="pb-6 border-b border-gray-300 dark:border-gray-700 last:border-0"
        >
          <div className="flex flex-col space-y-1 mb-3">
            <span className="font-medium text-primary-text text-sm">
              {comment.authorName}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {getRelativeTime(comment.createdAt)}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {comment.body}
          </p>
        </div>
      ))}
    </div>
  );
}
