const data1 = [
  {
    author: "Inflect Health",
    title:
      "I’m an ER doctor: Here’s what I found when I asked ChatGPT to diagnose my patients",
    published: "Apr 6",
    avatar: "",
  },
  {
    author: "Jenka",
    title: "AI and the American Smile",
    published: "Mar 27",
    avatar: "",
  },
  {
    author: "Obie Fernandez",
    title: "My kids and I just played D&D with ChatGPT4 as the DM",
    published: "Mar 31",
    avatar: "",
  },
  {
    author: "The PyCoach",
    title:
      "You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users",
    published: "Mar 17",
    avatar: "",
  },
  {
    author: "Sahana Singh  ",
    title: "How I got my daughter to love India and stay close to her roots",
    published: "Apr 4",
    avatar: "",
  },
  {
    author: "New York Mets  ",
    title: "METS OPENING DAY POSTPONED",
    published: "Apr 6",
    avatar: "",
  },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(data1));
}
