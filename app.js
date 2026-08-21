const modes = {
  normal: {
    label: "Inverter online",
    uob: "Closed",
    mbp: "Open",
    source: "Supplied by inverter",
    title: "Normal inverter operation",
    copy: "The fictional load is shown on the conditioned inverter path.",
    icon: "N",
    statusMode: "Inverter",
    protection: "UPS supported",
    coach: "Start by identifying the active load path—not by choosing a switching action.",
  },
  static: {
    label: "Static bypass",
    uob: "Closed",
    mbp: "Open",
    source: "Supplied by static bypass",
    title: "Internal static bypass",
    copy: "The fictional internal bypass path is carrying the load while the external path remains open.",
    icon: "S",
    statusMode: "Static bypass",
    protection: "Reduced",
    coach: "A mode request is not proof of a load path. Training logic will require a separate verified indication.",
  },
  maintenance: {
    label: "Not carrying load",
    uob: "Open",
    mbp: "Closed",
    source: "Supplied by external path",
    title: "External maintenance bypass",
    copy: "The fictional load is shown on a direct external path. Normal UPS protection is unavailable in this concept state.",
    icon: "M",
    statusMode: "Not carrying load",
    protection: "Not UPS supported",
    coach: "Maintenance bypass changes the protection available to the load. It is not simply another normal operating mode.",
  },
};

const safetyGate = document.querySelector("#safety-gate");
const safetyCheck = document.querySelector("#safety-check");
const enterButton = document.querySelector("#enter-simulator");
const modeButtons = [...document.querySelectorAll(".mode-card")];
const diagram = document.querySelector(".diagram");

safetyCheck.addEventListener("change", () => {
  enterButton.disabled = !safetyCheck.checked;
});

enterButton.addEventListener("click", () => {
  safetyGate.classList.add("hidden");
  document.querySelector(".mode-card").focus();
});

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function selectMode(modeName) {
  const mode = modes[modeName];
  if (!mode) return;

  diagram.dataset.currentMode = modeName;
  modeButtons.forEach((button) => {
    const selected = button.dataset.mode === modeName;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  setText("#ups-mode-label", mode.label);
  setText("#uob-state", mode.uob);
  setText("#mbp-state", mode.mbp);
  setText("#load-source", mode.source);
  setText("#summary-title", mode.title);
  setText("#summary-copy", mode.copy);
  setText(".summary-icon", mode.icon);
  setText("#status-ups", mode.statusMode);
  setText("#status-uob", mode.uob);
  setText("#status-mbp", mode.mbp);
  setText("#status-protection", mode.protection);
  setText("#coach-copy", mode.coach);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => selectMode(button.dataset.mode));
});

