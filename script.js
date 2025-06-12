function updatePreview() {
    document.getElementById('previewName').innerText = document.getElementById('fullName').value || "Your Name";
    document.getElementById('previewTitle').innerText = document.getElementById('jobTitle').value || "Your Title";
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
    document.getElementById('previewAddress').innerText = document.getElementById('address').value;
    document.getElementById('previewSummary').innerText = document.getElementById('summary').value;
    document.getElementById('previewEducation').innerText = document.getElementById('education').value;
    document.getElementById('previewExperience').innerText = document.getElementById('experience').value;
    document.getElementById('previewProjects').innerText = document.getElementById('projects').value;
    document.getElementById('previewSkills').innerText = document.getElementById('skills').value;
}
document.querySelectorAll('#formSection input, #formSection textarea').forEach(input => {
    input.addEventListener('input', updatePreview);
});

function toggleView() {
    const form = document.getElementById('formSection');
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}