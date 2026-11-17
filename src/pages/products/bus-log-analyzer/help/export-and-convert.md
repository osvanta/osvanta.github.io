---
layout: ../../../../layouts/Help.astro
title: Export and convert
summary: Export plotted signals to CSV, Excel or MF4, save a decoded measurement, and join, cut or convert files.
order: 10
---

## Export the plotted signals

**File ▸ Export plotted signals** (`Ctrl+E`) writes the signals you have plotted.

| Format | Notes |
|---|---|
| CSV | Plain text, for scripts and other tools |
| Excel (`.xlsx`) | For a spreadsheet |
| MF4 | Keeps markers as events |

For CSV and Excel you choose the time base:

- **a selected signal's timestamps**, so every row is a sample of that signal, or
- **a recurrence time you enter**, so the rows are evenly spaced.

Plot only the signals you want before you export: the export contains the plotted signals.

## Save the whole decoded measurement

**File ▸ Save decoded measurement as MF4** writes every decoded signal, not only the plotted ones. Use it to hand a decoded measurement to someone who has no database, or to open it again later without decoding.

## Convert files

**Tools ▸ Convert files** works on measurement files, whether one is open or not. It can:

- **join** several measurements into one;
- **cut** a measurement to a time range;
- **resample** it to a new time base;
- **keep only chosen signals**;
- **convert** between BLF, ASC, MF4 and CSV. TRC files can be used as input.

## Reuse a signal selection

In **Choose signals**, inside Convert files:

- **Save as…** keeps the ticked signals as a named selection that works on any file;
- **Import .txt…** and **Export .txt…** share a list with others: one signal name a line, with `*` and `?` allowed.

## What ends up in the files

Exports hold the signal data you export, and go only where you save them. Treat them as being as confidential as the measurement they came from.
