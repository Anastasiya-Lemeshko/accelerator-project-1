const openVisibleAccordeonContent = () => {
  const accordeonVisibleContent = document.querySelectorAll('.accordeon__item--active p');

  accordeonVisibleContent.forEach((element) => {
    element.style.maxHeight = element.scrollHeight + "px";
  });
};

const setAccordeonToggles = () => {
  const accordeonList = document.querySelectorAll('.accordeon');
  const accordeonItem = document.querySelector('.accordeon__item');
  const accordeonVisibleContent = document.querySelectorAll('.accordeon__item--active p');
  const accordeonTitles = [];

  let activeClass = [...accordeonItem.classList].filter((item) => item.includes('__item') && !item.includes('--active') && !item.includes('accordeon'));
  activeClass += '--active';

  accordeonList.forEach((accordeonItem) => {
    accordeonTitles.push(...accordeonItem.querySelectorAll('.accordeon__item button'));
  });

  accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', () => {
      const currentItem = accordeonTitle.closest('.accordeon__item');
      const currentContent = currentItem.querySelector('p');

      if (currentItem.classList.contains('accordeon__item--default-visible')) {
        currentItem.classList.remove('accordeon__item--default-visible');
      }

      currentItem.classList.toggle('accordeon__item--active');
      currentItem.classList.toggle(activeClass);

      if (currentItem.classList.contains('accordeon__item--active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      } else {
        currentContent.style.maxHeight = null;
      }
    });
  });
};

window.addEventListener('resize', openVisibleAccordeonContent);

export { openVisibleAccordeonContent, setAccordeonToggles };
