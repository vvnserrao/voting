const voteButtons = document.querySelectorAll(".vote-btn");
const voteMessage = document.querySelector(".vote-message");
const resetBtn = document.getElementById("resetBtn");

voteButtons.forEach(button => {
  button.addEventListener("click", () => {
    const candidate = button.closest(".card").dataset.id;
    voteMessage.textContent = `✅ You have voted for ${candidate}.`;
    voteButtons.forEach(btn => btn.disabled = true);
    resetBtn.style.display = "inline-block";
  });
});

resetBtn.addEventListener("click", () => {
  voteButtons.forEach(btn => {
    btn.disabled = false;
    btn.textContent = "Vote";
  });
  voteMessage.textContent = "";
  resetBtn.style.display = "none";
});
