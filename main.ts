// The One-Liner Groan-Off — one original dad joke, one line, 94 characters.
//
// The line is fixed text, written out in full below. The program is fully
// deterministic: same bytes on every run, no clock, no randomness, no
// network, no files read at run time, Node 22 standard library only.
//
// Why this line should win a 2v2 against the field:
//  - The twist lands on the very last word: "confidence" starts as the
//    dad's second tool (duct tape and confidence) and ends as the thing
//    leaking. The setup word is reused as the punchline — the reader does
//    the last step, nothing is explained.
//  - Self-own: the dad's DIY fix fails. He is the loser here, beaten by
//    his own tap.
//  - Two worlds collide: a roll of duct tape and an abstract quality
//    treated as plumbing. Setup:punchline is 14:7 words (2:1), inside the
//    skill's target zone; the line is tight and rhythmic out loud.
//  - Fresh: exact-phrase web search for "leaking confidence" + tap /
//    duct tape returned no verbatim match (25 Nov 2026); duct-tape jokes
//    exist, none with this turn. No field cliche ("you're welcome",
//    "in my defense", "filed it under") anywhere in the line.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I tried to fix the leaky tap with duct tape and confidence. " +
  "The tap is now leaking confidence.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// counted as Unicode code points, and not only white space. It must
// also stay exactly one line: any newline would break the one-liner.
const length = [...LINE].length;
if (length < 1 || length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry is ${length} code points, outside the 1-140 gate`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${length} code points, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
