---
name: lm
description: Use when Andres invokes $lm, _lm or /lm, or asks "now what?", "what do I do now?", "simplify this", "in layman's terms", "explain it like I'm not technical", or wants a technical situation, handoff, error or decision turned into plain next steps he can carry out himself.
---

# LM: plain next steps

Turn the situation into one answer made of step blocks. The situation is the text after the trigger, or the conversation so far when nothing follows it.

## Output contract

**Index.** Only when there are three or more steps: one line at the very top listing the steps as short phrases separated by " · ", for example `Steps: 1 Google setup · 2 fallback login · 3 Dock icon`. Nothing else before the first block.

**One block per step**, separated by a blank line, in dependency order first and urgency second. Every block has exactly three levels, in this order:

1. **The action line, then the button.** The line is bold, numbered, one line: starts with a verb and says where it happens (Mini, MacBook, iPhone, browser) without any command in it. When a command exists it goes directly under the line in its own fenced code block tagged `bash`, one command per block, so the app shows a Run button. Write every command to run from the machine the reader is sitting at (the MacBook): wrap Mini commands as `ssh mini '...'`, use `ssh -t mini '...'` when the command asks questions, and use `open -a Safari URL` for a page to open. Clicks and messages stay in the line itself.
2. **Why, in plain terms.** One paragraph opening with `Why:` for a reader with no technical background: what the step changes for him, what happens if he skips it, how he will know it worked. A technical word that cannot be avoided gets a short gloss in the same sentence.
3. **How it works.** One paragraph opening with `How it works:` of two to five sentences: the mechanism, the files, services or accounts involved, and why this route beats the alternative. Precise names belong here, not in the two levels above.

**Closing line.** One line opening with `Already handled:` listing automated or finished work, so the blocks hold only actions the reader must take himself.

## Rules

- No preamble beyond the index and no summary after the closing line.
- Fewer than six blocks. With more, put a `Later` line between the urgent blocks and the rest and keep the numbering continuous.
- Write in the language of the reader's last message. No em dashes.
- Every block keeps its three levels even when a level is short.

## Example

Trigger: "now what?" after a deploy that still needs a one-time login.

Steps: 1 Google setup · 2 Dock icon · 3 GitHub backup

**1. On the Mini, prepare the Google login.**
```bash
ssh mini 'cd ~/SharedProjects/Tool && bin/tool setup-google'
```
Why: Google stopped letting the old login report your Gemini balance, so the dashboard needs its own permission once. Skip it and the Gemini card stays off; done right, the card shows a percentage on the next refresh.
How it works: the command copies the public OAuth client constants from the installed CLI into the state directory and tests, read-only, whether the stored login can refresh a token that the quota API accepts. Nothing is written to any CLI's credential store.

**2. On the MacBook, open the page in Safari, then choose File > Add to Dock.**
```bash
open -a Safari https://example.ts.net:8798/
```
Why: Safari can turn any web page into an icon that opens in its own window. Without it you keep typing the address; with it the dashboard behaves like an app.
How it works: Add to Dock creates a standalone web app with its own window and badge support; the page's manifest supplies the name and start URL.

**3. On the Mini, sign in to GitHub, answering the questions it asks.**
```bash
ssh -t mini 'gh auth login'
```
Why: the code exists only on the Mini until GitHub accepts it; a broken disk would lose it. It worked when the command confirms you are logged in.
How it works: `gh auth login` stores a token for your account on the Mini; the governance script run afterwards creates the private repository and pushes the existing commits.

Already handled: the collector refreshes every five minutes on its own.
