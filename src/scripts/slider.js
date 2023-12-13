const leftArrow = document.body.querySelector('.banner__arrow--left');
const rightArrow = document.body.querySelector('.banner__arrow--right');

const banners = document.body.querySelectorAll('.banner__container');
const banner = document.body.querySelector('.banner');
const bannerLine = document.body.querySelector('.banner__wrapper');
const bannerWidth = banners[0].clientWidth;
const indicators = document.body.querySelectorAll('.banner__indicator');

let currentBannerIndex = 0;

function showBanner() {
  bannerLine.style.transform = `translateX(-${currentBannerIndex * bannerWidth}px)`;
}

function nextBanner() {
  let newBannerIndex = currentBannerIndex + 1;
  if (newBannerIndex > banners.length - 1) {
    newBannerIndex = 0;
  }
  changeBanner(newBannerIndex);
}

function prevBanner() {
  let newBannerIndex = currentBannerIndex - 1;
  if (newBannerIndex < 0) {
    newBannerIndex = banners.length - 1;
  }
  changeBanner(newBannerIndex);
}

function addActiveIndicator() {
  indicators[currentBannerIndex].classList.add('banner__indicator--active');
}

function removeActiveIndicator() {
  indicators[currentBannerIndex].classList.remove('banner__indicator--active');
}

function changeBanner(bannerIndex) {
  removeActiveIndicator();
  currentBannerIndex = bannerIndex;
  addActiveIndicator();
  showBanner();
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    changeBanner(index);
  });
});
leftArrow.addEventListener('click', () => {
  prevBanner();
});

rightArrow.addEventListener('click', () => {
  nextBanner();
});
banner.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      prevBanner();
      break;
    case 'ArrowRight':
      nextBanner();
      break;
    default:
      break;
  }
});

