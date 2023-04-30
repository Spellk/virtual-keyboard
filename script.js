let keyboardLayout = {
  1: (keyboardLayout) => {
    keyboardLayout.exports = JSON.parse(
      '[{"code":"Backquote","key":"\'","shiftKeyEN":"~","keyRu":"ё","shiftKeyRu":"Ё","group":"alphanumeric"},{"code":"Digit1","key":"1","shiftKeyEN":"!","keyRu":"1","shiftKeyRu":"!","group":"alphanumeric"},{"code":"Digit2","key":"2","shiftKeyEN":"@","keyRu":"2","shiftKeyRu":"\\"","group":"alphanumeric"},{"code":"Digit3","key":"3","shiftKeyEN":"#","keyRu":"3","shiftKeyRu":"№","group":"alphanumeric"},{"code":"Digit4","key":"4","shiftKeyEN":"$","keyRu":"4","shiftKeyRu":";","group":"alphanumeric"},{"code":"Digit5","key":"5","shiftKeyEN":"%","keyRu":"5","shiftKeyRu":"%","group":"alphanumeric"},{"code":"Digit6","key":"6","shiftKeyEN":"^","keyRu":"6","shiftKeyRu":":","group":"alphanumeric"},{"code":"Digit7","key":"7","shiftKeyEN":"&","keyRu":"7","shiftKeyRu":"?","group":"alphanumeric"},{"code":"Digit8","key":"8","shiftKeyEN":"*","keyRu":"8","shiftKeyRu":"*","group":"alphanumeric"},{"code":"Digit9","key":"9","shiftKeyEN":"(","keyRu":"9","shiftKeyRu":"(","group":"alphanumeric"},{"code":"Digit0","key":"0","shiftKeyEN":")","keyRu":"0","shiftKeyRu":")","group":"alphanumeric"},{"code":"Minus","key":"-","shiftKeyEN":"_","keyRu":"-","shiftKeyRu":"_","group":"alphanumeric"},{"code":"Equal","key":"=","shiftKeyEN":"+","keyRu":"=","shiftKeyRu":"+","group":"alphanumeric"},{"code":"Backspace","key":"⟵","group":"service"},{"code":"Tab","key":"⇥ Tab","group":"service"},{"code":"KeyQ","key":"q","shiftKeyEN":"Q","keyRu":"й","shiftKeyRu":"Й","group":"alphanumeric"},{"code":"KeyW","key":"w","shiftKeyEN":"W","keyRu":"ц","shiftKeyRu":"Ц","group":"alphanumeric"},{"code":"KeyE","key":"e","shiftKeyEN":"E","keyRu":"у","shiftKeyRu":"У","group":"alphanumeric"},{"code":"KeyR","key":"r","shiftKeyEN":"R","keyRu":"к","shiftKeyRu":"К","group":"alphanumeric"},{"code":"KeyT","key":"t","shiftKeyEN":"T","keyRu":"е","shiftKeyRu":"Е","group":"alphanumeric"},{"code":"KeyY","key":"y","shiftKeyEN":"Y","keyRu":"н","shiftKeyRu":"Н","group":"alphanumeric"},{"code":"KeyU","key":"u","shiftKeyEN":"U","keyRu":"г","shiftKeyRu":"Г","group":"alphanumeric"},{"code":"KeyI","key":"i","shiftKeyEN":"I","keyRu":"ш","shiftKeyRu":"Ш","group":"alphanumeric"},{"code":"KeyO","key":"o","shiftKeyEN":"O","keyRu":"щ","shiftKeyRu":"Щ","group":"alphanumeric"},{"code":"KeyP","key":"p","shiftKeyEN":"P","keyRu":"з","shiftKeyRu":"З","group":"alphanumeric"},{"code":"BracketLeft","key":"[","shiftKeyEN":"{","keyRu":"х","shiftKeyRu":"Х","group":"alphanumeric"},{"code":"BracketRight","key":"]","shiftKeyEN":"}","keyRu":"ъ","shiftKeyRu":"Ъ","group":"alphanumeric"},{"code":"Backslash","key":"\\\\","shiftKeyEN":"|","keyRu":"\\\\","shiftKeyRu":"/","group":"alphanumeric"},{"code":"Delete","key":"Del","group":"service"},{"code":"CapsLock","key":"⇪ Caps","group":"service"},{"code":"KeyA","key":"a","shiftKeyEN":"A","keyRu":"ф","shiftKeyRu":"Ф","group":"alphanumeric"},{"code":"KeyS","key":"s","shiftKeyEN":"S","keyRu":"ы","shiftKeyRu":"Ы","group":"alphanumeric"},{"code":"KeyD","key":"d","shiftKeyEN":"D","keyRu":"в","shiftKeyRu":"В","group":"alphanumeric"},{"code":"KeyF","key":"f","shiftKeyEN":"F","keyRu":"а","shiftKeyRu":"А","group":"alphanumeric"},{"code":"KeyG","key":"g","shiftKeyEN":"G","keyRu":"п","shiftKeyRu":"П","group":"alphanumeric"},{"code":"KeyH","key":"h","shiftKeyEN":"H","keyRu":"р","shiftKeyRu":"Р","group":"alphanumeric"},{"code":"KeyJ","key":"j","shiftKeyEN":"J","keyRu":"о","shiftKeyRu":"О","group":"alphanumeric"},{"code":"KeyK","key":"k","shiftKeyEN":"K","keyRu":"л","shiftKeyRu":"Л","group":"alphanumeric"},{"code":"KeyL","key":"l","shiftKeyEN":"L","keyRu":"д","shiftKeyRu":"Д","group":"alphanumeric"},{"code":"Semicolon","key":";","shiftKeyEN":":","keyRu":"ж","shiftKeyRu":"Ж","group":"alphanumeric"},{"code":"Quote","key":"\'","shiftKeyEN":"\\"","keyRu":"э","shiftKeyRu":"Э","group":"alphanumeric"},{"code":"Enter","key":"Enter","group":"service"},{"code":"ShiftLeft","key":"⇧ Shift","group":"service"},{"code":"KeyZ","key":"z","shiftKeyEN":"Z","keyRu":"я","shiftKeyRu":"Я","group":"alphanumeric"},{"code":"KeyX","key":"x","shiftKeyEN":"X","keyRu":"ч","shiftKeyRu":"Ч","group":"alphanumeric"},{"code":"KeyC","key":"c","shiftKeyEN":"C","keyRu":"с","shiftKeyRu":"С","group":"alphanumeric"},{"code":"KeyV","key":"v","shiftKeyEN":"V","keyRu":"м","shiftKeyRu":"М","group":"alphanumeric"},{"code":"KeyB","key":"b","shiftKeyEN":"B","keyRu":"и","shiftKeyRu":"И","group":"alphanumeric"},{"code":"KeyN","key":"n","shiftKeyEN":"N","keyRu":"т","shiftKeyRu":"Т","group":"alphanumeric"},{"code":"KeyM","key":"m","shiftKeyEN":"M","keyRu":"ь","shiftKeyRu":"Ь","group":"alphanumeric"},{"code":"Comma","key":",","shiftKeyEN":"<","keyRu":"б","shiftKeyRu":"Б","group":"alphanumeric"},{"code":"Period","key":".","shiftKeyEN":">","keyRu":"ю","shiftKeyRu":"Ю","group":"alphanumeric"},{"code":"Slash","key":"/","shiftKeyEN":"?","keyRu":".","shiftKeyRu":",","group":"alphanumeric"},{"code":"ArrowUp","key":"▲","group":"service"},{"code":"ShiftRight","key":"⇧ Shift","group":"service"},{"code":"ControlLeft","key":"Ctrl","group":"service"},{"code":"MetaLeft","key":"Win","group":"service"},{"code":"AltLeft","key":"Alt","group":"service"},{"code":"Space","key":" ","shiftKeyEN":" ","keyRu":" ","shiftKeyRu":" ","group":"alphanumeric"},{"code":"AltRight","key":"Alt","group":"service"},{"code":"ArrowLeft","key":"◄","group":"service"},{"code":"ArrowDown","key":"▼","group":"service"},{"code":"ArrowRight","key":"►","group":"service"},{"code":"ControlRight","key":"Ctrl","group":"service"}]'
    );
  },
};

