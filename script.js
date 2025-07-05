function switchResume(lang) {
    const embed = document.getElementById('resume-pdf');
    if (lang === 'en') {
        embed.src = 'assets/viphung_resume.pdf';
    } else if (lang === 'fr') {
        embed.src = 'assets/viphung_resume-fr.pdf';
    }
}