// for room learning
function openSidebar() {
    document.getElementById("sideContent").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.getElementById("openBtn").style.display = "none";
    document.getElementById("closeBtn").style.display = "inline";
}

function closeSidebar() {
    document.getElementById("sideContent").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";
    document.getElementById("openBtn").style.display = "inline";
    document.getElementById("closeBtn").style.display = "none"
}