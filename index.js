const shareBtn = document.querySelector('.wrap-share-btn');
const contentUser = document.querySelector('.content-user');

shareBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    contentUser.classList.toggle('active');
})

window.addEventListener('click', function (e) {
    if (contentUser.classList.contains('active') && !contentUser.contains(e.target)) {
        contentUser.classList.remove('active')
    } 
})

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && contentUser.classList.contains('active')) {
        contentUser.classList.remove('active');
    }
})