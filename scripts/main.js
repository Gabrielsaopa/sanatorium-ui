Hooks.once("init", () => {
  console.log("Sanatorium Horror UI | Inicializando atmosfera gótica de inverno cósmico...");

  game.settings.register("sanatorium-ui", "enableVignette", {
    name: "Geada e Tentáculos nos Cantos da Tela",
    hint: "Adiciona o efeito de vidro congelado pela nevasca e silhuetas sutis de tentáculos nas bordas do monitor.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      document.body.classList.toggle("sanatorium-theme", value);
    }
  });

  game.settings.register("sanatorium-ui", "enableFlicker", {
    name: "Pulsar da Tempestade de Gelo",
    hint: "Faz a geada nas bordas da tela pulsar suavemente como o vento lá fora.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      document.body.classList.toggle("sanatorium-flicker", value);
    }
  });
});

Hooks.once("ready", () => {
  if (game.settings.get("sanatorium-ui", "enableVignette")) {
    document.body.classList.add("sanatorium-theme");
  }
  if (game.settings.get("sanatorium-ui", "enableFlicker")) {
    document.body.classList.add("sanatorium-flicker");
  }

  const pauseText = document.querySelector("#pause figcaption");
  if (pauseText) {
    pauseText.innerText = "ALGO ESPREITA NA NEVASCA...";
  }
});
