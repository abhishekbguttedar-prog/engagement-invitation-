const opening = document.getElementById('opening');
const details = document.getElementById('details');

document.getElementById('openInvitation').addEventListener('click', () => {
  opening.classList.add('fade-out');
  window.setTimeout(() => {
    opening.classList.add('hidden');
    details.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
});

document.getElementById('shareInvitation').addEventListener('click', async () => {
  const shareData = {
    title: 'Sushma & Ramkrishna - Engagement Invitation',
    text: 'You are warmly invited to celebrate the engagement of Sushma & Ramkrishna on 13 December 2026. Venue: VFR 2 Function Hall, Kalaburagi.'
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (error) { /* sharing cancelled */ }
  } else {
    const message = `${shareData.text} Location: https://maps.app.goo.gl/7aUkhmRnmU4PDRHt7?g_st=ic`;
    try {
      await navigator.clipboard.writeText(message);
      alert('Invitation details copied. Paste them into WhatsApp to share.');
    } catch (error) {
      prompt('Copy this invitation message:', message);
    }
  }
});
