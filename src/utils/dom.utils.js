function $(args) {
  return this.querySelector(args);
}
function $$(args) {
  return this.querySelectorAll(args);
}

function on(a, b, c) {
  return this.addEventListener(a, b, c);
}

function off(a, b) {
  return this.removeEventListener(a, b);
}

window.$ = $.bind(document);
window.$$ = $$.bind(document);
window.on = on;
window.off = off;

document.$ = $;
document.$$ = $$;
document.on = on;
document.off = off;

HTMLElement.prototype.on = on;
HTMLElement.prototype.off = off;
HTMLElement.prototype.$ = $;
HTMLElement.prototype.$$ = $$;

ShadowRoot.prototype.$ = $;
ShadowRoot.prototype.$$ = $$;
ShadowRoot.prototype.on = on;
ShadowRoot.prototype.off = off;
