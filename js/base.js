// ハンバーガーメニューボタン --------------------------------------------------
 const toggle = document.getElementById('menuToggle');

function updateCrossGeometry() {
    const styles = getComputedStyle(toggle);
    const boxW = parseFloat(styles.getPropertyValue('--box-w'));
    const boxH = parseFloat(styles.getPropertyValue('--box-h'));

    const angleRad = Math.atan2(boxH, boxW);
    const angleDeg = angleRad * (180 / Math.PI);
    const diagonal = Math.hypot(boxW, boxH);
    const scaleX = diagonal / boxW;

    toggle.style.setProperty('--x-angle', angleDeg + 'deg');
    toggle.style.setProperty('--x-scale', scaleX);
}

updateCrossGeometry();
window.addEventListener('resize', updateCrossGeometry);

toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
});





// 翻訳 --------------------------------------------------
const buttons = document.querySelectorAll('[data-lang]');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const lang = button.dataset.lang;

        document.querySelectorAll('.ja').forEach(el => {
            el.style.display = lang === 'ja' ? '' : 'none';
        });

        document.querySelectorAll('.en').forEach(el => {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });

    });
});





// swiper --------------------------------------------------

const swiper = new Swiper('.photo.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});