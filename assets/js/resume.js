(function () {
  'use strict';
  var root = document.querySelector('.resume');
  if (!root) return;
  var source = document.getElementById('resume-source').content;
  var timeline = root.querySelector('.resume-timeline');
  var status = root.querySelector('.resume-status');
  var filters = Array.from(root.querySelectorAll('.resume-filters input'));
  var exportButton = root.querySelector('.resume-export');
  var labels = {work: 'work', life: 'life', 'outside-of-work': 'outside of work'};
  var years = new Map();
  var year = null;
  var entry = null;
  var invalid = false;

  // Native Markdown headings form the data format. Everything below an entry
  // belongs to it until the next year (h2) or entry (h3).
  Array.from(source.children).forEach(function (node) {
    if (node.tagName === 'H2') {
      year = /^\d{4}$/.test(node.textContent.trim()) ? node.textContent.trim() : null;
      if (!year) invalid = true;
      entry = null;
    } else if (node.tagName === 'H3') {
      var match = node.textContent.trim().match(/^\[(work|life|outside-of-work)\]\s+(.+)$/);
      entry = null;
      if (!year || !match) { invalid = true; return; }
      if (!years.has(year)) years.set(year, []);
      entry = document.createElement('article');
      entry.className = 'resume-entry';
      entry.dataset.category = match[1];
      var category = document.createElement('p');
      category.className = 'resume-category';
      category.textContent = labels[match[1]];
      var heading = document.createElement('h3');
      heading.textContent = match[2];
      entry.append(category, heading);
      years.get(year).push(entry);
    } else if (entry) {
      entry.appendChild(node.cloneNode(true));
    } else if (node.textContent.trim()) {
      invalid = true;
    }
  });

  Array.from(years.keys()).sort(function (a, b) { return Number(b) - Number(a); }).forEach(function (value) {
    var section = document.createElement('section');
    section.className = 'resume-year';
    var heading = document.createElement('h2');
    heading.textContent = value;
    heading.id = 'resume-year-' + value;
    section.setAttribute('aria-labelledby', heading.id);
    var entries = document.createElement('div');
    entries.className = 'resume-entries';
    years.get(value).forEach(function (item) { entries.appendChild(item); });
    section.append(heading, entries);
    timeline.appendChild(section);
  });

  function update() {
    var selected = filters.filter(function (input) { return input.checked; }).map(function (input) { return input.value; });
    var count = 0;
    timeline.querySelectorAll('.resume-year').forEach(function (section) {
      var visible = 0;
      section.querySelectorAll('.resume-entry').forEach(function (item) {
        item.hidden = selected.indexOf(item.dataset.category) === -1;
        if (!item.hidden) { visible++; count++; }
      });
      section.hidden = visible === 0;
    });
    exportButton.disabled = count === 0 || invalid;
    status.textContent = invalid ? 'some entries could not be read. please check the resume markdown format before exporting.' :
      !selected.length ? 'choose a category to see entries.' :
      !count ? 'no entries in the selected categories yet.' :
      count + (count === 1 ? ' entry' : ' entries') + ' · ' + selected.map(function (key) { return labels[key]; }).join(' + ');
  }
  filters.forEach(function (input) { input.addEventListener('change', update); });
  exportButton.addEventListener('click', function () {
    var originalTitle = document.title;
    document.title = 'anand-kumar-r-resume';
    window.addEventListener('afterprint', function restore() {
      document.title = originalTitle;
      window.removeEventListener('afterprint', restore);
    });
    window.print();
  });
  update();
})();
