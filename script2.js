document.getElementById("downloadButton").addEventListener("click", function() {
    let resumeLink = document.getElementById("resumeLink");
    resumeLink.click();
});

document.getElementById("hireMeButton").addEventListener("click", function() {
    let recipient = "rahuldev.kb@gmail.com";
    let subject = "Job Opportunity";
    let body = "Hi Rahul,\n\nI'm interested in discussing a job opportunity with you. Let's connect and talk further.\n\nBest regards,\n[Your Name]";

    let mailToLink = "mailto:" + encodeURIComponent(recipient) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.open(mailToLink);
});