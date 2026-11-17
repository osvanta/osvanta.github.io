---
layout: ../../../../layouts/Help.astro
title: Markers
summary: Put named markers on the plot, jump between them, and keep them in configurations and MF4 exports.
order: 7
---

A marker is a named point in time on the plot. Use markers to remember where something happened, such as a fault, a gear change or the start of a test step.

## Add a marker

- Right-click the plot and choose **Add marker here**, or
- press `M` to add one at Cursor 1.

## Work with a marker

| To do this | Do this |
|---|---|
| Move it | Drag it |
| Rename it | Double-click it |
| Move Cursor 1 to it | Right-click it |
| Delete it | Right-click it |

## Go to a marker

**Go to marker**, in the plot's right-click menu, lists the markers.

- Click a name to bring that marker into view.
- Click the waste bin just after a name to delete that marker.
- The list stays open, so several can go in a row of clicks, and `Delete` deletes the highlighted one.

## Delete markers

**Delete Markers**, the marker and waste bin icon above the plot, is available while there are markers. It offers **Delete all markers**, then each marker by name and time to delete it alone.

## Where markers are kept

- Markers are the same in every plot tab.
- A [configuration](/products/bus-log-analyzer/help/configurations-and-sessions/) saves them.
- An [MF4 export](/products/bus-log-analyzer/help/export-and-convert/) keeps them as events.

## Events from the measurement

An MF4 file can carry its own events. **File ▸ Measurement info** (`Ctrl+I`) lists them, and they can be drawn on the plot.

## Next

[Trace](/products/bus-log-analyzer/help/trace/).
