// Research introduction slides, exported from the .pptx (PowerPoint → PNG 1920×1080 + PDF).
// To update: re-export into public/talk/ and adjust the titles below.

export const talk = {
  title: 'From Embodied Understanding to Reliable Robotic Action',
  subtitle: 'Research introduction: past work and future directions',
  pdf: '/talk/Jianwen_Lyu_Research_Introduction.pdf',
  slides: [
    'Title',
    'Overview: my research experiences',
    'ENACT: can foundation models anticipate action consequences?',
    'MindTopo: recognizing topology and acting on it',
    'TopoGym → RoboARC: from topological puzzles to executable policies',
    'RoboARC: physical constraints persist across thousands of steps',
    'RoboARC: early findings',
    'Research plan: reliable perception + adaptive manipulation',
    'Direction 01: noticing unannounced hazards',
    'Direction 02: online world modeling during rollout',
    'References',
  ].map((title, i) => ({
    title,
    src: `/talk/slides/slide-${String(i + 1).padStart(2, '0')}.png`,
  })),
};
