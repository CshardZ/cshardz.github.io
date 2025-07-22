---
title: 'Setting up Python on Windows'
pubDate: 2025-07-01T16:32:00+05:30
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
tags: ["astro", "blogging", "learning in public"]
---

## Step - 1
  - Go to Python official website's Windows download page: [Download for Windows](https://www.python.org/downloads/windows/)
  - Go to **Stable Releases** section
  - Download the **64-bit** installer for windows

## Step - 2
  - Open the recently downloaded installer application
  - Click on **Install now**
  - This will install Python and all its components (language binaries, pip, IDLE)
  - Optionally check the **Add to PATH** box, this is important.

## Step - 3
  - Verify Python Installation
    ```shell
    python --version
    ```
    You will get something like
    ```shell
    Python 3.12.0
    ```
  - Verify pip Installation
    ```shell
    pip --version
    ```
    You will get something like
    ```shell
    pip 23.2.1 from C:\Users\USERNAME\AppData\Local\Programs\Python\Python312\Lib\site-packages\pip (python 3.12)
    ```

## Step - 4
  - If you are getting similar message, you've succesfully installed python on your system.
  - Otherwise those messages didn't appear, you have run the installer again.

---