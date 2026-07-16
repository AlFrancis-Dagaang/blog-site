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
        "How joining my first hackathon challenged me to build under pressure, collaborate with an incredible team, and finish as one of the Top 5 teams.",
      category: "Projects",
      coverImage: "/images/posts/hackathon-top-5.jpg",
      body: `
# Our Hackathon Journey: Reaching the Top 5

One of the most memorable experiences in my software engineering journey was participating in my first hackathon. Although the event wasn't focused on AWS, my involvement in cloud communities played an important role in making it possible.

As a member of **AWS Cloud Club Haribon**, I became more engaged with the broader developer community. Through the connections and opportunities that came with being active in cloud events, I was fortunate to participate in a hackathon organized by the **Google Developer Student Clubs (GDSC)**. Looking back, AWS didn't just teach me cloud computing—it opened doors that led me to new learning experiences beyond AWS itself.

At first, the hackathon felt overwhelming. We had only **24 hours** to transform an idea into a working application. Within that short timeframe, our team needed to brainstorm, design the user experience, develop the application, test our features, fix bugs, and prepare a final presentation.

Our project focused on building a **mobile application designed to support children with ADHD**. Every member of the team contributed their skills, communicated effectively, and helped solve problems as they arose. Despite the pressure and limited time, we continued improving our application until the final presentation.

When the results were announced, we were incredibly proud to learn that our team had finished as one of the **Top 5 teams**. Although we didn't reach the Top 3, we considered the experience a success. Building a complete project in just 24 hours and presenting it before the judges was already an achievement that pushed us beyond our comfort zones.

More importantly, the hackathon taught me lessons that extend far beyond coding. I learned how important teamwork, communication, time management, adaptability, and decision-making are when building software under tight deadlines. It also reinforced the value of being involved in technical communities, where one opportunity often leads to another.

This hackathon reminded me that growth doesn't always come from winning—it comes from challenging yourself, learning alongside others, and continuously improving. It's an experience that I'll always look back on as one of the defining moments in my journey as a developer.
  `,
      createdAt: new Date("2026-07-01T11:15:00Z"),
    },
    {
      title: "Being Part of AWS Cloud Club: It's Always Day One",
      slug: "being-part-of-aws-cloud-club-its-always-day-one",
      excerpt:
        "How joining AWS Cloud Club transformed my perspective on software development, opened new opportunities, and inspired me to keep learning with a Day One mindset.",
      category: "Community",
      coverImage: "/images/posts/aws-cloud-club-day-one.jpg",
      body: `
# Being Part of AWS Cloud Club: It's Always Day One

One of the best decisions I made during my college journey was becoming a member of **AWS Cloud Club Haribon**. What started as simple curiosity about cloud computing eventually became one of the biggest influences on my growth as a software engineering student.

When I first joined the community, my goal was straightforward: learn about AWS and cloud computing. I attended workshops, joined technical talks, explored AWS services, and met students who shared the same passion for technology. Every event introduced me to new concepts and reminded me that there was always something new to learn.

As I became more involved, opportunities began to appear. Through the connections and experiences I gained in the community, I participated in my first hackathon, where my team successfully finished as one of the **Top 5 teams**. That experience showed me how valuable collaboration, communication, and problem-solving are when building software under pressure.

Eventually, I had the privilege of serving as a **Department Lead** within AWS Cloud Club Haribon. Transitioning from a member who attended events to someone who helped organize them gave me a completely different perspective. Leadership taught me that building a community is just as important as building software. Behind every successful event is a team that plans, communicates, and works together toward a common goal.

Perhaps the biggest lesson AWS Cloud Club taught me is that **software development is much more than writing code**. Before joining, I thought becoming a developer was mostly about programming languages and frameworks. Through AWS, I discovered the importance of cloud infrastructure, networking, security, scalability, monitoring, reliability, and cost optimization. These are all essential parts of building real-world applications that users can trust.

The community also introduced me to the mindset of continuous learning—what Amazon calls **"Day One."** Every project, every workshop, every certification, and every challenge is another opportunity to learn something new. No matter how much experience you gain, there's always another technology, service, or idea waiting to be explored.

Looking back, AWS Cloud Club didn't just teach me cloud computing. It gave me opportunities to grow as a developer, collaborate with talented people, develop leadership skills, and see software engineering from a broader perspective.

Being part of AWS Cloud Club has shaped the way I approach technology, and it's a journey that continues today. After all, in tech, it's always **Day One**.
  `,
      createdAt: new Date("2026-05-10T10:00:00Z"),
    },
    {
      title:
        "Leading the Cloud and Infrastructure Department at AWS Cloud Club Haribon",
      slug: "leading-the-cloud-and-infrastructure-department-at-aws-cloud-club-haribon",
      excerpt:
        "My experience serving as Cloud and Infrastructure Lead, organizing technical events, mentoring students, and discovering that leadership is about listening as much as teaching.",
      category: "Career",
      coverImage: "/images/posts/cloud-infrastructure-lead.png",
      body: `
# Leading the Cloud and Infrastructure Department at AWS Cloud Club Haribon

Serving as the **Cloud and Infrastructure Lead** of AWS Cloud Club Haribon has been one of the most meaningful experiences of my college journey. It was more than a leadership position—it was an opportunity to give back to the community that helped me discover my passion for cloud computing.

As the lead of the department, I was responsible for planning and organizing **Study Jams**, technical workshops, community events, and hands-on AWS labs. Together with an amazing team, we created learning opportunities that made cloud computing more approachable for students who were just beginning their journey.

One of my favorite parts of the role was facilitating hands-on sessions. From teaching members how to host their first static website using **Amazon S3** to sharing study strategies for AWS certifications, every workshop reminded me that learning becomes more meaningful when knowledge is shared with others.

Preparing technical sessions also pushed me to become a better engineer. Before teaching a topic, I had to understand it thoroughly myself. This encouraged me to explore AWS services more deeply, improve my cloud architecture knowledge, and continuously stay curious about new technologies.

However, the biggest lessons I learned were not technical—they were about leadership.

When I first became a lead, I thought leadership meant having the right answers. Over time, I realized that effective leadership begins with listening. Every member has different experiences, different goals, and different ways of learning. By listening first, encouraging ideas, and supporting others, I learned how to build a team where everyone felt valued and confident to grow.

Beyond the workshops and events, what I'll remember most are the people. I met passionate students, supportive mentors, dedicated officers, and lifelong friends who challenged me to become a better developer and a better person. Their encouragement played a significant role in many of the opportunities and achievements I've experienced throughout college.

Looking back, leading the Cloud and Infrastructure Department taught me far more than AWS services. It strengthened my communication skills, improved my confidence in public speaking, taught me how to mentor others, and showed me that leadership is about serving your team rather than standing in front of it.

I'm grateful for the opportunity to have served AWS Cloud Club Haribon. It reminded me that one of the best ways to grow is to help others grow, and that the impact of a community extends far beyond technology.
  `,
      createdAt: new Date("2026-03-01T09:00:00Z"),
    },
    {
      title: "From Student to Software Engineering Intern at Stratpoint",
      slug: "from-student-to-software-engineering-intern-at-stratpoint",
      excerpt:
        "How the AWS community, continuous learning, and meaningful connections led me to my Software Engineering internship at Stratpoint.",
      category: "Career",
      coverImage: "/images/posts/stratpoint-internship.jpeg",
      body: `
# From Student to Software Engineering Intern at Stratpoint

One of the biggest milestones in my journey as a software engineering student was becoming a **Software Engineering Intern at Stratpoint**. Looking back, this opportunity wasn't the result of a single application—it was the outcome of months of learning, building connections, and staying involved in the tech community.

My journey began with **AWS Cloud Club Haribon**, where I first discovered my passion for cloud computing. Through workshops, study jams, technical events, and leadership opportunities, I met students, mentors, and professionals who shared the same enthusiasm for technology. The community encouraged me to continuously improve my technical skills while also expanding my professional network.

It was through these connections that I first learned about the internship opportunity at Stratpoint. That experience reminded me that being part of a community isn't only about learning new technologies—it's also about meeting people who can open doors to opportunities you might never discover on your own.

After applying and successfully passing the interview process, I officially started my internship as a **Software Engineering Intern**. While I was excited, I also knew there was still so much to learn. Entering a professional development environment was very different from working on school projects.

One of the first things I appreciated about the internship was the opportunity to work with modern web technologies. Throughout the project, I gained hands-on experience with:

- **Next.js** for building modern full-stack web applications.
- **Drizzle ORM** for creating type-safe database queries and managing schemas.
- **Neon PostgreSQL** as a serverless cloud database.
- **Vercel** for deployment and hosting.
- Modern Git workflows, collaboration, and project organization.

This internship became much more than learning a new technology stack. It helped me understand how modern software is designed, developed, tested, and maintained within a professional team. I learned the importance of writing clean code, documenting my work, communicating with teammates, asking questions when I was stuck, and accepting feedback to continuously improve.

One of the biggest realizations I had during the internship was how much my cloud background complemented software development. Because of my experience with AWS, I already appreciated concepts such as infrastructure, deployment, scalability, networking, security, and cloud architecture. Instead of seeing software development as simply writing code, I began to understand how every part of a system works together to deliver reliable applications.

Beyond the technical skills, the internship helped me grow professionally. I became more confident working in a collaborative environment, managing tasks, communicating with mentors, and solving real-world problems. Every challenge became an opportunity to improve not only as a developer but also as a teammate.

Looking back, I realize that this internship was made possible by every step that came before it—from joining AWS Cloud Club Haribon, earning my AWS certification, participating in hackathons, meeting incredible mentors and friends, and continuously saying "yes" to opportunities for growth.

Stratpoint gave me the opportunity to apply everything I had learned in a professional environment, while AWS Cloud Club Haribon helped pave the path that led me there. Together, they shaped me into a more capable developer and strengthened my passion for building software that makes an impact.

This internship reminded me that opportunities rarely come from one moment alone. They are built through curiosity, continuous learning, meaningful relationships, and the courage to keep moving forward.
  `,
      createdAt: new Date("2026-06-15T08:00:00Z"),
    },
    {
      title:
        "Why Every Computer Engineering Student Should Join a Tech Community",
      slug: "why-every-computer-engineering-student-should-join-a-tech-community",
      excerpt:
        "Joining a tech community can accelerate your growth beyond the classroom through networking, mentorship, leadership, and real-world opportunities.",
      category: "Community",
      coverImage: "/images/posts/tech-community.jpg",
      body: `
# Why Every Computer Engineering Student Should Join a Tech Community

When I first entered college, I believed that becoming a good software engineer depended mainly on getting good grades and learning how to code. While those are certainly important, I eventually realized that some of the most valuable lessons happen outside the classroom.

Joining a tech community completely changed the way I viewed learning and professional growth.

For me, that community was **AWS Cloud Club Haribon**. What started as curiosity about cloud computing became an environment where I could continuously learn, meet inspiring people, and discover opportunities that shaped my journey as a software engineering student.

## Learning Beyond the Classroom

University teaches us the fundamentals of computer science, but technology evolves much faster than any curriculum. Tech communities expose students to modern tools, cloud platforms, software development practices, and industry trends that may not yet be covered in class.

Through workshops, Study Jams, technical talks, and hands-on labs, I gained practical experience with AWS services, cloud computing concepts, and modern software development that complemented what I learned in school.

## Building Meaningful Connections

One of the greatest benefits of joining a tech community is the people you meet.

I had the opportunity to connect with students from different universities, experienced mentors, industry professionals, and fellow technology enthusiasts who shared the same passion for learning. These relationships became valuable sources of advice, encouragement, and collaboration.

Many of the opportunities I experienced—including certifications, hackathons, leadership roles, and even my internship—were possible because of the connections I built through the community.

## Developing Soft Skills

Technical skills may help you build software, but soft skills help you build your career.

Being active in a community taught me how to communicate effectively, collaborate with diverse teams, manage responsibilities, and present technical ideas to different audiences. These skills are difficult to develop by working alone but become second nature when you're actively participating in community activities.

## Growing Through Leadership

Eventually, I had the privilege of serving as the **Cloud and Infrastructure Lead** of AWS Cloud Club Haribon.

Leading workshops, organizing Study Jams, and mentoring fellow students taught me that leadership isn't about having all the answers—it's about helping others succeed. I learned that listening, supporting teammates, and creating opportunities for others are just as important as technical expertise.

Interestingly, teaching cloud computing strengthened my own understanding of AWS. Preparing workshops encouraged me to study topics more deeply and continuously improve my own knowledge.

## Learning From Mentors

Another invaluable aspect of joining a community is mentorship.

Throughout my journey, I met mentors who generously shared their experiences, offered career advice, and encouraged me to challenge myself. Their guidance helped me make better decisions, avoid common mistakes, and gain confidence as I pursued certifications, projects, and leadership opportunities.

Having mentors doesn't mean they'll solve your problems—it means you'll have people who inspire you to become better.

## Opportunities Follow Participation

One lesson I've learned is that opportunities rarely come to those who simply wait for them.

By attending events, volunteering, participating in workshops, joining hackathons, and taking on leadership responsibilities, I discovered opportunities I never expected. Every event introduced me to new people, every project taught me something new, and every experience opened another door.

The more involved I became, the more opportunities naturally followed.

## Final Thoughts

If you're a Computer Engineering or Computer Science student, my advice is simple: **join a tech community.**

Whether it's an AWS Cloud Club, Google Developer Student Club, Microsoft Learn Student Ambassador community, or any other technology organization, don't limit your learning to the classroom.

Communities help you grow not only as a programmer, but also as a communicator, leader, teammate, and lifelong learner.

Looking back, joining a tech community was one of the best decisions I made during college. The knowledge I gained was valuable, but the friendships, mentorship, leadership experiences, and opportunities I found were even more impactful.

Sometimes, the most important lessons aren't found in lectures or textbooks—they're found in the communities that inspire you to keep learning.
  `,
      createdAt: new Date("2026-04-20T10:00:00Z"),
    },
    {
      title: "It's Always Day One",
      slug: "its-always-day-one",
      excerpt:
        "How Amazon's Day One philosophy became more than a motto—it became the mindset that shaped my journey in AWS Cloud Club Haribon and my growth as a developer.",
      category: "Community",
      coverImage: "/images/posts/its-always-day-one.jpg",
      body: `
# It's Always Day One

One phrase that has stayed with me throughout my cloud journey is **"It's Always Day One."**

Popularized by Amazon founder Jeff Bezos, the Day One philosophy is a reminder to approach every day with curiosity, humility, and the willingness to keep learning. It encourages us to avoid becoming comfortable, to continue experimenting, and to embrace change as an opportunity for growth.

Although it began as Amazon's philosophy, I experienced what it truly meant through **AWS Cloud Club Haribon**.

When I first joined the organization, I knew very little about cloud computing. Like many students, I thought software development was mostly about writing code. AWS Cloud Club introduced me to an entirely different side of technology—cloud infrastructure, networking, security, scalability, architecture, and the countless services that power modern applications.

Every workshop, Study Jam, and technical event felt like another **Day One**. There was always a new AWS service to explore, a new concept to understand, or a new challenge to solve. Instead of feeling overwhelmed by how much there was to learn, the community encouraged me to embrace continuous learning one step at a time.

As I became more involved, the Day One mindset extended beyond technical knowledge.

The community encouraged me to earn my first AWS certification, participate in hackathons, attend technical conferences, and eventually take on leadership responsibilities as the **Cloud and Infrastructure Lead**. Each opportunity pushed me outside my comfort zone, reminding me that growth begins whenever we're willing to become beginners again.

Serving as a leader gave the Day One philosophy an entirely new meaning.

Teaching AWS workshops, organizing Study Jams, and mentoring fellow students taught me that learning never stops—even for those who teach. Every session required preparation, deeper research, and continuous improvement. The more I shared my knowledge, the more I realized how much there was still to discover.

Perhaps the greatest lesson I learned is that Day One isn't only about technology.

It's about staying curious.

It's about asking questions without being afraid of not knowing the answer.

It's about listening to others, accepting feedback, and continuously improving.

It's about helping others begin their own journeys, just as someone once helped you begin yours.

AWS Cloud Club Haribon embodies this philosophy through its members. Every semester welcomes students who are completely new to cloud computing, while experienced members willingly mentor and support them. Knowledge is shared freely, ideas are exchanged openly, and everyone grows together regardless of where they started.

Looking back, AWS Cloud Club gave me much more than technical knowledge. It gave me friendships, mentors, leadership opportunities, confidence, and a mindset that I know will stay with me throughout my career.

Today, whether I'm studying for a certification, building a project, leading a workshop, or starting a new challenge, I remind myself of the same philosophy that inspired my journey:

**It's always Day One.**

Because in technology, there will always be something new to learn, someone new to help, and another opportunity to grow.
  `,
      createdAt: new Date("2026-05-01T09:00:00Z"),
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
