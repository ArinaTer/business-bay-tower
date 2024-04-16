export function loader() {
    const loader = document.querySelector(".loading__logo_loading");


    // preloader
    let time = null;

    // coaderCount
    let showPopup = true;

    let images = Array.from(document.getElementsByTagName("img"));
    let loadedImages = 0;
    let totalImages = images.length;

    function preloadImages() {
        for (var i = 0; i < images.length; i++) {
            let img = new Image();
            img.onload = imageLoaded;
            img.src = images[i].src;
        }
    }

    let isItiClick = false;

    function imageLoaded() {
        loadedImages++;
        let percent = Math.round((loadedImages / totalImages) * 100);
        loader.setAttribute("style", `width: ${percent}%`);
        if (loadedImages === totalImages) {
            loadedImages;
            setTimeout(() => {
                gsap.to(".loading", { yPercent: -100, duration: 1 });
                if (showPopup) {
                    updateTimeOut();
                }
            }, 500);
        }
    }

    preloadImages();



    // _______________________

    // const updateTimer = Array.from(document.querySelectorAll(".update-time"));
    // const closePopupTime = document.querySelectorAll(".close-popup-time");
    // const lockPopup = document.querySelectorAll(".lock-poup");
    // const unlockpopup = document.querySelectorAll(".unlock-popup");

    const popupContent = document.querySelector(".time-popup");
    const stopTimer = document.querySelectorAll("[data-open-popup]");
    const stopTime = document.querySelectorAll(".stop-time");

    function openPoupTime() {

        if (!popupContent.classList.contains("popup-show")) {
            popupContent.classList.add("popup-show");
        }

    }

    function updateTimeOut(el) {
        time = setTimeout(() => {
            openPoupTime();
            (el);
        }, 5000);
    }

    // closePopupTime.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //         popupContent.classList.remove("popup-show");
    //         popupContent.classList.add("hird-hide-j");
    //         gsapOBserver.enable();


    //     });
    // });

    stopTimer.forEach((btn) => {
        btn.addEventListener("click", () => {
            clearTimeout(time);
        });
    });

    stopTime.forEach((btn) => {
        btn.addEventListener("click", () => {
            clearTimeout(time);
        });
    });

    // updateTimer.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //         if (showPopup && btn.classList.contains("update-time")) {
    //             updateTimeOut(btn);
    //         }
    //     });
    // });

    // lockPopup.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //         popupContent.classList.add("hard-hide");
    //     });
    // });
    // unlockpopup.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //         setTimeout(() => {
    //             popupContent.classList.contains("hard-hide")
    //                 ? popupContent.classList.remove("hard-hide")
    //                 : null;
    //         }, 2000);
    //     });
    // });


    // const allPopup = document.querySelectorAll(".all-popup");
    // const brochureShadowClose = document.querySelector(".brochure__shadow");
    // const brochure = document.querySelector(".brochure");
    // const paymeCheck = document.querySelector(".payment");
    // const mainCheck = document.querySelector(".main");
    // document.addEventListener("click", (e) => {
    //     if (!mainCheck.classList.contains("show")) {
    //         // if (!paymeCheck.classList.contains("show")) {
    //         // gsapOBserver.enable();
    //         // }
    //     }
    //     const target = e.target;
    //     if (target.closest(".swal2-confirm")) {
    //         allPopup.forEach((popup) => {
    //             popup.classList.contains("popup-show")
    //                 ? popup.classList.remove("popup-show")
    //                 : null;
    //         });
    //         brochureShadowClose.classList.contains("show")
    //             ? brochureShadowClose.classList.remove("show")
    //             : null;
    //         brochure.classList.contains("show")
    //             ? brochure.classList.remove("show")
    //             : null;
    //     }
    // });

}
