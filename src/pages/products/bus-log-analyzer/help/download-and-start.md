---
layout: ../../../../layouts/Help.astro
title: Download and start
summary: Get the ZIP, unpack it, and start the application. What each file in the folder is for.
order: 1
---

There is nothing to install. The application is a folder you unpack and run, and it needs no Python and no administrator rights.

## 1. Download the ZIP

Open the [latest release](https://github.com/osvanta/bus-log-analyzer/releases/latest) on GitHub. Under **Assets** there are three files:

<figure class="filelist" aria-label="The three files of a release">
  <div class="path">Release ▸ Assets</div>
  <ul>
    <li class="start"><span class="kind"></span><span class="name">…_Windows.zip</span><span>Download this one: the application</span></li>
    <li><span class="kind"></span><span class="name">…_SHA256SUMS.txt</span><span>The checksum of the ZIP, to check your download</span></li>
    <li><span class="kind"></span><span class="name">…_sbom.cdx.json</span><span>The list of every component in the build, for security reviews</span></li>
  </ul>
</figure>

Download the application only from this release page.

## 2. Unpack it

Extract the ZIP to a folder you can write to, such as one in your Documents. Do not run it from inside the ZIP.

## 3. Start BusLogAnalyzer.exe

The unpacked folder holds these files. You only ever need the first one:

<figure class="filelist" aria-label="The files in the unpacked folder">
  <div class="path">BusLogAnalyzer</div>
  <ul>
    <li class="start"><span class="kind"></span><span class="name">BusLogAnalyzer.exe</span><span>Start here: the application</span></li>
    <li><span class="kind"></span><span class="name">appdebugger.exe</span><span>The same application with memory checks. It runs slower; use it only to repeat a crash for a problem report</span></li>
    <li><span class="kind"></span><span class="name">README.txt</span><span>A short note on what is in the folder</span></li>
    <li><span class="kind"></span><span class="name">LICENSE</span><span>The application's licence, MPL-2.0</span></li>
    <li><span class="kind"></span><span class="name">LICENSE-MIT</span><span>The licence of the early releases, kept for reference</span></li>
    <li><span class="kind"></span><span class="name">THIRD_PARTY_NOTICES.md</span><span>The components the application includes, and their licences</span></li>
    <li><span class="kind folder"></span><span class="name">licenses</span><span>The full licence texts of those components</span></li>
    <li><span class="kind folder"></span><span class="name">_internal</span><span>The application's own program files. Leave it as it is, next to the .exe</span></li>
  </ul>
</figure>

Double-click `BusLogAnalyzer.exe`. Keep the folder together: the `.exe` does not run without `_internal` beside it.

> **Windows protected your PC.** The application is not code-signed yet, so Windows SmartScreen may stop it the first time. Click **More info**, then **Run anyway**.

## Check the download

`SHA256SUMS.txt` lists the checksum of the ZIP. In PowerShell, run `Get-FileHash` on the downloaded ZIP: it must print the same value.

## Where the application writes

- Logs, settings and the last session go to `%LOCALAPPDATA%\Osvanta\BusLogAnalyzer`. Only you and the computer's administrators can read that folder.
- Temporary working files go to `%TEMP%` and are removed when the measurement is closed.
- Configurations and exports go only where you save them.

To keep the first folder somewhere else, set the environment variable `OSVANTA_DATA_DIR` to that folder. The full list of files is in [Security and data handling](/bus-log-analyzer/security-and-data/).

## Updating and removing

- **Update:** download the new ZIP and extract it to a new folder. The application does not check for updates itself.
- **Remove:** delete the application's folder, and `%LOCALAPPDATA%\Osvanta\BusLogAnalyzer` for its logs and settings. Nothing is written to the registry.

## Next

[The window at a glance](/products/bus-log-analyzer/help/the-window/).
