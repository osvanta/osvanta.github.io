---
layout: ../../../../layouts/Help.astro
title: Configurations and sessions
summary: Save your work as a configuration, and reopen the last session at the next start.
order: 12
---

## Save a configuration

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="The File menu is opened and the pointer shows Save configuration and Open configuration">
  <source src="/clips/configuration-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/configuration-dark.mp4" type="video/mp4">
</video>

**File ▸ Save configuration** (`Ctrl+S`) saves the session to a `.json` file. **File ▸ Open configuration** brings it all back.

A configuration holds:

- the paths of the measurement and the databases, and which database belongs to which channel;
- the calculated signals;
- the plotted signals, with their order, groups, colours, line styles and visibility;
- every plot tab, the axes, the cursors and the markers;
- the display settings.

A configuration holds paths, not the data itself. To open it on another computer, the measurement and the databases must be reachable there too.

File ▸ Open configuration is greyed out while a measurement is decoding.

## Closing with unsaved changes

Closing with changes you have not saved asks whether to save them.

## The last session

Whatever you answer when closing, the application keeps the session, and the next start offers to reopen it. This also works after a crash: the last session is refreshed once a minute while you work.

## Where these files are

| File | Where |
|---|---|
| Configurations you save | Wherever you save them |
| The last session and your preferences | `%LOCALAPPDATA%\Osvanta\BusLogAnalyzer` |

These files hold the names of your measurement, databases and signals. Treat them as being as confidential as the measurement itself. See [Security and data handling](/products/bus-log-analyzer/help/security-and-data/) for the full list.

## Older versions

A configuration keeps every plot tab. An older version of the application that has no tabs opens the first tab.
