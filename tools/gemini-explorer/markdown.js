// Shared markdown renderer — safe DOM-based (no innerHTML)
// Supports: **bold**, ### headings, - / * bullet lists, 1. numbered lists, `code`
function renderMarkdown(text, container) {
    container.textContent = '';
    var paragraphs = text.split('\n\n');

    paragraphs.forEach(function(para) {
        para = para.trim();
        if (!para) return;

        // Headings
        if (para.startsWith('### ')) {
            var h = document.createElement('h3');
            appendFormatted(h, para.substring(4));
            container.appendChild(h);
        } else if (para.startsWith('## ')) {
            var h = document.createElement('h2');
            appendFormatted(h, para.substring(3));
            container.appendChild(h);
        } else if (para.startsWith('# ')) {
            var h = document.createElement('h1');
            appendFormatted(h, para.substring(2));
            container.appendChild(h);
        }
        // Bullet / numbered lists
        else if (/^(\s*[-*]\s|^\s*\d+\.\s)/m.test(para)) {
            var lines = para.split('\n');
            var isOrdered = /^\s*\d+\.\s/.test(lines[0]);
            var list = document.createElement(isOrdered ? 'ol' : 'ul');
            lines.forEach(function(line) {
                var match = line.match(/^\s*[-*]\s+(.*)/);
                if (!match) match = line.match(/^\s*\d+\.\s+(.*)/);
                if (match) {
                    var li = document.createElement('li');
                    appendFormatted(li, match[1]);
                    list.appendChild(li);
                } else if (list.lastElementChild) {
                    // continuation line
                    list.lastElementChild.appendChild(document.createElement('br'));
                    appendFormatted(list.lastElementChild, line.trim());
                }
            });
            container.appendChild(list);
        }
        // Regular paragraph
        else {
            var p = document.createElement('p');
            var lines = para.split('\n');
            lines.forEach(function(line, idx) {
                if (idx > 0) p.appendChild(document.createElement('br'));
                appendFormatted(p, line);
            });
            container.appendChild(p);
        }
    });
}

// Append text with **bold**, `code`, and [link](url) formatting using safe DOM methods
function appendFormatted(element, text) {
    var parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/);
    parts.forEach(function(part) {
        if (part.startsWith('**') && part.endsWith('**')) {
            var strong = document.createElement('strong');
            strong.textContent = part.substring(2, part.length - 2);
            element.appendChild(strong);
        } else if (part.startsWith('`') && part.endsWith('`')) {
            var code = document.createElement('code');
            code.textContent = part.substring(1, part.length - 1);
            element.appendChild(code);
        } else if (/^\[([^\]]+)\]\(([^)]+)\)$/.test(part)) {
            var match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            var a = document.createElement('a');
            a.href = match[2];
            a.textContent = match[1];
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.style.color = 'var(--accent)';
            element.appendChild(a);
        } else if (part) {
            element.appendChild(document.createTextNode(part));
        }
    });
}
