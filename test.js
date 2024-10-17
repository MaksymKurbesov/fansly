// if (document.readyState !== 'loading') {
//     console.log('document is already ready, just execute code here');
//     myInitCode();
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
//         console.log('document was not ready, place code here');
//         myInitCode();
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
    myInitCode();
});

async function myInitCode() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        console.log(response, 'response')// Укажите версию Bootstrap
        if (response.ok) {
            let css = await response.text();
            // css = css.replace(/;/g, ' !important;');
            const style = document.createElement('style');
            style.textContent = css;

            document.head.appendChild(style);
            console.log('Bootstrap styles added dynamically as <style>.');
        } else {
            console.error('Failed to load Bootstrap CSS:', response.status);
        }
    } catch (error) {
        console.error('Error loading Bootstrap CSS:', error);
    }
}