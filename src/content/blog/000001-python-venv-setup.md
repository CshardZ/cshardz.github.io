---
title: 'Installing Python Virtual Environment For Isolation In Windows'
pubDate: 2020-07-01T14:30:00+05:30
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
tags: ["astro", "blogging", "learning in public"]
---


#
A **virtual environment** helps isolate your Python project dependencies. Here's how to set it up step-by-step:

---

## Prerequisites

- Python 3.x installed  
  Check with:  
  ```bash
  python --version
  ```
  or  
  ```bash
  python3 --version
  ```

---

## Create a Virtual Environment

```bash
python -m venv venv
```

If using Linux/macOS and Python is mapped to `python3`:

```bash
python3 -m venv venv
```

> `venv` is the name of the virtual environment folder. You can name it anything.

---

## Activate the Environment

- **Windows**
  ```bash
  .\venv\Scripts\activate
  ```

- **macOS/Linux**
  ```bash
  source venv/bin/activate
  ```

---

## Verify

Once activated, your terminal will show the environment name like this:
```bash
(venv) your-computer:project-folder$
```

---

## Install Dependencies

Now install packages like usual, but they stay isolated:
```bash
pip install <package-name>
```

Example:
```bash
pip install requests
```

---

## Deactivate When Done

To exit the virtual environment:

```bash
deactivate
```

---

## Bonus: Requirements File

To save dependencies:
```bash
pip freeze > requirements.txt
```

To install from it:
```bash
pip install -r requirements.txt
```

---

Happy coding! 🚀
