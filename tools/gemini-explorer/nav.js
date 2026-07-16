/* Shared sidebar navigation - Gemini Explorer */
(function() {
    'use strict';

    var currentPage = location.pathname.split('/').pop() || 'index.html';

    var sections = [
        { title: '', links: [
            ['index.html', 'Home', 'All tools at a glance'],
        ]},
        { title: 'Analyze', links: [
            ['tokens.html', 'Token Counter', 'Count tokens in text and images'],
            ['models.html', 'Model Explorer', 'Browse available Gemini models'],
        ]},
        { title: 'Vision', links: [
            ['describe.html', 'Image Describer', 'Describe images with AI'],
            ['detect.html', '3D Spatial', 'Points and 3D bounding boxes'],
            ['video.html', 'Video Analyzer', 'Analyze video content'],
        ]},
        { title: 'Text & Data', links: [
            ['prompt.html', 'Playground', 'Chat with system instructions'],
            ['extract.html', 'Extractor', 'Extract structured data'],
            ['embed.html', 'Embeddings', 'Compute text similarity'],
            ['search.html', 'Search', 'Grounded Google Search'],
            ['pdf.html', 'PDF Analyzer', 'Analyze PDF documents'],
            ['url.html', 'URL Context', 'Summarize and analyze web pages'],
            ['files.html', 'File Search', 'Upload and query documents'],
        ]},
        { title: 'AI Tools', links: [
            ['think.html', 'Thinking', 'See model reasoning step by step'],
            ['code.html', 'Code Runner', 'Generate and execute Python code'],
            ['maps.html', 'Maps', 'Location-aware queries with Google Maps'],
            ['research.html', 'Deep Research', 'Multi-step research agent'],
            ['live.html', 'Live Chat', 'Real-time voice & text conversation'],
            ['cache.html', 'Context Cache', 'Cache content for repeated queries'],
        ]},
        { title: 'Creative', links: [
            ['tts.html', 'Text to Speech', 'Generate speech from text'],
            ['story.html', 'Story Illustrator', 'Generate illustrated storybooks'],
            ['animate.html', 'AI Video Generator (Veo)', 'Create story videos with AI'],
        ]},
    ];

    // Find current page info
    var currentPageName = '';
    sections.forEach(function(s) {
        s.links.forEach(function(l) {
            if (l[0] === currentPage) currentPageName = l[1];
        });
    });

    // --- Build Topbar ---
    var topbar = document.createElement('div');
    topbar.className = 'gt-topbar';

    var hamburger = document.createElement('button');
    hamburger.className = 'gt-hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation');
    for (var i = 0; i < 3; i++) {
        var bar = document.createElement('span');
        bar.className = 'gt-hamburger-bar';
        hamburger.appendChild(bar);
    }
    topbar.appendChild(hamburger);

    var brand = document.createElement('a');
    brand.className = 'gt-topbar-brand';
    brand.textContent = 'Gemini Explorer';
    brand.href = 'index.html';
    brand.style.textDecoration = 'none';
    brand.style.color = 'inherit';
    topbar.appendChild(brand);

    if (currentPageName) {
        var pageName = document.createElement('span');
        pageName.className = 'gt-topbar-page';
        pageName.textContent = currentPageName;
        topbar.appendChild(pageName);
    }

    // Theme toggle button
    var themeBtn = document.createElement('button');
    themeBtn.className = 'gt-theme-toggle';
    themeBtn.setAttribute('title', 'Toggle theme');

    var svgNS = 'http://www.w3.org/2000/svg';

    // Moon icon
    var moonSvg = document.createElementNS(svgNS, 'svg');
    moonSvg.setAttribute('class', 'gt-icon-moon');
    moonSvg.setAttribute('viewBox', '0 0 24 24');
    moonSvg.setAttribute('fill', 'none');
    moonSvg.setAttribute('stroke', 'currentColor');
    moonSvg.setAttribute('stroke-width', '2');
    moonSvg.setAttribute('stroke-linecap', 'round');
    moonSvg.setAttribute('stroke-linejoin', 'round');
    var moonPath = document.createElementNS(svgNS, 'path');
    moonPath.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
    moonSvg.appendChild(moonPath);
    themeBtn.appendChild(moonSvg);

    // Sun icon
    var sunSvg = document.createElementNS(svgNS, 'svg');
    sunSvg.setAttribute('class', 'gt-icon-sun');
    sunSvg.setAttribute('viewBox', '0 0 24 24');
    sunSvg.setAttribute('fill', 'none');
    sunSvg.setAttribute('stroke', 'currentColor');
    sunSvg.setAttribute('stroke-width', '2');
    sunSvg.setAttribute('stroke-linecap', 'round');
    sunSvg.setAttribute('stroke-linejoin', 'round');
    var sunParts = [
        ['circle', {cx: '12', cy: '12', r: '5'}],
        ['line', {x1: '12', y1: '1', x2: '12', y2: '3'}],
        ['line', {x1: '12', y1: '21', x2: '12', y2: '23'}],
        ['line', {x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64'}],
        ['line', {x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78'}],
        ['line', {x1: '1', y1: '12', x2: '3', y2: '12'}],
        ['line', {x1: '21', y1: '12', x2: '23', y2: '12'}],
        ['line', {x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36'}],
        ['line', {x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22'}],
    ];
    sunParts.forEach(function(part) {
        var el = document.createElementNS(svgNS, part[0]);
        var attrs = part[1];
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
        sunSvg.appendChild(el);
    });
    themeBtn.appendChild(sunSvg);

    themeBtn.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Search button in topbar
    var searchBtn = document.createElement('button');
    searchBtn.className = 'gt-search-btn';
    searchBtn.setAttribute('title', 'Search tools (Ctrl+K)');

    var searchSvg = document.createElementNS(svgNS, 'svg');
    searchSvg.setAttribute('viewBox', '0 0 24 24');
    searchSvg.setAttribute('fill', 'none');
    searchSvg.setAttribute('stroke', 'currentColor');
    searchSvg.setAttribute('stroke-width', '2');
    searchSvg.setAttribute('stroke-linecap', 'round');
    searchSvg.setAttribute('stroke-linejoin', 'round');
    var searchCircle = document.createElementNS(svgNS, 'circle');
    searchCircle.setAttribute('cx', '11');
    searchCircle.setAttribute('cy', '11');
    searchCircle.setAttribute('r', '8');
    searchSvg.appendChild(searchCircle);
    var searchLine = document.createElementNS(svgNS, 'line');
    searchLine.setAttribute('x1', '21');
    searchLine.setAttribute('y1', '21');
    searchLine.setAttribute('x2', '16.65');
    searchLine.setAttribute('y2', '16.65');
    searchSvg.appendChild(searchLine);
    searchBtn.appendChild(searchSvg);

    var kbdHint = document.createElement('span');
    kbdHint.className = 'gt-search-kbd';
    kbdHint.textContent = '\u2318K';
    searchBtn.appendChild(kbdHint);

    // Detect platform for shortcut hint
    if (navigator.platform && navigator.platform.indexOf('Mac') === -1) {
        kbdHint.textContent = 'Ctrl K';
    }

    searchBtn.addEventListener('click', function() { openCmdPalette(); });
    topbar.appendChild(searchBtn);

    topbar.appendChild(themeBtn);

    // --- Build Overlay ---
    var overlay = document.createElement('div');
    overlay.className = 'gt-overlay';

    // --- Build Sidebar ---
    var sidebar = document.createElement('aside');
    sidebar.className = 'gt-sidebar';

    // Sidebar header
    var sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'gt-sidebar-header';

    var sidebarBrand = document.createElement('a');
    sidebarBrand.className = 'gt-sidebar-brand';
    sidebarBrand.textContent = 'Gemini Explorer';
    sidebarBrand.href = 'index.html';
    sidebarBrand.style.textDecoration = 'none';
    sidebarBrand.style.color = 'inherit';
    sidebarHeader.appendChild(sidebarBrand);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'gt-sidebar-close';
    closeBtn.setAttribute('aria-label', 'Close navigation');
    closeBtn.textContent = '\u00D7';
    sidebarHeader.appendChild(closeBtn);

    sidebar.appendChild(sidebarHeader);

    // Sidebar content
    var content = document.createElement('div');
    content.className = 'gt-sidebar-content';

    sections.forEach(function(section) {
        var sectionEl = document.createElement('div');
        sectionEl.className = 'gt-sidebar-section';

        var title = document.createElement('div');
        title.className = 'gt-sidebar-section-title';
        title.textContent = section.title;
        sectionEl.appendChild(title);

        section.links.forEach(function(link) {
            var a = document.createElement('a');
            a.className = 'gt-sidebar-link';
            a.href = link[0];
            if (link[0] === currentPage) a.classList.add('active');

            var name = document.createTextNode(link[1]);
            a.appendChild(name);

            if (link[2]) {
                var desc = document.createElement('span');
                desc.className = 'gt-sidebar-desc';
                desc.textContent = link[2];
                a.appendChild(desc);
            }

            // Close sidebar on link click (same-page navigation)
            a.addEventListener('click', function() {
                closeSidebar();
            });

            sectionEl.appendChild(a);
        });

        content.appendChild(sectionEl);
    });

    // Sidebar search
    var sidebarSearch = document.createElement('div');
    sidebarSearch.className = 'gt-sidebar-search';
    var sidebarSearchInput = document.createElement('input');
    sidebarSearchInput.type = 'text';
    sidebarSearchInput.placeholder = 'Search tools...';
    sidebarSearch.appendChild(sidebarSearchInput);

    sidebarSearchInput.addEventListener('input', function() {
        var q = this.value.toLowerCase().trim();
        var sectionEls = content.querySelectorAll('.gt-sidebar-section');
        sectionEls.forEach(function(secEl) {
            var links = secEl.querySelectorAll('.gt-sidebar-link');
            var anyVisible = false;
            links.forEach(function(link) {
                var text = link.textContent.toLowerCase();
                if (!q || text.indexOf(q) !== -1) {
                    link.classList.remove('search-hidden');
                    anyVisible = true;
                } else {
                    link.classList.add('search-hidden');
                }
            });
            if (!q || anyVisible) {
                secEl.classList.remove('search-hidden-section');
            } else {
                secEl.classList.add('search-hidden-section');
            }
        });
    });

    // Back to cloud-monk.com link
    var backLink = document.createElement('a');
    backLink.className = 'gt-sidebar-back';
    backLink.href = 'https://www.cloud-monk.com';
    backLink.textContent = '← cloud-monk.com';

    // Append search, back link, then content
    sidebar.appendChild(sidebarSearch);
    sidebar.appendChild(backLink);
    sidebar.appendChild(content);

    // --- Build Command Palette (Ctrl+K) ---
    var allTools = [];
    sections.forEach(function(s) {
        s.links.forEach(function(l) {
            allTools.push({ href: l[0], name: l[1], desc: l[2] || '', cat: s.title || 'Home' });
        });
    });

    var cmdBackdrop = document.createElement('div');
    cmdBackdrop.className = 'gt-cmd-backdrop';

    var cmdBox = document.createElement('div');
    cmdBox.className = 'gt-cmd';

    var cmdInputWrap = document.createElement('div');
    cmdInputWrap.className = 'gt-cmd-input-wrap';

    var cmdSearchIcon = searchSvg.cloneNode(true);
    cmdInputWrap.appendChild(cmdSearchIcon);

    var cmdInput = document.createElement('input');
    cmdInput.className = 'gt-cmd-input';
    cmdInput.type = 'text';
    cmdInput.placeholder = 'Search tools...';
    cmdInputWrap.appendChild(cmdInput);

    cmdBox.appendChild(cmdInputWrap);

    var cmdResults = document.createElement('div');
    cmdResults.className = 'gt-cmd-results';
    cmdBox.appendChild(cmdResults);

    var cmdFooter = document.createElement('div');
    cmdFooter.className = 'gt-cmd-footer';

    // Build footer with kbd elements safely
    var footerHints = [
        ['\u2191\u2193', 'Navigate'],
        ['\u21B5', 'Open'],
        ['Esc', 'Close']
    ];
    footerHints.forEach(function(hint) {
        var span = document.createElement('span');
        var kbd = document.createElement('kbd');
        kbd.textContent = hint[0];
        span.appendChild(kbd);
        span.appendChild(document.createTextNode(' ' + hint[1]));
        cmdFooter.appendChild(span);
    });

    cmdBox.appendChild(cmdFooter);

    cmdBackdrop.appendChild(cmdBox);

    var cmdActiveIndex = -1;

    function renderCmdResults(query) {
        cmdResults.textContent = '';
        cmdActiveIndex = -1;
        var q = (query || '').toLowerCase().trim();
        var matches = allTools.filter(function(t) {
            if (!q) return true;
            return t.name.toLowerCase().indexOf(q) !== -1 ||
                   t.desc.toLowerCase().indexOf(q) !== -1 ||
                   t.cat.toLowerCase().indexOf(q) !== -1;
        });

        // Group by category
        var groups = {};
        matches.forEach(function(t) {
            if (!groups[t.cat]) groups[t.cat] = [];
            groups[t.cat].push(t);
        });

        var allItems = [];
        Object.keys(groups).forEach(function(cat) {
            var title = document.createElement('div');
            title.className = 'gt-cmd-group-title';
            title.textContent = cat;
            cmdResults.appendChild(title);

            groups[cat].forEach(function(t) {
                var item = document.createElement('a');
                item.className = 'gt-cmd-item';
                item.href = t.href;

                var nameEl = document.createElement('div');
                nameEl.className = 'gt-cmd-item-name';
                nameEl.textContent = t.name;

                var descEl = document.createElement('div');
                descEl.className = 'gt-cmd-item-desc';
                descEl.textContent = t.desc;

                var textWrap = document.createElement('div');
                textWrap.className = 'gt-cmd-item-text';
                textWrap.appendChild(nameEl);
                if (t.desc) textWrap.appendChild(descEl);

                item.appendChild(textWrap);

                cmdResults.appendChild(item);
                allItems.push(item);
            });
        });

        // Auto-select first
        if (allItems.length > 0) {
            cmdActiveIndex = 0;
            allItems[0].classList.add('active');
        }

        return allItems;
    }

    var cmdItems = [];

    function openCmdPalette() {
        closeSidebar();
        cmdBackdrop.classList.add('open');
        cmdInput.value = '';
        cmdItems = renderCmdResults('');
        document.body.style.overflow = 'hidden';
        setTimeout(function() { cmdInput.focus(); }, 50);
    }

    function closeCmdPalette() {
        cmdBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    cmdInput.addEventListener('input', function() {
        cmdItems = renderCmdResults(this.value);
    });

    cmdInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (cmdItems.length === 0) return;
            if (cmdActiveIndex >= 0) cmdItems[cmdActiveIndex].classList.remove('active');
            cmdActiveIndex = (cmdActiveIndex + 1) % cmdItems.length;
            cmdItems[cmdActiveIndex].classList.add('active');
            cmdItems[cmdActiveIndex].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdItems.length === 0) return;
            if (cmdActiveIndex >= 0) cmdItems[cmdActiveIndex].classList.remove('active');
            cmdActiveIndex = (cmdActiveIndex - 1 + cmdItems.length) % cmdItems.length;
            cmdItems[cmdActiveIndex].classList.add('active');
            cmdItems[cmdActiveIndex].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (cmdActiveIndex >= 0 && cmdItems[cmdActiveIndex]) {
                window.location.href = cmdItems[cmdActiveIndex].href;
            }
        }
    });

    cmdBackdrop.addEventListener('click', function(e) {
        if (e.target === cmdBackdrop) closeCmdPalette();
    });

    // --- Open / Close logic ---
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(function() { sidebarSearchInput.focus(); }, 100);
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        // Reset sidebar search
        sidebarSearchInput.value = '';
        sidebarSearchInput.dispatchEvent(new Event('input'));
    }

    hamburger.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close on Escape / open on Ctrl+K
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (cmdBackdrop.classList.contains('open')) {
                closeCmdPalette();
            } else {
                closeSidebar();
            }
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (cmdBackdrop.classList.contains('open')) {
                closeCmdPalette();
            } else {
                openCmdPalette();
            }
        }
    });

    // --- Theme initialization ---
    function getPreferredTheme() {
        var stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Apply theme (may have already been applied by inline script, but this ensures consistency)
    document.documentElement.setAttribute('data-theme', getPreferredTheme());

    // --- Insert into DOM ---
    document.body.insertBefore(topbar, document.body.firstChild);
    document.body.insertBefore(overlay, document.body.firstChild);
    document.body.insertBefore(sidebar, document.body.firstChild);
    document.body.appendChild(cmdBackdrop);

    // Expose toggleTheme globally for any remaining inline onclick handlers
    window.toggleTheme = function() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };

    // --- Shared API Key (sessionStorage) ---
    var STORAGE_KEY = 'gemini-api-key';

    // Auto-populate API key input on page load
    var keyInput = document.getElementById('api-key-input') || document.getElementById('apiKey');
    if (keyInput) {
        var saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) keyInput.value = saved;

        // Save key to sessionStorage on input change
        keyInput.addEventListener('input', function() {
            var val = this.value.trim();
            if (val) {
                sessionStorage.setItem(STORAGE_KEY, val);
            } else {
                sessionStorage.removeItem(STORAGE_KEY);
            }
        });
    }

    // Expose helper for pages to save API key programmatically
    window.saveApiKey = function(key) {
        if (key) sessionStorage.setItem(STORAGE_KEY, key);
    };

    window.clearApiKey = function() {
        sessionStorage.removeItem(STORAGE_KEY);
        var input = document.getElementById('api-key-input') || document.getElementById('apiKey');
        if (input) input.value = '';
    };
    // --- Model selector auto-population ---
    var MODEL_CACHE_KEY = 'gemini-models-cache';
    var MODEL_CACHE_TTL = 5 * 60 * 1000;
    var modelFetchInFlight = false;

    var MODEL_FILTERS = {
        generateContent: function(m) { return m.supportedGenerationMethods && m.supportedGenerationMethods.indexOf('generateContent') !== -1; },
        embedContent: function(m) { return m.supportedGenerationMethods && m.supportedGenerationMethods.indexOf('embedContent') !== -1; },
        tts: function(m) { return m.name && m.name.indexOf('tts') !== -1; },
        veo: function(m) { return m.name && m.name.indexOf('veo') !== -1; },
        image: function(m) { return m.name && (m.name.indexOf('image') !== -1 || m.name.indexOf('imagen') !== -1); }
    };

    function populateModelSelectors(models) {
        var inputs = document.querySelectorAll('input[data-model-type]');
        inputs.forEach(function(input) {
            var type = input.getAttribute('data-model-type');
            var filter = MODEL_FILTERS[type];
            if (!filter) return;

            var filtered = models.filter(filter);
            filtered.sort(function(a, b) { return (a.displayName || a.name).localeCompare(b.displayName || b.name); });

            var listId = 'model-list-' + (input.id || Math.random().toString(36).substr(2, 6));
            var datalist = document.getElementById(listId);
            if (!datalist) {
                datalist = document.createElement('datalist');
                datalist.id = listId;
                input.parentNode.appendChild(datalist);
                input.setAttribute('list', listId);
            }
            datalist.textContent = '';

            filtered.forEach(function(m) {
                var opt = document.createElement('option');
                var val = m.name.replace(/^models\//, '');
                opt.value = val;
                if (m.displayName && m.displayName !== val) opt.label = m.displayName;
                datalist.appendChild(opt);
            });
        });
    }

    function fetchAndPopulateModels() {
        var apiKey = sessionStorage.getItem(STORAGE_KEY);
        if (!apiKey || modelFetchInFlight) return;

        var cached = sessionStorage.getItem(MODEL_CACHE_KEY);
        if (cached) {
            try {
                var parsed = JSON.parse(cached);
                if (Date.now() - parsed.ts < MODEL_CACHE_TTL) {
                    populateModelSelectors(parsed.models);
                    return;
                }
            } catch(e) {}
        }

        modelFetchInFlight = true;
        fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + apiKey + '&pageSize=1000')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                var models = data.models || [];
                sessionStorage.setItem(MODEL_CACHE_KEY, JSON.stringify({ ts: Date.now(), models: models }));
                populateModelSelectors(models);
            })
            .catch(function() {})
            .then(function() { modelFetchInFlight = false; });
    }

    if (document.querySelectorAll('input[data-model-type]').length > 0) {
        fetchAndPopulateModels();

        if (keyInput) {
            var debounceTimer;
            keyInput.addEventListener('input', function() {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(fetchAndPopulateModels, 500);
            });
        }

        window.addEventListener('focus', fetchAndPopulateModels);
    }
})();
