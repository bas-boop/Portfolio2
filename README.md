# Portfolio2

## https://www.bas-de-reus.nl/

Portfolio2 is a refreshed and modernized version of my personal portfolio, designed to overcome the limitations of the previous version. My earlier portfolio was challenging to maintain, making it difficult to showcase my growing collection of projects effectively. This new version makes adding projects faster, improves visual appeal, and provides more detailed information about each project.

### Key Improvements
Portfolio2 brings several upgrades to enhance the presentation of my work:
- **Enhanced Visuals**  
  The interface has been redesigned with a modern, user-friendly approach, presenting projects in a visually appealing way and highlighting the skills and technologies behind each one.
- **More Useful Information**  
  Each project now includes detailed information such as key challenges, technologies used, and my specific contributions, helping viewers better understand my capabilities.
- **Effortless Project Management**  
  The process for adding new projects has been simplified, so it’s easy to keep the portfolio up-to-date as new work is completed.

---

# Enhanced Visuals

<details>
 <summary>Old Version</summary>
 
  ![Old Version Thumbnail](https://github.com/user-attachments/assets/80c72e8c-e131-493b-a360-c759608ec653)

  <p align="center">
    <img src="https://github.com/user-attachments/assets/d96a55b6-f88b-4536-8fc5-b295dc9fca7f" width="700" alt="Old version overview">
  </p>

  <p align="center">
    <img src="https://github.com/user-attachments/assets/97e24850-6745-465f-9c3f-fa54627fab9b" width="500" alt="Old version detail 1">
    <img src="https://github.com/user-attachments/assets/db02b60e-4d9b-41d5-916e-13243eb8af84" width="500" alt="Old version detail 2">
  </p>
</details>

<details open>
  <summary>New and Improved Version</summary>

  ![New Version Thumbnail](https://github.com/user-attachments/assets/830ffdf7-f5bc-4c8f-85d8-0b3accddbcf8)

  <p align="center">
    <img src="https://github.com/user-attachments/assets/15700bfd-8590-4b3f-8ab7-007c4b897e30" width="500" alt="New version overview">
    <img src="https://github.com/user-attachments/assets/d3d334ab-8da4-4e55-bf02-fea30410e6f9" width="450" alt="New version detail 1">
  </p>
  
  <p align="center">
    <img src="https://github.com/user-attachments/assets/02d799d8-bd1a-43c1-8e2a-62dead3669cc" width="500" alt="New version detail 2">
    <img src="https://github.com/user-attachments/assets/9a275681-c9c6-475a-b83a-32b5a4c830ea" width="500" alt="New version detail 3">
  </p>
</details>

---

# Useful Information

In the previous version, each project only included a brief description that was often too minimal to be informative. Important details, such as the technologies used, team size, and project date, were limited and only available on the "All Projects" page.

**Example of the old version:**  
![Old project example](https://github.com/user-attachments/assets/340d3b09-785c-46b5-82c2-b4429256c0cf)

In the new version, each project page now includes a **detailed description** along with key information on the right, such as technologies used, team size, and project date. Some elements even feature animations to enhance the user experience.

**Example of the new version:**  
![New project example](https://github.com/user-attachments/assets/64070d2c-0e62-42ce-aabe-2a04a83c6042)

---

# Project Management

On the index page, I wanted to display many projects with a filter system for easy navigation. Instead of manually creating each project’s HTML elements every time, I developed a script to **dynamically generate projects** based on simple data inputs like title, image, and tags. This script ([Projects.js](Projects.js)) automates the process, making it faster to add new projects. Additionally, I created a separate script ([ProjectsData.js](ProjectsData.js)) to hold project data, making it easy to access and update as needed.

Each individual project is also structured for easy setup. Each project has its own data script that organizes content sections, including text, images, code blocks, and a two-image slider. You can see an example here: [Project Data - Kara-oké](Projects/karaoke.js). All this information is processed by the main **project creation script** ([createProjectContent.js](Projects/createProjectContent.js)), which dynamically builds the content. This setup allows me to quickly add new projects by specifying just the title, description, relevant information (technologies used, team, my role), and key features.

# Must Visit

Here are some key pages you might want to explore:

- [Home](https://www.bas-de-reus.nl/) — The main landing page for an overview of my portfolio.
- [About](https://www.bas-de-reus.nl/about) — Learn more about me and my background.
- [Contact](https://www.bas-de-reus.nl/contact) — Get in touch with me.
- [Under Construction](https://www.bas-de-reus.nl/underconstruction) — A page showcasing ongoing updates and projects.
- [404 Error Page](https://www.bas-de-reus.nl/404) — Custom error page for any non-existent links.
- [Miscellaneous Projects](https://www.bas-de-reus.nl/Miscellaneous) — A collection of smaller or varied projects.

Some Projects:
- [Capture Graafsmeer](https://www.bas-de-reus.nl/Projects/CaptureGraafsmeer)
- [Operation Starfall](https://www.bas-de-reus.nl/Projects/OperationStarfall)
- [Kara-oké](https://www.bas-de-reus.nl/Projects/Kara-oke)
