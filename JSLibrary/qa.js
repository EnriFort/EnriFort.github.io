/* qa.js — shared logic for Q&A pages
 *
 * Usage in HTML:
 *   <script src="JS/qa.js"></script>
 *   <script>loadQA('notes/blockchain.md');</script>
 */

// ── Navbar hamburger ──
function myFunction() {
  var x = document.getElementById("myTopnav");
  x.className = x.className === "topnav" ? "topnav responsive" : "topnav";
}

// ── Back to top ──
window.addEventListener('scroll', function() {
  const btn = document.getElementById("myBtn");
  if (btn) btn.style.display =
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
});
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ── Accordion toggle ──
function toggleQA(el) {
  const answer = el.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  el.classList.toggle('open', !isOpen);
  answer.classList.toggle('open', !isOpen);
}

// ── Helpers ──
function slugify(text) {
  return text.toLowerCase().replace(/\*+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const sectionIcons = [
  'fas fa-coins',
  'fab fa-ethereum',
  'fas fa-link',
  'fas fa-lock',
  'fas fa-network-wired',
  'fas fa-cubes',
  'fas fa-brain',
  'fas fa-shield-alt'
];

// ── Main entry point ──
function loadQA(mdPath) {
  fetch(mdPath)
    .then(res => { if (!res.ok) throw new Error(); return res.text(); })
    .then(md => buildQA(md))
    .catch(() => {
      document.getElementById('qa-content').innerHTML =
        `<p style="color:var(--text-dim);font-family:var(--font-mono);font-size:.8rem;">
          Could not load the file — make sure it is at <code>${mdPath}</code>.
        </p>`;
    });
}

// ── Parser & renderer ──
function buildQA(md) {
  const lines = md.split('\n');
  const qaContent = document.getElementById('qa-content');
  const toc = document.getElementById('toc');
  qaContent.innerHTML = '';

  let currentSection = null;
  let currentQuestion = null;
  let sections = [];
  let currentH2Group = null;

  function flushQuestion() {
    if (currentQuestion && currentSection) {
      currentSection.items.push({
        text: currentQuestion.text,
        lines: [...currentQuestion._lines]
      });
    }
    currentQuestion = null;
  }

  function flushSection() {
    flushQuestion();
    if (currentSection && currentH2Group) {
      currentH2Group.sections.push(currentSection);
    }
    currentSection = null;
  }

  function flushH2() {
    flushSection();
    if (currentH2Group) sections.push(currentH2Group);
    currentH2Group = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      flushH2();
      const text = line.replace(/^##\s+/, '').replace(/\*+/g, '').trim();
      currentH2Group = { h2: text, sections: [] };
      // Check if next non-empty line is ### — if not, create implicit section
      let nextMeaningful = '';
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim()) { nextMeaningful = lines[j]; break; }
      }
      currentSection = !nextMeaningful.startsWith('### ')
        ? { text, id: slugify(text), items: [] }
        : null;
      continue;
    }

    if (line.startsWith('### ')) {
      flushSection();
      const text = line.replace(/^###\s+/, '').replace(/\*+/g, '').trim();
      currentSection = { text, id: slugify(text), items: [] };
      continue;
    }

    if (line.match(/^####\s*Q:/)) {
      flushQuestion();
      const text = line.replace(/^####\s*Q:\s*/, '').trim();
      currentQuestion = { text, _lines: [] };
      continue;
    }

    if (line.startsWith('# ')) continue;
    if (line.match(/^A:\s*$/)) continue;
    const answerLine = line.match(/^A:\s+(.+)/) ? line.replace(/^A:\s+/, '') : line;

    if (currentQuestion) currentQuestion._lines.push(answerLine);
  }
  flushH2();

  // ── Render ──
  let sectionIdx = 0;
  let lastTocGroup = '';

  sections.forEach(group => {
    const isQuiz = group.h2.toLowerCase().includes('quiz');
    const tocGroupLabel = isQuiz ? 'QUIZ' : group.h2.toUpperCase();

    if (tocGroupLabel !== lastTocGroup) {
      const tocGroup = document.createElement('div');
      tocGroup.className = 'toc-group';
      tocGroup.textContent = tocGroupLabel;
      toc.appendChild(tocGroup);
      lastTocGroup = tocGroupLabel;
    }

    const groupTitle = document.createElement('div');
    groupTitle.className = 'qa-group-title';
    groupTitle.textContent = '// ' + (isQuiz ? 'QUIZ' : group.h2.toUpperCase());
    qaContent.appendChild(groupTitle);

    group.sections.forEach(sec => {
      const icon = sectionIcons[sectionIdx % sectionIcons.length];
      sectionIdx++;

      const tocLink = document.createElement('a');
      tocLink.href = `#${sec.id}`;
      tocLink.innerHTML = `<i class="${icon} fa-fw"></i> ${sec.text}`;
      toc.appendChild(tocLink);

      const card = document.createElement('div');
      card.className = 'qa-section';
      card.id = sec.id;

      const header = document.createElement('div');
      header.className = 'qa-section-header';
      header.innerHTML = `<span class="section-icon"><i class="${icon}"></i></span><h2>${sec.text}</h2>`;
      card.appendChild(header);

      sec.items.forEach(item => {
        const qDiv = document.createElement('div');
        qDiv.className = 'qa-item';

        const q = document.createElement('div');
        q.className = 'qa-question';
        q.onclick = function() { toggleQA(this); };
        q.innerHTML = `<span>${marked.parseInline(item.text)}</span><i class="fas fa-chevron-down toggle-icon"></i>`;

        const aWrap = document.createElement('div');
        aWrap.className = 'qa-answer';
        const aInner = document.createElement('div');
        aInner.className = 'qa-answer-inner';
        aInner.innerHTML = marked.parse(item.lines.join('\n'));
        aWrap.appendChild(aInner);

        qDiv.appendChild(q);
        qDiv.appendChild(aWrap);
        card.appendChild(qDiv);
      });

      qaContent.appendChild(card);
    });
  });

  // Render math with KaTeX
  if (window.renderMathInElement) {
    renderMathInElement(qaContent, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false}
      ]
    });
  }
}