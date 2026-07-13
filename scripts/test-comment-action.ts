import { addComment } from "@/lib/actions/comments";

async function main() {
  // Test 1: normal named comment
  const formData1 = new FormData();
  formData1.set("postId", "dc7cad8a-9cae-403f-b8cd-e790b03707d2");
  formData1.set("slug", "our-hackathon-journey-top-5");
  formData1.set("authorName", "Test User");
  formData1.set(
    "body",
    "This is a test comment to verify insert + validation.",
  );
  formData1.set("isAnonymous", "false");

  // Test 2: anonymous comment
  const formData2 = new FormData();
  formData2.set("postId", "dc7cad8a-9cae-403f-b8cd-e790b03707d2");
  formData2.set("slug", "our-hackathon-journey-top-5");
  formData2.set("authorName", "This Should Be Ignored");
  formData2.set("body", "This is an anonymous test comment.");
  formData2.set("isAnonymous", "true");

  for (const [label, formData] of [
    ["Named", formData1],
    ["Anonymous", formData2],
  ] as const) {
    try {
      const result = await addComment({ status: "idle" }, formData);
      console.log(`[${label}] Result:`, result);
    } catch (err) {
      console.error(
        `[${label}] Error (expected if revalidatePath needs request context):`,
        err,
      );
    }
  }
}

main();
