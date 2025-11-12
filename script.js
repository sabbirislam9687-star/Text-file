const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const editor = document.getElementById("editor");

menuBtn.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

function saveFile() {
  const blob = new Blob([editor.value], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "newfile.txt";
  a.click();
}

function openFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt";
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => editor.value = reader.result;
    reader.readAsText(file);
  };
  input.click();
}

function clearText() {
  editor.value = "";
}

function shareText() {
  if (navigator.share) {
    navigator.share({
      title: "আমার টেক্সট ফাইল",
      text: editor.value
    });
  } else {
    alert("এই ব্রাউজারে শেয়ার অপশন নেই");
  }
}

function changeColor() {
  const color = prompt("নতুন ব্যাকগ্রাউন্ড রঙ (যেমন: lightblue বা #aabbcc):");
  if (color) editor.style.background = color;
}

function changeFont() {
  const font = prompt("ফন্টের নাম লিখুন (যেমন: Courier New, Arial):");
  if (font) editor.style.fontFamily = font;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
