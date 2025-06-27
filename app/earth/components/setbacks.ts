// data/setbacks.ts

export const setbacks = [
  {
    id: "tea-master",
    emoji: "🍵",
    title: "Tea before the Duel",
    fullStory: `During my internship, I was given the simplest tasks among four interns. I wasn’t even considered for interviews or full-time conversion. It shook my confidence — was I underperforming? Or was it something else, like being the only woman in the group?

After leaving that situation, I remembered a Zen story my father once told. A humble tea master was challenged to a duel by a samurai. Before the fight, the master requested to serve tea to the audience. He moved so swiftly and precisely that the samurai, stunned by the grace and focus in every motion, withdrew his sword. He knew he was already outmatched — not in strength, but in clarity.

I only understood the story after that experience. Even the smallest tasks, when done with full presence, reveal something powerful.`,
    lesson:
      "Even the simplest of actions, when done with quiet clarity, carry an invisible force. I learned to stop measuring worth by external tasks and started reclaiming my own presence.",
  },
  {
    id: "zebra-pipeline",
    emoji: "🦓",
    title: "The Occam’s Razor",
    fullStory: `In my first full-time role, I was testing my image capture pipeline. To cross-check the output, I wrote a simple Python script to dump the captured data as an image.

The result? A zebra-striped image.

It confused me. I dove back into the hardware pipeline. Rechecked every module. Scoured through the FSMs. Simulated again and again. Two weeks passed.

Only then did I realize: in the Python script, I forgot to **transpose** the image matrix before saving. The sensor data was row-major, but I had used column-major dimensions. That alone created the zebra pattern.

It was such a small mistake.

But it didn’t end there. Even after correcting that, the lens output showed a **solid green screen** — no image. Again, I doubted my logic. I rechecked the whole processing pipeline.

Turns out... I hadn’t **adjusted the focus** on the lens. That took me another 15 days to figure out.

What hurt most was not the mistake, but the reason I made it: I didn’t trust myself enough to suspect anything else. I kept assuming the issue was in my own logic — that I must have done something wrong.

Now I know better. Next time, I’ll check the basics first.`,
    lesson:
      "Sometimes the simplest explanation is the right one. Lack of confidence made me overlook obvious things — transpose, focus. I learned to trust myself, and keep Occam’s Razor close.",
  },
];
