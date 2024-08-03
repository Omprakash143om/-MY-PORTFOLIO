document.addEventListener('DOMContentLoaded', () => {
  // Example: Toggle Interests section visibility
  const interestsSection = document.querySelector('#interests');
  if (interestsSection) {
    const toggleInterestsBtn = document.createElement('button');
    toggleInterestsBtn.textContent = 'Toggle Interests';
    interestsSection.parentNode.insertBefore(toggleInterestsBtn, interestsSection);

    toggleInterestsBtn.addEventListener('click', () => {
      interestsSection.classList.toggle('hidden');
      toggleInterestsBtn.textContent = interestsSection.classList.contains('hidden')
        ? 'Show Interests'
        : 'Hide Interests';
    });
  }
});
