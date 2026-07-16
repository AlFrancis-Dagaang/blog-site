import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";

async function seed() {
  console.log("Seeding posts...");

  const seedPosts = [
    {
      title: "My Journey Into Cloud and Software Development",
      slug: "my-journey-into-cloud-and-software-development",
      excerpt:
        "An introduction to my journey from student to cloud leader and aspiring software developer, and how cloud technologies have shaped the way I build modern applications.",
      category: "Career",
      coverImage:
        "/images/posts/my-journey-into-cloud-and-software-development.png",
      body: `
# My Journey Into Cloud and Software Development

I'm Al Francis Daga-ang, a software engineering student passionate about full-stack development, cloud computing, and continuous learning. This blog was created to document my journey—from being a student exploring technology to becoming a cloud club leader and an aspiring software developer.

One of the main goals of this blog is to share how cloud technologies have shaped the way I think about software development. Through my studies, projects, certifications, internships, and hackathon experiences, I've learned that modern software is not only about writing code—it is also about designing scalable systems, managing infrastructure, understanding deployment workflows, and building applications that can run reliably in the cloud.

This website itself was built as part of my internship at Stratpoint. It serves as a mini-project that allowed me to gain hands-on experience with several modern technologies:

- **Next.js** for building the web application with server-side rendering and modern React features.
- **Neon PostgreSQL** as the cloud-hosted relational database.
- **Drizzle ORM** for type-safe database access and schema management.
- **Vercel Blob** for storing and serving uploaded images efficiently.

Working with this stack taught me how different technologies complement one another. Next.js integrates seamlessly with Vercel's hosting platform, while Vercel Blob provides a scalable solution for managing media assets. Drizzle ORM delivers a clean, type-safe developer experience when interacting with PostgreSQL, and Neon removes the complexity of managing database infrastructure while providing a fully managed PostgreSQL service.

More importantly, this project showed me that choosing a technology stack is not just about using popular tools—it is about understanding how each component fits into the overall architecture and contributes to performance, maintainability, scalability, and developer productivity.

Through this blog, I hope to share practical lessons, technical insights, project breakdowns, and reflections from my learning journey. You'll find articles about cloud computing, software engineering, internships, certifications, hackathons, and personal projects, all written from the perspective of someone who is continuously learning and growing in the field.

Whether you're a fellow student, an aspiring developer, or simply interested in cloud and web technologies, I hope you'll find something useful here.

Thanks for visiting, and welcome to my journey in software development and cloud engineering.
  `,
      createdAt: new Date("2026-06-15T09:00:00Z"),
    },
    {
      title: "How I Earned My AWS Certified Cloud Practitioner",
      slug: "how-i-earned-my-aws-certified-cloud-practitioner",
      excerpt:
        "How curiosity, the AWS Cloud Club Haribon community, and consistent preparation helped me earn my first AWS certification.",
      category: "Certifications",
      coverImage: "/images/posts/aws-cloud-practitioner.jpg",
      body: `
# How I Earned My AWS Certified Cloud Practitioner

Earning the AWS Certified Cloud Practitioner certification was one of the biggest milestones in my cloud computing journey. It marked the beginning of my deeper understanding of AWS and strengthened my interest in building cloud-native applications.

My journey began when I had the opportunity to become a member of **AWS Cloud Club Haribon**. Being surrounded by students who were passionate about cloud computing inspired me to learn more and explore the AWS ecosystem beyond the classroom.

As my curiosity about cloud computing grew, I signed up for **AWS Educate** and **AWS Skill Builder**. Through AWS Educate, I discovered various learning events where participants could read AWS articles, complete learning activities, and earn **gems**. These gems could later be exchanged for AWS certification vouchers.

After consistently participating in these learning activities, I accumulated **4,200 gems**, which I redeemed for a **100% AWS Certified Cloud Practitioner exam voucher**. It was an exciting reward that motivated me to commit fully to earning my first AWS certification.

I would also like to express my gratitude to our AWS Cloud Club Haribon President, **Maxine Sofia Llamas**, for helping me gain access to the **Tutorials Dojo** review course. The practice exams and detailed explanations became one of the most valuable resources during my preparation.

When I first started studying, I felt overwhelmed by the number of AWS services and concepts. There were dozens of services to learn, each solving different problems. Instead of trying to memorize everything at once, I created a study strategy that worked for me: **focus on learning two to three AWS services each day**, understand why they exist, and reinforce the concepts with practice questions and hands-on learning.

I officially started reviewing in **May 2025**. My daily routine consisted of watching lessons, reading AWS documentation, taking notes, and answering practice exams. More importantly, I focused on understanding the purpose of each AWS service rather than simply memorizing facts.

After several weeks of preparation, I scheduled my certification exam for **June 25, 2025**, at a **Pearson VUE Testing Center** in Manila. Taking the exam in person was both exciting and nerve-racking, but it was also rewarding because it represented months of consistent effort.

Later that evening, I received the official notification that I had **passed the AWS Certified Cloud Practitioner exam**.

Looking back, earning this certification was more than just receiving a digital badge. It taught me the importance of consistency, community support, and hands-on learning. It also gave me the confidence to continue exploring cloud architecture, software engineering, and more advanced AWS certifications.

If there's one lesson I learned throughout this journey, it's that you don't need to know everything before you start. Curiosity, a willingness to learn every day, and support from an amazing community can take you much further than you expect.
  `,
      createdAt: new Date("2025-06-25T18:00:00Z"),
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
