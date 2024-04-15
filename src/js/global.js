export function global() {

    // const popupContent = document.querySelector(".popup-time");
    // const brochureShadow = document.querySelector(".brochure__shadow");
    // const closePopupTime = document.querySelectorAll(".close-popup-time");
    // const stopTimer = document.querySelectorAll(".stop-time");
    // const updateTimer = Array.from(
    //     document.getElementsByClassName("update-time")
    // );
    // const lockPopup = document.querySelectorAll(".lock-poup");
    // const unlockpopup = document.querySelectorAll(".unlock-popup");

    const menuLockScroll = document.querySelector(".header__menu-btn");
    // Observer Scroll
    const intro = document.querySelector(".intro");
    const footerBlocks = gsap.utils.toArray(".footer__anim-block");
    const scrollTo = document.querySelector(".scrollto");
    const lockScroll = document.querySelectorAll(".lock__scroll");
    const openScroll = document.querySelectorAll(".open__scroll");

    const tl = gsap.timeline({});
    let scrollTop = true;
    let scrollDown = false;

    function openText() {
        tl.to(footerBlocks, {
            opacity: 1,
            stagger: 0.1,
            delay: 0.3,
        });
    }


    function closeText() {
        tl.to(footerBlocks, {
            opacity: 0,
            stagger: 0,
        });
    }

    function top() {
        gsap.to(intro, {
            yPercent: -100,
            duration: 1,
            onStart: () => {
                scrollTop = false;
                openText();
            },
            onComplete: () => {
                setTimeout(() => {
                    scrollDown = true;
                }, 500);
            },
        });
    }
    function down() {
        gsap.to(intro, {
            yPercent: 0,
            duration: 1,
            onStart: () => {
                scrollDown = false;
                closeText();
            },
            onComplete: () => {
                setTimeout(() => {
                    scrollTop = true;
                }, 500);
            },
        });
    }

    scrollTo.addEventListener("click", () => {
        top();
    });

    const gsapOBserver = Observer.create({
        target: ".main",
        type: "wheel,touch,pointer",
        tolerance: 100,
        onUp: () => {
            if (scrollTop) {
                top();
                //   ("top");
            }
            if (scrollDown) {
                down();
                //   ("down");
            }
        },
        onDown: () => {
            if (scrollTop) {
                top();
                //   ("top2");
            }
            if (scrollDown) {
                down();
                //   ("down2");
            }
        },
    });

    lockScroll.forEach((btn) => {
        btn.addEventListener("click", () => {
            gsapOBserver.kill();
        });
    });

    openScroll.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("update-time")) {
                gsapOBserver.enable();
            }
            // if (document.body.classList.contains('vr360')) {
            //     gsapOBserver.kill();
            // }
        });
    });

    let lockScrollMenu = true;
    menuLockScroll.addEventListener("click", () => {
        if (lockScrollMenu) {
            gsapOBserver.kill();
            lockScrollMenu = false;
        } else {
            gsapOBserver.enable();
            lockScrollMenu = true;

            if (document.body.classList.contains('vr360')) {
                gsapOBserver.kill();
                lockScrollMenu = false;
            }
        }
    });


    document.addEventListener("click", (e) => {
        const target = e.target;
        if (
            document
                .querySelector(".footer__form .iti__flag-container")
                ?.classList.contains("block-scroll")
        ) {
            document
                .querySelector(".footer__form .iti__flag-container")
                .classList.remove("block-scroll");
            gsapOBserver.enable();
        } else if (target.closest(".footer__form .iti__flag-container")) {
            target
                .closest(".footer__form .iti__flag-container")
                .classList.add("block-scroll");
            gsapOBserver.kill();
        }
    });

    const popupCloseBtns = gsap.utils.toArray('[data-close-popup]');

    popupCloseBtns.forEach(el => {
        el.addEventListener("click", function (e) {
            if (document.body.classList.contains('vr360')) {
                gsapOBserver.kill();
            }
        })
    })

}