const imagesUrl = ['./dist/img/gallery/bitwa_pod_grunwaldem.png', './dist/img/gallery/rejtan.png', './dist/img/gallery/sobieski_pod_wiedniem.png', './dist/img/gallery/stanczyk.png', './dist/img/gallery/unia_lubelska.png']
const slidesImage = document.querySelectorAll('.slider__item-img');

const setImagesUrlDependingBreakpoint = () => {
    const imageExt = '.png';
    const mobileBreakpointText = '_mobile';

    for (let i = 0; i < imagesUrl.length; i++) {

        let imageUrlWithoutExtAndBreakpoint = null;
        if (hasImageMobileBreakpoint(i)) {
            imageUrlWithoutExtAndBreakpoint = imagesUrl[i].split(mobileBreakpointText)[0];
        }
        if (!hasImageMobileBreakpoint(i)) {
            imageUrlWithoutExtAndBreakpoint = imagesUrl[i].split(imageExt)[0];
        }

        const breakpointText = isDesktopBreakpoint() ? '' : mobileBreakpointText;
        imagesUrl[i] = imageUrlWithoutExtAndBreakpoint + breakpointText + imageExt;
    }
}

const isDesktopBreakpoint = () => window.innerWidth > 1024;

const hasImageMobileBreakpoint = (index) => imagesUrl[index].includes('_mobile');

if (!isDesktopBreakpoint()) {
    setImagesUrlDependingBreakpoint();
}

window.addEventListener('resize', () => {
    if (isDesktopBreakpoint() && isMobileImagesUrl()) {
        setImagesUrlDependingBreakpoint();
        slidesImage.forEach((image, index) => {
            if (index === imagesUrl.length) {
                return image.setAttribute('src', imagesUrl[0]);
            }
            image.setAttribute('src', imagesUrl[index])
        })
    }
})

const isMobileImagesUrl = () => imagesUrl[0].includes('mobile');

// SLIDER LAZY LOADING
const showImage = (index) => {
    slidesImage[index].setAttribute('src', imagesUrl[index]);
}

showImage(0)
setTimeout(() => {
    showImage(1)
}, 500)

let imageIndex = 2;
const lazyLoadingTimer = setInterval(() => {
    if (isCopiedSlide(imageIndex)) {
        showImage(0)
        imageIndex++;
        clearInterval(lazyLoadingTimer)
        return;
    }
    showImage(imageIndex);
    imageIndex++;
}, 4000)

const isCopiedSlide = (index) => {
    return index === imagesUrl.length;
}