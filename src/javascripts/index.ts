import { configure } from "queryparams";
import debounce from "debounce";
import { Marquee } from "./lib/marquee";
import { height } from "./lib/height";

const DOM = {
  app: document.getElementById("app")!,
};

const {
  params: { text, ratio },
} = configure<{
  text: [string, number][];
  ratio: number;
}>({
  ratio: 2,
  text: [
    ["fastest", 7],
    ["faster", 6],
    ["fast", 5],
    ["normal", 4],
    ["slow", 3],
    ["slower", 2],
    ["slowest", 1],
  ],
});

let marquees: Marquee[] = [];

const init = () => {
  marquees = text.map(([message, speed]) => new Marquee(message, speed));

  marquees.map((m) => {
    DOM.app.appendChild(m.render(height(DOM.app) / marquees.length, ratio));
    m.run();
  });
};

const reinit = debounce(() => {
  marquees.map((m) => m.destroy(DOM.app));
  init();
}, 500);

window.addEventListener("resize", reinit);

init();
