const openButtonsModals = document.querySelectorAll('.btn-modal');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn')

const showInformationSendMail = (message, path) => {
    const modals = document.querySelectorAll('.modal');
    const modalOverlay = document.querySelector('.modal-overlay ');
    const modalVisible = document.querySelector(`[data-target="${path}"]`);

    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });

    if (modalVisible) {
        modalVisible.querySelector('.modal-message__content').innerText = message
        modalVisible.classList.add('modal--visible');
        modalOverlay?.classList.add('modal-overlay--visible');
    }
}

openButtonsModals.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        if (path === 'cart-popup') {
            eventPopupCard.renderPopupCart()
            eventPopupCard.startTotalCostCards();
        } else if (path === 'heart-popup') {
            eventPopupHeart.renderPopupHeart()
        }

        document.body.style.overflowY = 'hidden';
        document.querySelector(`[data-target="${path}"]`)?.classList.add('modal--visible');
        setTimeout(() => {
            document.querySelector(`[data-target="${path}"]`)?.classList.add('modal--scaleX');
        }, 10)

        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay && modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        document.body.style.overflowY = 'auto';
        modals.forEach((el) => {
            if (el.classList.contains('modal--visible')) {
                el.classList.remove('modal--scaleX');
                setTimeout(() => {
                    modalOverlay.classList.remove('modal-overlay--visible');
                    el.classList.remove('modal--visible');
                }, 500);
            }
        });
    }
});

modalCloseBtn.forEach(e => {
    e.addEventListener('click', (e) => {
        document.body.style.overflowY = 'auto';
        modals.forEach((el) => {
            if (el.classList.contains('modal--visible')) {
                el.classList.remove('modal--scaleX');
                setTimeout(() => {
                    modalOverlay.classList.remove('modal-overlay--visible');
                    el.classList.remove('modal--visible');
                }, 500);
            }
        });
    })
})



