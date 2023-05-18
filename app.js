const moodSelect = document.getElementById('mood');
const notesInput = document.getElementById('notes');
const activitySuggestions = document.getElementById('activity-suggestions');

moodSelect.addEventListener('change', () => {
  const mood = moodSelect.value;
  let suggestion = '';

  switch (mood) {
    case 'happy':
      suggestion = 'Go for a walk in the park.';
      break;
    case 'sad':
      suggestion = 'Listen to your favorite music.';
      break;
    case 'anxious':
      suggestion = 'Try some deep breathing exercises.';
      break;
    case 'angry':
      suggestion = 'Take a break and go for a run.';
      break;
    case 'stressed':
      suggestion = 'Take a warm bath or shower.';
      break;
    case 'tired':
      suggestion = 'Take a nap or get some rest.';
      break;
    case 'excited':
      suggestion = 'Plan a fun activity with friends or family.';
      break;
    case 'content':
      suggestion = 'Take some time to relax and enjoy the moment.';
      break;
    case 'other':
      suggestion = 'Think about what makes you happy and do it.';
      break;
  }

  activitySuggestions.innerHTML = `<p class="text-gray-700 font-bold mb-2">Activity Suggestion:</p><p class="text-gray-700">${suggestion}</p>`;
});

const saveButton = document.querySelector('button[type="submit"]');
saveButton.addEventListener('click', (event) => {
  event.preventDefault();

  const mood = moodSelect.value;
  const notes = notesInput.value;

  localStorage.setItem('mood', mood);
  localStorage.setItem('notes', notes);

  alert('Mood and notes saved!');
});