modules = {};

function loadModule(i) {
  if (modules[i]) {
    return modules[i].exports;
  } else {
    const module = { exports: {} };
    keyboardLayout[i](module, module.exports, loadModule);
    modules[i] = module;
    return module.exports;
  }
}

function setCursorPosition(element, position) {
  if (element) {
    element.createTextRange
      ? element.createTextRange().move("character", position).select()
      : element.selectionStart
      ? (element.focus(), element.setSelectionRange(position, position))
      : element.focus();
  }
}

new (class KeyboardLayoutController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.updateKeyboardLayout(this.model.layoutData, this.model.data);
    this.view.initKeyboardEvents(
      this.model.getAlphanumericValue,
      this.handleKeyboardChange,
      this.toggleLanguageHandler
    );
  }

  handleKeyboardChange = () => {
    this.model.updateKeyboardLayout(
      this.view.updateKeyboardLayout.bind(this.view)
    );
  };

  updateKeyboardLayout = (model, view) => {
    this.view.updateKeyboardLayout(model, view);
  };

  toggleLanguageHandler = () => {
    this.model.toggleLanguage(this.view.updateKeyboardLayout.bind(this.view));
  };
})(
  new (class KeyboardModel {
    constructor() {
      this.data = JSON.parse(JSON.stringify(loadModule(1)));
      this.statusShift = false;
      this.statusLanguage =
        JSON.parse(localStorage.getItem("this.statusLanguage")) || false;
      this.layoutData = this.statusLanguage
        ? this.mapDataToLayout("keyRu")
        : this.mapDataToLayout("key");
    }

    storeLanguageStatus() {
      localStorage.setItem(
        "this.statusLanguage",
        JSON.stringify(this.statusLanguage)
      );
    }

    mapDataToLayout = (arg) => {
      return this.data.map((element) => {
        if ("alphanumeric" === element.group) {
          return element[arg];
        } else if ("service" === element.group && element.key) {
          return element.key;
        }
      });
    };

    getAlphanumericValue = (arg) => {
      const index = this.data.findIndex((index) => index.code === arg);
      return this.layoutData[index];
    };

    updateKeyboardLayout = (arg) => {
      this.statusShift = !this.statusShift;
      if (this.statusLanguage) {
        if (this.statusShift) {
          this.layoutData = this.mapDataToLayout("shiftKeyRu");
        } else {
          this.layoutData = this.mapDataToLayout("keyRu");
        }
      } else {
        if (this.statusShift) {
          this.layoutData = this.mapDataToLayout("shiftKeyEN");
        } else {
          this.layoutData = this.mapDataToLayout("key");
        }
      }
      arg(this.layoutData, this.data);
    };

    toggleLanguage = (arg) => {
      this.statusLanguage = !this.statusLanguage;
      this.statusShift = !this.statusShift;
      this.storeLanguageStatus();
      this.updateKeyboardLayout(arg);
    };
  })(),

  new (class KeyboardController {
    constructor() {
      this.wrapper = document.createElement("div");
      this.wrapper.classList.add("wrapper");

      this.title = document.createElement("h1");
      this.title.textContent = "Virtual keyboard";

      this.textArea = document.createElement("textarea");
      this.textArea.classList.add("text_field");
      this.textArea.autofocus = true;
      this.textArea.focus();

      this.keyboard = document.createElement("div");
      this.keyboard.classList.add("keyboard");

      this.source = document.createElement("source");

      this.description = document.createElement("div");
      this.description.classList.add("description");
      this.description.textContent =
        "For Windows. To switch language shift/ctrl + alt";

      this.wrapper.append(this.title, this.textArea, this.keyboard);
      this.title.insertAdjacentElement("afterend", this.description);

      document.querySelector("body").append(this.wrapper);

      this.statusShift = false;
      this.statusLang = "EN";
      this.statusCTRL = false;
      this.statusALT = false;
    }

    updateKeyboardLayout(keyboardLayout, keyData) {
      if (this.keyboard.firstChild) {
        let keyIndex = 0;
        for (const key of this.keyboard.childNodes) {
          key.textContent = keyboardLayout[keyIndex++];
        }
      } else {
        for (const [index, keyValue] of keyboardLayout.entries()) {
          const key = document.createElement("button");
          key.classList.add("keys", keyData[index].group);
          key.id = keyData[index].code;
          key.type = "button";
          key.textContent = keyValue;
          this.keyboard.append(key);
        }
      }
    }

    insertTextAndFocus(insertedText) {
      this.textArea.setRangeText(
        insertedText,
        this.textArea.selectionStart,
        this.textArea.selectionEnd,
        "end"
      ),
        this.textArea.focus();
    }

    deleteBackspaceKey(offset = 0) {
      const cursorPosition = this.textArea.selectionStart - offset,
        textArray = this.textArea.value.split("");
      textArray.splice(cursorPosition, 1);
      this.textArea.value = textArray.join("");
      setCursorPosition(this.textArea, cursorPosition);
    }

    handleKeyboardEvent(
      keyId,
      keyProcessingFunction,
      stateToggleFunction,
      altCtrlFunction,
      isCapsLockActive = false
    ) {
      if (!keyId) return;
      const keyElement = this.keyboard.querySelector(`#${keyId}`);
      if (null === keyElement) return;
      isCapsLockActive;
      const keyElementDuplicate = this.keyboard.querySelector(`#${keyId}`);
      if (
        (keyId && keyElementDuplicate && "CapsLock" !== keyId
          ? keyElementDuplicate.classList.add("clicker")
          : "CapsLock" !== keyId ||
            isCapsLockActive ||
            this.keyboard
              .querySelector("#CapsLock")
              .classList.toggle("clicker"),
        keyElement.classList.contains("alphanumeric") &&
          (this.textArea.setRangeText(
            keyProcessingFunction(keyId),
            this.textArea.selectionStart,
            this.textArea.selectionEnd,
            "end"
          ),
          this.textArea.focus()),
        "Backspace" === keyId &&
          0 !== this.textArea.selectionStart &&
          this.deleteBackspaceKey(1),
        "Delete" === keyId && this.deleteBackspaceKey(),
        "CapsLock" !== keyId || isCapsLockActive || stateToggleFunction(),
        ("ShiftLeft" !== keyId && "ShiftRight" !== keyId) ||
          this.statusShift ||
          (stateToggleFunction(), (this.statusShift = !this.statusShift)),
        "Tab" === keyId && this.insertTextAndFocus("    "),
        "Enter" === keyId && this.insertTextAndFocus("\n"),
        "ArrowUp" === keyId && this.insertTextAndFocus("▲"),
        "ArrowDown" === keyId && this.insertTextAndFocus("▼"),
        "ArrowLeft" === keyId && this.insertTextAndFocus("◄"),
        "ArrowRight" === keyId && this.insertTextAndFocus("►"))
      ) {
        const cursorPosition = this.textArea.selectionStart - 1;
        e(this.textArea, cursorPosition);
      }
      if ("ArrowRight" === keyId) {
        const cursorPosition = this.textArea.selectionStart + 1;
        e(this.textArea, cursorPosition);
      }
      "AltLeft" === keyId && (this.statusALT = !this.statusALT),
        "ControlLeft" === keyId && (this.statusCTRL = !this.statusCTRL),
        this.statusALT && this.statusCTRL && altCtrlFunction();
    }

    initKeyboardEvents(keyPressCallback, shiftCallback, serviceCallback) {
      let activeKeyId;
      this.keyboard.addEventListener("mousedown", (event) => {
        activeKeyId = event.target.id;
        this.handleKeyboardEvent(
          activeKeyId,
          keyPressCallback,
          shiftCallback,
          serviceCallback
        );
      });

      document.addEventListener("keydown", (event) => {
        event.preventDefault();
        const keyCode = event.code;
        this.handleKeyboardEvent(
          keyCode,
          keyPressCallback,
          shiftCallback,
          serviceCallback,
          event.repeat
        );
      });

      this.keyboard.addEventListener("mouseup", (event) => {
        const isKeys = event.target.classList.contains("keys");
        const isCapsLock = activeKeyId !== "CapsLock";
        const isShift =
          event.target.id === "ShiftLeft" || event.target.id === "ShiftRight";
        const isControl = activeKeyId === "ControlLeft";
        const isAlt = activeKeyId === "AltLeft";

        if (isKeys && isCapsLock) {
          event.target.classList.remove("clicker");
        }

        if (isShift && this.statusShift) {
          shiftCallback();
          this.statusShift = false;
        }

        if ((isAlt || isControl) && isAlt) {
          this.statusALT = !this.statusALT;
        }

        if ((isAlt || isControl) && isControl) {
          this.statusCTRL = !this.statusCTRL;
        }
      });

      this.keyboard.addEventListener("mouseout", (event) => {
        const isKey = event.target.classList.contains("keys");
        const isCapsLock = activeKeyId === "CapsLock";

        if (isKey && !isCapsLock) {
          event.target.classList.remove("clicker");
        }
      });

      document.addEventListener("keyup", (event) => {
        activeKeyId = event.code;
        const activeKeyElement = this.keyboard.querySelector(`#${activeKeyId}`);

        if (activeKeyId !== "CapsLock" && activeKeyElement) {
          activeKeyElement.classList.remove("clicker");
        }

        if (
          (activeKeyId === "ShiftLeft" || activeKeyId === "ShiftRight") &&
          this.statusShift
        ) {
          shiftCallback();
          this.statusShift = false;
        }

        if (activeKeyId === "AltLeft") {
          this.statusALT = !this.statusALT;
        }

        if (activeKeyId === "ControlLeft") {
          this.statusCTRL = !this.statusCTRL;
        }
      });
    }
  })()
);
