console.log('[gallery] loaded', new Date().toISOString());

// Document-level CAPTURE: block any link under .gallery .thumbs-gallery (runs before theme handlers)
document.addEventListener('click', (e) => {
    const a = e.target.closest('.gallery .thumbs-gallery a');
    if (a) {
        e.preventDefault(); // stop native navigation
        // don't stopPropagation here; let our bubble handler run later
    }
}, true);

function initOneGallery(gallery) {
    const main = gallery.querySelector('.main-image');
    const viewerLink = gallery.querySelector('.viewer-link');
    const prev = gallery.querySelector('.prev');
    const next = gallery.querySelector('.next');

    const thumbsContainer = gallery.querySelector('.thumbs-gallery');
    if (!main || !thumbsContainer) return;

    const viewer = gallery.querySelector('.viewer');

    let sx = 0, sy = 0, swiping = false;

    function onTouchStart(e) {
        const t = (e.touches && e.touches[0]) || e;
        sx = t.clientX;
        sy = t.clientY;
        swiping = true;
    }

    function onTouchMove(e) {
        if (!swiping) return;
        const t = (e.touches && e.touches[0]) || e;
        const dx = t.clientX - sx;
        const dy = t.clientY - sy;

        if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            e.preventDefault(); // needs passive:false in the listener
        }
    }

    function onTouchEnd(e) {
        if (!swiping) return;
        swiping = false;

        const t = (e.changedTouches && e.changedTouches[0]) || e;
        const dx = t.clientX - sx;
        const dy = t.clientY - sy;

        const THRESHOLD = 40;  // px
        const MAX_VERTICAL = 80;
        if (Math.abs(dx) > THRESHOLD && Math.abs(dy) < MAX_VERTICAL) {
            if (dx > 0) {
                // swipe right => previous image
                show(index - 1);
            } else {
                // swipe left => next image
                show(index + 1);
            }
        }
    }

    viewer.addEventListener('touchstart', onTouchStart, { passive: true });
    viewer.addEventListener('touchmove', onTouchMove, { passive: false });
    viewer.addEventListener('touchend', onTouchEnd, { passive: true });

    // Collect IMG thumbs (works even if wrapped in <a>)
    const thumbs = Array.from(gallery.querySelectorAll('.thumb-gallery')).map(node =>
    node.tagName === 'IMG' ? node : (node.querySelector('img.thumb-gallery, img') || node)
    ).filter(el => el && el.tagName === 'IMG');

    if (!thumbs.length) return;

    if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '0');

    let index = Math.max(thumbs.findIndex(t => t.classList.contains('active')), 0);

    const srcFor = (imgEl) =>
    imgEl.dataset.full ||
    imgEl.closest('a')?.getAttribute('href') ||
    imgEl.currentSrc ||
    imgEl.src;

    function show(i) {
        index = (i + thumbs.length) % thumbs.length;
        const el = thumbs[index];
        const nextSrc = el.dataset.full || el.currentSrc || el.src;

        if (nextSrc) {
            main.src = nextSrc;
            if (viewerLink) viewerLink.href = nextSrc;
            const glb = document.getElementById('gallery-img-glb');
            if (glb) glb.href = nextSrc;
            if (typeof lightbox !== 'undefined' && lightbox?.reload) lightbox.reload();
        }
        main.alt = el.alt || `Image ${index + 1}`;

        thumbs.forEach(t => t.classList.remove('active'));
        el.classList.add('active');

        if (prev) prev.style.display = (index === 0) ? 'none' : '';
        if (next) next.style.display = (index === thumbs.length - 1) ? 'none' : '';
    }

    // Bubble handler: switch the image and stop other handlers
    thumbsContainer.addEventListener('click', (e) => {
        const t = e.target.closest('.thumb-gallery');
        if (!t || !thumbsContainer.contains(t)) return;

        e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        e.stopPropagation();

        const imgEl = (t.tagName === 'IMG') ? t : (t.querySelector('img.thumb-gallery, img') || null);
        const i = imgEl ? thumbs.indexOf(imgEl) : -1;
        if (i >= 0) show(i);
    });

        // Keyboard support (Enter/Space on thumbs)
        thumbsContainer.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const t = e.target.closest('.thumb-gallery');
            if (!t || !thumbsContainer.contains(t)) return;

            e.preventDefault();
            if (e.stopImmediatePropagation) e.stopImmediatePropagation();
            e.stopPropagation();

            const imgEl = (t.tagName === 'IMG') ? t : (t.querySelector('img.thumb-gallery, img') || null);
            const i = imgEl ? thumbs.indexOf(imgEl) : -1;
            if (i >= 0) show(i);
        });

            // Arrows
            prev?.addEventListener('mousedown', (e) => e.preventDefault());
            next?.addEventListener('mousedown', (e) => e.preventDefault());
            prev?.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); show(index - 1); });
            next?.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); show(index + 1); });

            // Keyboard arrows
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') show(index - 1);
                if (e.key === 'ArrowRight') show(index + 1);
            }, { passive: true });

                // Init
                show(index);
}

function initGalleries(root = document) {
    root.querySelectorAll('.gallery').forEach(initOneGallery);
}

// Initial load + SPA
if (document.readyState !== 'loading') initGalleries(document);
else document.addEventListener('DOMContentLoaded', () => initGalleries(document));

if (window.document$) {
    window.document$.subscribe(() => initGalleries(document));
}
