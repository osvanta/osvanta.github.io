---
layout: ../../../../layouts/Help.astro
title: Open a measurement
summary: Which files the application opens, what it finds in them, and how to see what a file holds.
order: 3
---

## Open the file

Click **Open Measurement** (`Ctrl+O`) and choose your file.

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="Open Measurement is clicked, a measurement file is chosen, and the status bar says what comes next">
  <source src="/clips/open-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/open-dark.mp4" type="video/mp4">
</video>

The clip shows the application's own file window; on your computer the usual Windows one opens.

For a raw bus log, the application scans the file for its CAN and LIN channels, so that the Database Manager can show them in the next step.

## What it opens

| Measurement | Content | Database needed |
|---|---|---|
| BLF (`.blf`) | Raw CAN and LIN frames | DBC or ARXML for CAN, LDF for LIN |
| ASC (`.asc`) | Raw CAN and LIN frames | DBC or ARXML for CAN, LDF for LIN |
| TRC (`.trc`) | Raw CAN frames from PCAN trace files, versions 1.0 to 3.0 | DBC or ARXML |
| MDF4 and MDF3 (`.mf4`, `.mdf`) | Raw CAN or LIN bus logging, or decoded signals | Only for raw bus logging |
| CSV (`.csv`) | A raw CAN export, or signals in columns | Only for raw CAN data |

The application finds out for itself what an MDF or CSV file holds.

## Raw frames or decoded signals

A measurement holds one of two things, and the next step depends on which:

- **Raw bus frames.** The file lists CAN or LIN frames as they were on the bus. The application needs a database to turn them into signals, so go on to [Databases](/products/bus-log-analyzer/help/databases/).
- **Decoded signals.** An MF4, MDF or CSV file can already hold signal values. It needs no database: go straight to [Decode](/products/bus-log-analyzer/help/decode-and-find-signals/).

## See what a file holds

**File ▸ Measurement info** (`Ctrl+I`) describes the file itself: its format, size, start time and duration. For an MF4 it also shows the header, the events and the attachments. MF4 events can be drawn on the plot.

## The original file is never changed

The application only reads the files you open. A damaged MF4 is repaired in a temporary copy, never in place.

## If the file does not open

- Check that the extension matches the content. A `.trc` file that is not a PCAN trace is refused.
- Look at the **Log** panel below the plot: it reports what was read and any warning.
- See [Troubleshooting](/products/bus-log-analyzer/help/troubleshooting/).
