import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Reviews the Mailman — one funny one-line review, in the dog's voice.
// A grudge with a turn at the end: the mailman waves like a friend, then runs.
const ENTRY =
  "One star. He shoves paper through MY door every day, waves like we're friends, then runs. I barked first, I barked last, and I'll bark again tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
console.log(ENTRY);
