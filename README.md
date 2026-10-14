<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=soft&color=0B3D91&height=150&section=header&text=JIBITESH%20KUMAR%20MISHRA&fontSize=40&fontColor=ffffff&desc=Software%20Engineering%20%E2%80%A2%20Multimodal%20AI%20%E2%80%A2%20Space%20&%20Geospatial%20Computing&descAlignY=68&descSize=16" alt="Header Banner" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=3000&pause=500&color=00F2FF&center=true&vCenter=true&width=850&lines=Architecting+Scalable+C%2B%2B20+%26+Python+Systems;Building+JAX-Accelerated+Multimodal+AI+Pipelines;Citizen+Scientist+%E2%80%A2+Asteroid+Discovery+(2024+RC161)" alt="Typing SVG" />

  <p>
    <a href="https://jibitesh-portfolio.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/PORTFOLIO-0B3D91?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
    </a>
    <a href="https://raw.githubusercontent.com/jibitesh-auth/jibitesh-auth/main/assets/resume.pdf" target="_blank">
      <img src="https://img.shields.io/badge/RESUME-0052FF?style=for-the-badge&logo=googledocs&logoColor=white" alt="Resume" />
    </a>
    <a href="https://www.linkedin.com/in/jibitesh-kumar-mishra" target="_blank">
      <img src="https://img.shields.io/badge/LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="mailto:jibiteshkumarmishra8027@gmail.com">
      <img src="https://img.shields.io/badge/EMAIL-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </p>

  <img src="https://komarev.com/ghpvc/?username=jibitesh-auth&label=PROFILE%20VIEWS&color=0B3D91&style=flat-square" alt="Profile Views" />
</div>

---

### `// EXECUTIVE_SUMMARY`

Computer Science undergraduate (Class of 2027) specializing in **scalable software engineering**, **high-performance ML inference**, and **scientific/space computing**. Passionate about designing clean system architectures, building multimodal AI frameworks, and applying computational methods to real-world scientific challenges.

- **AI & Deep Learning:** Engineering hybrid cloud/local multimodal inference frameworks using `JAX`, `Keras Hub`, and `Gemma` architectures.
- **Systems & Backend Engineering:** Designing modular `C++20` algorithms, distributed microservices, and reliable API gateway architectures.
- **Space & Geospatial Science:** Formulating physics-informed spatial downscaling models (`Sentinel-2`, `Google Earth Engine`) and analyzing astrometric datasets (preliminary discovery of Main Belt Asteroid **2024 RC161** via NASA/IASC).

---

### `// TECHNICAL_INSTRUMENTATION`

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Core Languages** | ![C++20](https://img.shields.io/badge/C++20-00599C?style=flat-square&logo=c%2B%2B&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-336791?style=flat-square&logo=postgresql&logoColor=white) ![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white) |
| **AI & Machine Learning** | ![JAX](https://img.shields.io/badge/JAX-9B51E0?style=flat-square&logo=google&logoColor=white) ![Keras Hub](https://img.shields.io/badge/Keras_Hub-D00000?style=flat-square&logo=keras&logoColor=white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white) ![GenAI SDK](https://img.shields.io/badge/Google_GenAI-4285F4?style=flat-square&logo=google&logoColor=white) ![Scikit-Learn](https://img.shields.io/badge/Scikit_Learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white) |
| **Scientific & Data** | ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white) ![Earth Engine](https://img.shields.io/badge/Google_Earth_Engine-34A853?style=flat-square&logo=googleearth&logoColor=white) ![Astrometrica](https://img.shields.io/badge/Astrometrica-0B3D91?style=flat-square) |
| **Systems & Infrastructure** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Microservices](https://img.shields.io/badge/Microservices_&_REST-0052FF?style=flat-square) ![Arduino](https://img.shields.io/badge/Arduino_Hardware-00979D?style=flat-square&logo=arduino&logoColor=white) |

---

### `// FEATURED_OPEN_SOURCE_SYSTEM`

#### [GemmaX ChatCore](https://github.com/jibitesh-auth/GemmaX_ChatCore) — *Hybrid Multimodal AI Experimentation Platform*
> **Stack:** `Python` • `JAX` • `Keras Hub` • `Gemma 3` • `Google GenAI API`

```mermaid
graph LR
    A(["Client Input<br/>(Text + Vision)"]) --> B["GemmaX Router"]
    B --> C["Context & Memory Manager"]
    B --> D["Vision Encoder"]
    B --> E["Tool / Function Dispatcher"]
    C & D & E --> F{"Hybrid Execution Engine"}
    F -->|Hardware Accelerated| G["Local JAX / Keras Hub<br/>(Gemma 3 on GPU)"]
    F -->|Cloud Scale| H["Google GenAI API"]
    G & H --> I(["Structured Response"])

    classDef core fill:#0B3D91,stroke:#00F2FF,stroke-width:2px,color:#ffffff;
    classDef nodeStyle fill:#1a1a1a,stroke:#4a5568,stroke-width:1px,color:#e2e8f0;
    class B,F core;
    class A,C,D,E,G,H,I nodeStyle;
