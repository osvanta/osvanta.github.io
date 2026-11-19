---
layout: ../../../../layouts/Help.astro
title: Getting started
summary: From a measurement file to your first plot in five minutes.
order: 0
---

Five steps: start the application, open a measurement, decode it, plot a signal, and move around the plot. The clips show a short demo drive of a made-up vehicle.

## 1. Start the application

Unpack the ZIP and double-click `BusLogAnalyzer.exe`. There is nothing to install. The work goes along the top row from left to right.

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="The pointer moves along the top row, and a caption names what each of its eight items does">
  <source src="/clips/tour-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/tour-dark.mp4" type="video/mp4">
</video>

More: [Download and start](/products/bus-log-analyzer/help/download-and-start/).

## 2. Open a measurement

Click **Open Measurement** and choose your file.

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="Open Measurement is clicked, a measurement file is chosen, and the status bar says what comes next">
  <source src="/clips/open-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/open-dark.mp4" type="video/mp4">
</video>

These files can be selected:

| File | What it holds |
|---|---|
| `.blf`, `.asc`, `.trc` | A raw bus log: CAN or LIN frames |
| `.mf4`, `.mdf` | A raw bus log, or signals that are already decoded |
| `.csv` | A raw CAN export, or signals in columns |

More: [Open a measurement](/products/bus-log-analyzer/help/open-a-measurement/).

## 3. Decode

Click **Decode**. The tree on the left fills with the channel, its messages and its signals.

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="Decode is clicked, the signal tree fills, and typing in the search box narrows it to matching signals">
  <source src="/clips/decode-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/decode-dark.mp4" type="video/mp4">
</video>

A raw bus log needs a database first, to turn its frames into signals: click **Databases** and add your DBC, ARXML or LDF file. A file that already holds decoded signals needs none. More: [Databases](/products/bus-log-analyzer/help/databases/).

## 4. Plot

Double-click a signal in the tree to plot it.

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="A signal is double-clicked and appears in the plot, then two more are selected and plotted with Space">
  <source src="/clips/plot-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/plot-dark.mp4" type="video/mp4">
</video>

More: [Plotting](/products/bus-log-analyzer/help/plotting/).

## 5. Fit, zoom and pan

- **Zoom:** turn the mouse wheel over the plot.
- **Pan:** drag the plot.
- **Fit:** click **Fit to Window**, or press `F`, to see the whole recording again.

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="The mouse wheel zooms into the plot, a drag moves along the recording, and Fit to Window shows all of it again">
  <source src="/clips/navigate-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/navigate-dark.mp4" type="video/mp4">
</video>

More: [Cursors, zoom and statistics](/products/bus-log-analyzer/help/cursors-zoom-and-statistics/).

## Next

The other help topics cover each part in full: use the list on the left, the search, or the [index](/products/bus-log-analyzer/help/a-z/).
