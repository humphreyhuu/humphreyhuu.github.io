// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/cv.pdf";
          },
        },{id: "nav-misc",
          title: "Misc",
          description: "Academic Services, Awards and Others",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. Full list is available on my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-passed-my-doctoral-qualification-exam",
          title: 'I passed my doctoral qualification exam.',
          description: "",
          section: "News",},{id: "news-i-will-be-joining-the-oak-ridge-national-lab-as-a-summer-graduate-research-intern",
          title: 'I will be joining the Oak Ridge National Lab as a summer graduate...',
          description: "",
          section: "News",},{id: "news-our-paper-ii-kea-is-accepted-by-emnlp-2025-findings",
          title: 'Our paper II-KEA is accepted by EMNLP 2025 Findings!',
          description: "",
          section: "News",},{id: "news-my-intern-paper-adatrip-and-hydrodcm-are-accepted-by-the-icdm-2025-dmess-and-the-aaai-2026-ai4es-oral-workshops",
          title: 'My intern paper AdaTrip and HydroDCM are accepted by the ICDM 2025 DMESS...',
          description: "",
          section: "News",},{id: "news-our-paper-bridging-stepwise-lab-informed-pretraining-and-knowledge-guided-learning-for-diagnostic-reasoning-is-accepted-to-ieee-journal-of-biomedical-and-health-informatics-if-6-7",
          title: 'Our paper Bridging Stepwise Lab-Informed Pretraining and Knowledge-Guided Learning for Diagnostic Reasoning is...',
          description: "",
          section: "News",},{id: "news-our-paper-agformer-adaptive-spatiotemporal-graph-informed-transformer-for-multi-reservoir-inflow-forecasting-is-accepted-to-environmental-modelling-amp-amp-software-if-4-6",
          title: 'Our paper AGFormer: Adaptive Spatiotemporal graph informed transformer for multi-reservoir inflow forecasting is...',
          description: "",
          section: "News",},{id: "news-i-passed-my-thesis-proposal-defense",
          title: 'I passed my Thesis Proposal defense.',
          description: "",
          section: "News",},{id: "news-our-paper-exploring-accurate-and-transparent-domain-adaptation-in-predictive-healthcare-via-concept-grounded-orthogonal-inference-is-accepted-to-icml-2026-see-you-in-seoul",
          title: 'Our paper Exploring Accurate and Transparent Domain Adaptation in Predictive Healthcare via Concept-Grounded...',
          description: "",
          section: "News",},{id: "news-our-paper-ii-kea-won-the-best-doctoral-research-poster-award-at-the-icns-stevens-ai-engineering-and-science-symposium",
          title: 'Our paper II-KEA won the Best Doctoral Research Poster Award at the iCNS...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
