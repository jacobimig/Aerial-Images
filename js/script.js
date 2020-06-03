// VIDEO PLAY BUTTON
$(document).ready(function() {
  $(".smVideo").click(function() {
    $("#surveyMappingVideo").show();
    $("#surveyMappingVideo")[0].play();
  }); $("#surveyMappingVideo").one("play", function() {
    this.currentTime = 0;
  });

  $(".agVideo").click(function() {
    $("#agricultureVideo").show();
    $("#agricultureVideo")[0].play();
  }); $("#agricultureVideo").one("play", function() {
    this.currentTime = 0;
  });

  $(".inspectVideo").click(function() {
    $("#inspectionsVideo").show();
    $("#inspectionsVideo")[0].play();
  }); $("#inspectionsVideo").one("play", function() {
    this.currentTime = 0;
  });

  $(".reVideo").click(function() {
    $("#realEstateVideo").show();
    $("#realEstateVideo")[0].play();
  }); $("#realEstateVideo").one("play", function() {
    this.currentTime = 0;
  });
});

// DEMO REEL FULLSCREEN LISTENER
document.addEventListener("fullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    const vidSM = document.getElementById('surveyMappingVideo');
    const vidA = document.getElementById('agricultureVideo');
    const vidI = document.getElementById('inspectionsVideo');
    const vidRE = document.getElementById('realEstateVideo');
    vidSM.muted = false;
    vidA.muted = false;
    vidI.muted = false;
    vidRE.muted = false;
  } else {
    document.getElementById("surveyMappingVideo").style.display = "none";
    document.getElementById("agricultureVideo").style.display = "none";
    document.getElementById("inspectionsVideo").style.display = "none";
    document.getElementById("realEstateVideo").style.display = "none";
  }
});
document.addEventListener("mozfullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    const vidSM = document.getElementById('surveyMappingVideo');
    const vidA = document.getElementById('agricultureVideo');
    const vidI = document.getElementById('inspectionsVideo');
    const vidRE = document.getElementById('realEstateVideo');
    vidSM.muted = false;
    vidA.muted = false;
    vidI.muted = false;
    vidRE.muted = false;
  } else {
    document.getElementById("surveyMappingVideo").style.display = "none";
    document.getElementById("agricultureVideo").style.display = "none";
    document.getElementById("inspectionsVideo").style.display = "none";
    document.getElementById("realEstateVideo").style.display = "none";
  }
});
document.addEventListener("webkitfullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    const vidSM = document.getElementById('surveyMappingVideo');
    const vidA = document.getElementById('agricultureVideo');
    const vidI = document.getElementById('inspectionsVideo');
    const vidRE = document.getElementById('realEstateVideo');
    vidSM.muted = false;
    vidA.muted = false;
    vidI.muted = false;
    vidRE.muted = false;
  } else {
    document.getElementById("surveyMappingVideo").style.display = "none";
    document.getElementById("agricultureVideo").style.display = "none";
    document.getElementById("inspectionsVideo").style.display = "none";
    document.getElementById("realEstateVideo").style.display = "none";
  }
});
document.addEventListener("msfullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    const vidSM = document.getElementById('surveyMappingVideo');
    const vidA = document.getElementById('agricultureVideo');
    const vidI = document.getElementById('inspectionsVideo');
    const vidRE = document.getElementById('realEstateVideo');
    vidSM.muted = false;
    vidA.muted = false;
    vidI.muted = false;
    vidRE.muted = false;
  } else {
    document.getElementById("surveyMappingVideo").style.display = "none";
    document.getElementById("agricultureVideo").style.display = "none";
    document.getElementById("inspectionsVideo").style.display = "none";
    document.getElementById("realEstateVideo").style.display = "none";
  }
});

AOS.init({
  disable: function() {
    var maxWidth = 600;
    return window.innerWidth < maxWidth;
  }
}); 