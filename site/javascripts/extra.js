// PAT Documentation Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add PAT branding classes
    document.body.classList.add('pat-documentation');
    
    // Custom functionality for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.hostname.includes('pat.nrel.gov') && !link.hostname.includes('nrel.gov')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // Analytics tracking (placeholder - replace with actual tracking code)
    function trackDocumentationUsage(action, section) {
        console.log(`PAT Documentation: ${action} in ${section}`);
        // Add your analytics tracking here
    }
    
    // Track navigation clicks
    document.querySelectorAll('.md-nav__link').forEach(link => {
        link.addEventListener('click', function() {
            trackDocumentationUsage('navigate', this.textContent.trim());
        });
    });
});

// Function to highlight PAT-specific terminology - only in article content
function highlightPATTerms() {
    const patTerms = {
        'Master DataBook': 'The comprehensive Excel workbook containing all data sources for PAT',
        'PPA': 'Power Purchase Agreement',
        'Utility Sleeved Tariff': 'A utility program for renewable energy procurement'
    };
    
    // Only target content within article sections, avoid headers and navigation
    const contentSelectors = '.md-content__inner p, .md-content__inner li, .md-content__inner td';
    const elements = document.querySelectorAll(contentSelectors);
    
    Object.keys(patTerms).forEach(term => {
        elements.forEach(element => {
            if (element.textContent.includes(term) && !element.querySelector('abbr')) {
                // Use a more careful replacement that preserves existing HTML
                const textNodes = [];
                const walker = document.createTreeWalker(
                    element,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                
                let node;
                while (node = walker.nextNode()) {
                    if (node.textContent.includes(term)) {
                        textNodes.push(node);
                    }
                }
                
                textNodes.forEach(textNode => {
                    if (textNode.textContent.includes(term)) {
                        const newContent = textNode.textContent.replace(
                            new RegExp(`\\b${term}\\b`, 'g'), 
                            `<abbr title="${patTerms[term]}">${term}</abbr>`
                        );
                        if (newContent !== textNode.textContent) {
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = newContent;
                            while (tempDiv.firstChild) {
                                textNode.parentNode.insertBefore(tempDiv.firstChild, textNode);
                            }
                            textNode.remove();
                        }
                    }
                });
            }
        });
    });
}

// Run the highlighting function after the page loads, but only for content areas
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for MkDocs to finish rendering
    setTimeout(highlightPATTerms, 100);
});