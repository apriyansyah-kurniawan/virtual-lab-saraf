export async function submitQuizScore(payload) {
  const apiEndpoint = import.meta.env?.VITE_GURU_API_URL || 'https://script.google.com/macros/s/AKfycbxMXczbWFxI4HbwmE44Lv00-CY8APwNb0pQOveLE_lEj8mrILwpDdNUVM8FPZO2KbuZ/exec';

  try {
    await fetch(apiEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    // If we get here, assume success (no network error)
    return { success: true };
  } catch (err) {
    throw new Error('Gagal mengirim nilai: ' + err.message);
  }
}