import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";

async function seed() {
  console.log("Seeding posts...");

  const seedPosts = [
    {
      title: "Welcome to My Blog",
      slug: "welcome-to-my-blog",
      excerpt:
        "An introduction to who I am and what you can expect to find on this blog.",
      category: "Community",
      coverImage: "/images/posts/welcome-to-my-blog.jpg",
      body: `
Welcome to my personal blog!

I'm Al Francis Daga-ang, a software engineering student who enjoys building full-stack web applications, exploring cloud technologies, and participating in hackathons.

This blog is where I'll share my learning journey, project experiences, and lessons from school, internships, certifications, and personal projects.

This website itself is built with Next.js, Drizzle ORM, Neon PostgreSQL, and TypeScript. I hope you'll find something useful here.
      `,
      createdAt: new Date("2026-06-15T09:00:00Z"),
    },
    {
      title: "How I Earned My AWS Certified Cloud Practitioner",
      slug: "how-i-earned-my-aws-certified-cloud-practitioner",
      excerpt:
        "My study approach, resources, and lessons learned while preparing for the AWS Certified Cloud Practitioner exam.",
      category: "Certifications",
      coverImage: "/images/posts/aws-cloud-practitioner.jpg",
      body: `
Passing the AWS Certified Cloud Practitioner exam was one of my biggest milestones.

I started by learning the fundamentals of cloud computing before diving into AWS core services such as EC2, S3, IAM, VPC, RDS, Lambda, and CloudWatch.

To prepare, I watched video courses, completed hands-on labs, read AWS documentation, and answered hundreds of practice questions. Understanding *why* each service exists was more valuable than simply memorizing facts.

After weeks of preparation, I successfully passed the certification exam. The experience gave me confidence in cloud computing and motivated me to continue learning more advanced AWS services.
      `,
      createdAt: new Date("2026-06-22T14:30:00Z"),
    },
    {
      title: "Our Hackathon Journey: Reaching the Top 5",
      slug: "our-hackathon-journey-top-5",
      excerpt:
        "How our team went from a blank idea to a Top 5 finish, and what the experience taught me about teamwork under pressure.",
      category: "Projects",
      coverImage: "/images/posts/hackathon-top-5.jpg",
      body: `
Joining our hackathon was both exciting and challenging.

Our team had limited time to transform an idea into a working product. We divided responsibilities, brainstormed solutions, designed the user interface, built the application, fixed bugs, and prepared our presentation.

Although the competition was tough, our hard work paid off—we finished as one of the Top 5 teams.

More than the ranking itself, the experience taught me valuable lessons about teamwork, communication, problem-solving, and building software under pressure. It remains one of the most memorable experiences in my journey as a developer.
      `,
      createdAt: new Date("2026-07-01T11:15:00Z"),
    },
    {
      title:
        "Everything Is an Object: A Beginner's Guide to Object-Oriented Programming",
      slug: "everything-is-an-object",
      excerpt:
        "A beginner-friendly explanation of how thinking in objects makes complex software easier to design and maintain.",
      category: "Learning",
      coverImage: "/images/posts/everything-is-an-object.jpg",
      body: `
When I first started programming, I thought variables and functions were completely separate concepts. Learning Object-Oriented Programming changed the way I viewed software.

An object represents something with data (properties) and behavior (methods). For example, a Car object can have properties like color and model, while methods like start() and drive() describe what it can do.

Thinking in objects makes complex applications easier to organize because each object has a clear responsibility.

Whether you're building a blog, an e-commerce website, or a game, object-oriented thinking helps create code that is easier to understand, maintain, and extend as your projects grow.
      `,
      createdAt: new Date("2026-07-08T16:45:00Z"),
    },
  ];

  await db.insert(posts).values(seedPosts);

  console.log(`Seeded ${seedPosts.length} posts successfully.`);
}

seed()
  .then(() => {
    console.log("Done.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
