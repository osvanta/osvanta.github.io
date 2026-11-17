---
layout: ../../../../layouts/Help.astro
title: Cursors, zoom and statistics
summary: Read values with the two cursors, zoom into a time range, and get statistics from the signal table.
order: 6
---

## Cursors

| Key or mouse | Action |
|---|---|
| Click on the plot | Place Cursor 1 there, switching it on if it is off |
| `Shift`+click on the plot | Place Cursor 2 there, switching it on if it is off |
| `R` | Switch both cursors on or off together |
| Drag a cursor | Move it |

The line under the plot shows both cursor times and the time between them. The signal table shows each signal's value at each cursor.

A cursor that is switched on always appears inside the visible window. Cursors are black on a light plot background and white on a dark one.

## Zoom and fit

| Key or mouse | Action |
|---|---|
| `F` | Fit to Window: the whole recording, in time and height |
| `V` | Fit Vertical: the height only, keeping the time range |
| `Z` | Switch Rectangle Zoom on or off |
| Drag on the plot, in Rectangle Zoom | Zoom into the box |
| `Shift`+drag, in Rectangle Zoom | Zoom out around the box; a smaller box zooms out further |
| Double-click on the plot, in Rectangle Zoom | See the whole recording again |
| `Esc` | Leave Rectangle Zoom |

Fit to Window and Fit Vertical work in every plot mode.

## Signal table columns

Right-click the signal table's header to show or hide a column.

| Column | What it shows |
|---|---|
| Cursor values | The signal's value at Cursor 1 and at Cursor 2 |
| **Hex** | Cursor 1's value as the raw value on the bus, in hexadecimal |
| **Δ C2−C1** | Cursor 2's value minus Cursor 1's |
| Unit | The unit from the database |
| **Min**, **Max**, **Mean** | The smallest, largest and average value |
| **Std dev**, **RMS** | Standard deviation and root mean square |
| **Samples** | How many samples were counted |

## Which range the statistics cover

- With **both cursors on**, the statistics are between the cursors.
- Otherwise, they cover the **visible range**.

So to measure one part of a recording, place Cursor 1 at its start and Cursor 2 at its end.

## How Hex is worked out

**Hex** turns the value back into what the bus carried: (value − offset) / factor from the database, padded to the signal's length.

- An 11-bit signal reads `0x7FF` at its maximum.
- An 8-bit signed −1 reads `0xFF`.
- A float signal shows its IEEE 754 bits.
- A signal that no database defines, such as a calculated signal or an MF4 channel the file decoded itself, shows its value in hex when it is a whole number, and nothing otherwise.

## Next

[Markers](/products/bus-log-analyzer/help/markers/).
