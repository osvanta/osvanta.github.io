---
layout: ../../../../layouts/Help.astro
title: Troubleshooting
summary: Answers to common problems, and what to put in a problem report.
order: 13
---

## Common problems

### Windows says it protected my PC

The application is not code-signed yet, so SmartScreen stops it the first time. Click **More info**, then **Run anyway**.

### Decode is greyed out

Open a measurement first, with **Open Measurement** (`Ctrl+O`). The status bar at the bottom always says what to do next.

### Decode finished, but there are no signals

A raw bus log needs a database for each channel.

1. Click **Databases** and check that each channel has a database.
2. Check that each **Match quality** is high. A low match usually means the database is on the wrong channel.
3. Look at the **Log** panel: it shows how many message groups were decoded, for example `4/4 groups`.

See [Databases](/products/bus-log-analyzer/help/databases/).

### Trace is greyed out, or says the Trace is unavailable

The Trace is ready once a measurement has been decoded. It shows raw CAN and LIN frames, so it needs a raw bus log: an MF4, MDF or CSV file that holds only decoded signals has no frames to show.

### A signal I expect is not in the tree

- Check the search box above the tree: a search hides every signal that does not match.
- Check **Databases**: a message that no database describes is not decoded.

### File ▸ Open configuration is greyed out

It is unavailable while a measurement is decoding. Wait for Decode to finish.

### The application does not start

Type `%LOCALAPPDATA%\Osvanta\BusLogAnalyzer\logs` in the Explorer address bar and look at `BLA_crash.log`. Send it with a problem report, after checking it.

## What to put in a problem report

1. **The version.** **Help ▸ About** shows it.
2. **What you did**, step by step, what you expected, and what happened.
3. **The two log files.** **Help ▸ Open the log folder** shows them.

| File | What it holds |
|---|---|
| `busloganalyzer_applog.log` | Every line of the **Log** panel, and the warnings and errors behind them |
| `BLA_crash.log` | Why the application ended, when it crashed or froze |

The logs name the files you opened, so check them before you send them to anyone.

## If it crashes

`appdebugger.exe`, next to `BusLogAnalyzer.exe`, is the same application with memory checks. It runs slower, but it records far more about a crash. Repeat the same steps with it, then send `BLA_crash.log`.

## Where to send it

- **A problem, or a feature you need:** open an [issue on GitHub](https://github.com/osvanta/bus-log-analyzer/issues).
- **A question or an idea:** write in [GitHub Discussions](https://github.com/osvanta/bus-log-analyzer/discussions).
- **Anything you would rather not post publicly:** write to [support@osvanta.com](mailto:support@osvanta.com).
- **A security problem:** report it privately, as the [security policy](https://github.com/osvanta/bus-log-analyzer/blob/main/SECURITY.md) describes.

> **GitHub is public.** Do not attach measurements, databases or screenshots you are not allowed to share. Describe them instead: the format, the size, the bus, and how many channels and databases.
