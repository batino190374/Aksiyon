function selectLesson(subjectName, dateText, fullTitle, event) {
    // Sol taraftaki başlığı ve video etiketini sağdaki listeye göre değiştirir
    document.getElementById('current-lesson-title').innerText = fullTitle;
    document.getElementById('video-overlay-title').innerText = `6. SINIF ${subjectName.toUpperCase()} - YAZILIYA HAZIRLIK`;
    
    // Sağdaki listede aktif olan öğenin rengini günceller
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
