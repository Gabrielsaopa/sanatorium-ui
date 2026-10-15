Hooks.once("init", () => {
  console.log("Sanatorium Horror UI | Inicializando atmosfera do sanatório...");

  game.settings.register("sanatorium-ui", "enableVignette", {
    name: "Vinheta Claustrofóbica",
    hint: "Adiciona bordas escuras e linhas sutis sobre a tela para criar sensação de opressão.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      document.body.classList.toggle("sanatorium-theme", value);
    }
  });

  game.settings.register("sanatorium-ui", "enableFlicker", {
    name: "Luz Fluorescente Falhando",
    hint: "Faz a interface piscar sutilmente de tempos em tempos, simulando lâmpadas de hospital com mau contato.",
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
    pauseText.innerText = "SESSÃO TERAPÊUTICA EM PAUSA";
  }
});
