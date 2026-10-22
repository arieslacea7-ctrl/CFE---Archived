const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const records = {
  'project-01': {
    eyebrow: 'CFE-P01 / CONCEPT STUDY',
    title: 'PROJECT ECLIPSE',
    body: 'STATUS: OBSERVATION PHASE\\n\\nA fictional research concept exploring how an unknown signal behaves inside a controlled simulation. The current record contains a visual summary only; no real experiment or scientific claim is represented.'
  },
  'project-02': {
    eyebrow: 'CFE-P02 / SPECIMEN FILE',
    title: 'PROJECT MONOLITH',
    body: 'STATUS: UNDER REVIEW\\n\\nA fictional geometric specimen used to illustrate archive documentation and research classification. Notes refer to an imaginary test environment created for this website.'
  },
  'project-03': {
    eyebrow: 'CFE-P03 / SIGNAL ANALYSIS',
    title: 'SILENT SIGNAL',
    body: 'STATUS: DATA REVIEW\\n\\nA fictional waveform investigation. Analysts in the story compare signal patterns and log anomalies for later review. The graphic is illustrative and does not display real intercepted communications.'
  },
  'file-014': {
    eyebrow: 'DOSSIER 014 / LEVEL 03',
    title: 'ANOMALOUS MATERIALS',
    body: 'ARCHIVE SUMMARY\\n\\nRecord includes a fictional specimen description, handling notes, and a mock review timeline. ACCESS NOTE: This is a demonstration dossier, not a real government record.'
  },
  'file-027': {
    eyebrow: 'DOSSIER 027 / LEVEL 02',
    title: 'SIGNAL LOGS',
    body: 'ARCHIVE SUMMARY\\n\\nA fictional log of simulated transmissions and analyst annotations. No real signals, private messages, or surveillance data are collected or stored by this website.'
  },
  'file-061': {
    eyebrow: 'DOSSIER 061 / LEVEL 04',
    title: 'PROJECT HISTORY',
    body: 'ARCHIVE SUMMARY\\n\\nA mock timeline documenting the creation, review, and status changes of fictional CFE projects. Entries are narrative props for the website experience.'
  }
};
const modal = document.getElementById('recordModal');
document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', () => {
    const record = records[button.dataset.modal];
    if (!record) return;
    document.getElementById('modalEyebrow').textContent = record.eyebrow;
    document.getElementById('modalTitle').textContent = record.title;
    document.getElementById('modalBody').textContent = record.body.replaceAll('\\n', '\n');
    modal.showModal();
  });
});
document.getElementById('modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});

document.getElementById('accessForm').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('accessCode').value.trim().toUpperCase();
  const message = document.getElementById('accessMessage');
  if (input === 'PHANTOM') {
    message.textContent = 'ACCESS ACCEPTED — WELCOME, AGENT PHANTOM. DEMO ARCHIVE UNSEALED.';
  } else if (!input) {
    message.textContent = 'ERROR — ENTER AN ACCESS PHRASE.';
  } else {
    message.textContent = 'ACCESS DENIED — PHRASE NOT RECOGNIZED.';
  }
});
