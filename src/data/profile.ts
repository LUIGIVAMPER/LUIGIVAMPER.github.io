// Site-wide personal data. Edit here; components read from this file.

export const profile = {
  name: 'Jianwen Lyu',
  affiliation: 'M.S. in Computer Science · Northwestern University',
  status: 'Prospective PhD Applicant · Fall 2027',
  vision: 'Reliable Embodied AI',
  focus: 'Physical Reasoning for Robotic Manipulation',
  statement:
    'I am interested in developing reliable embodied agents that can understand physical constraints, execute long-horizon manipulation tasks, and adapt their behavior through interaction with the physical world.',
  question:
    'How can embodied agents move beyond recognizing the physical world to reliably interacting with it, especially when physical constraints are complex, uncertain, or changing?',
  bio: 'I completed my M.S. in Computer Science at Northwestern University and continue to work with Prof. Manling Li in the MLL Lab as a research assistant, building benchmarks and evaluations for embodied and multimodal agents. I am applying to PhD programs for Fall 2027.',
  tags: ['Physical Reasoning', 'Robotic Manipulation', 'Adaptive Agents'],
  email: 'jianwenlyu27@gmail.com',
  links: {
    cv: '/cv/Jianwen_Lyu_CV.pdf',
    github: 'https://github.com/LUIGIVAMPER',
    // Fill in when available; empty strings are hidden.
    scholar: '',
    linkedin: '',
  },
  headshot: '/images/headshot.jpg',
};

export const arc = [
  {
    key: 'understanding',
    step: '01',
    title: 'Understanding',
    question: 'Can AI models understand the spatial, topological, and interaction structure of the physical world?',
    projects: ['mindtopo', 'enact'],
    future: false,
  },
  {
    key: 'acting',
    step: '02',
    title: 'Acting',
    question: 'Can agents execute reliable long-horizon actions under sustained physical and geometric constraints?',
    projects: ['roboarc'],
    future: false,
  },
  {
    key: 'adapting',
    step: '03',
    title: 'Adapting',
    question: 'Can agents discover changing constraints and adapt their policies during execution?',
    projects: [],
    future: true,
  },
] as const;

export const interests = [
  {
    title: 'Physical & Structural Reasoning',
    question:
      'How can embodied agents represent and reason about the geometric, topological, and contact constraints that determine which actions are physically feasible?',
    related: 'MindTopo · RoboARC',
  },
  {
    title: 'Reliable Long-Horizon Manipulation',
    question:
      'How can agents translate high-level reasoning into feasible and reliable robot behavior when physical constraints must be maintained throughout execution?',
    related: 'RoboARC',
  },
  {
    title: 'Online Adaptation & Failure Recovery',
    question:
      'How can robots discover unexpected changes in their environment, update their physical models through interaction, and synthesize new feedback policies during execution?',
    related: 'Future research: constraint discovery → physical model updating → policy re-synthesis',
  },
];

export const additionalInterests = 'Safety-aware embodied agents: detecting and responding to unexpected hazards that fall outside the main task.';

export const otherResearch = [
  {
    title: 'SentenceSSM: Sentence as an Input Granularity for Selective State-Space Models',
    meta: "Master's thesis · advised by Prof. Manling Li · 2026",
    text: 'A 780M-parameter Mamba2 model trained on whole-sentence SONAR embeddings (14.4B FineWeb tokens on 4×A100s). A mechanistic Δt-gate probe showed selection concentrating on a-priori important sentences (Wilcoxon p ≈ 4×10⁻¹⁸).',
  },
  {
    title: 'MDP Formulations for Concept-Level Reasoning in Language Models',
    meta: 'Research assistant · MLL Lab · 2025–present',
    text: 'A framework that brings Markov decision process structure to concept-level reasoning, aimed at more interpretable sequential decision-making in language-based reasoning systems.',
  },
];

export const education = [
  {
    school: 'Northwestern University',
    degree: 'M.S. in Computer Science',
    dates: '2024 – 2026',
    detail: 'GPA 3.92/4.0 · Research with Prof. Manling Li',
  },
  {
    school: 'University of Nottingham (UK & Ningbo China)',
    degree: 'B.Sc. (Hons) Computer Science with Artificial Intelligence',
    dates: '2020 – 2024',
    detail: 'First Class Honours',
  },
];

export const service = ['Reviewer, FMEA Workshop @ CVPR 2026', 'Reviewer, LLA Workshop @ COLM 2026'];

export const skills = ['Python', 'PyTorch', 'Robot simulation & benchmark design', 'Large-scale training (multi-GPU)', 'JavaScript', 'C# / Unity'];
