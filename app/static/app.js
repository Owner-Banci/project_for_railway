const btn = document.getElementById("btn");
const out = document.getElementById("out");

btn.addEventListener("click", async () => {
  out.textContent = "Loading...";
  try {
    const res = await fetch("/api/hello");
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Error: " + e?.message;
  }
});
