document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  const fontFamilyVar = "--font-family-var";
  const robotoBold = getComputedStyle(html)
    .getPropertyValue(fontFamilyVar)
    .trim();

  const rootAnimationVar = "--animation";
  const cssAnimation = getComputedStyle(html)
    .getPropertyValue(rootAnimationVar)
    .trim();

  const rootTransitionVar = "--transition";
  const cssTransition = getComputedStyle(html)
    .getPropertyValue(rootTransitionVar)
    .trim();
  const body = document.body;

  if (robotoBold) body.style.fontFamily = robotoBold;

  if (cssAnimation) body.style.animation = `${cssAnimation}`;
  if (cssTransition) body.style.transition = `${cssTransition}`;

  const mobileQuarry = window.matchMedia("(max-width: 768px)");

  function cssMediaQuarryToken(e = mobileQuarry) {
    const isMatch = e.matches;

    if (isMatch) {
      body.hidden = true;
      body.style.display = "none";
      body.style.visibility = "hidden";
      body.style.opacity = 0;
      setTimeout(() => {
        alert("Es ist nicht für Mobile Geräte gemacht!");
      }, 1000);
    } else {
      body.hidden = false;
      body.style.removeProperty("display");
      body.style.removeProperty("visibility");
      body.style.removeProperty("opacity");
    }
  }
  mobileQuarry.addEventListener("change", cssMediaQuarryToken);
  cssMediaQuarryToken();

  const $ = (id) => document.getElementById(id);

  const backgroundImgDiv = $("backgroundImgContainerId");
  const backgroundImg = $("backgroundImgId");

  function imgSecurityToken() {
    const none = "none";
    const def = "default";
    const elementArray = [backgroundImgDiv, backgroundImg];
    const eventArray = ["copy", "dragstart", "keydown", "select"];
    const dataStyle = {
      fontFamily: robotoBold,
      webkitUserSelect: none,
      userSelect: none,
      cursor: def,
      pointerEvents: none,
    };

    elementArray.forEach((el) => {
      if (!el) return;

      eventArray.forEach((ev) => {
        if (!ev) return;

        el.addEventListener(ev, (e) => e.preventDefault());
      });

      if (robotoBold) Object.assign(el.style, dataStyle);
    });
  }
  imgSecurityToken();

  const canvas = document.querySelector("canvas");

  function convertCanvasToIframe() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "800");
    iframe.setAttribute("height", "600");
    iframe.setAttribute("frameBorder", "0");
    iframe.classList.add("canvas-url");
    iframe.style.background = "rgba(0, 0, 0, 0)";
    iframe.style.padding = "0px 0px";
    iframe.style.margin = "0px 0px 0px 0px";

    canvas.replaceWith(iframe);

    return iframe;
  }

  const iframe = convertCanvasToIframe();

  const urlTextPreviewH1 = $("urlTextPreviewId");
  urlTextPreviewH1.innerText = "";

  const copyBtn = $("copyBtnId");

  const inputTextUrl = $("inputTextUrlId");
  const inputBtnSend = $("inputBtnSendId");

  const btnDelete = $("btnDeleteId");

  function displayUrlInIframe(url) {
    iframe.src = url;
  }

  function urlCreateToken() {
    inputBtnSend.addEventListener("click", (e) => {
      e.preventDefault();

      let inputTextUrlValue = inputTextUrl.value.trim();

      if (inputTextUrlValue !== "") {
        if (
          !inputTextUrlValue.startsWith(
            "https://shimldergamer47.github.io/sdg-pause.html/"
          )
        ) {
          alert(
            "Die URL muss mit 'https://shimldergamer47.github.io/sdg-pause.html/' beginnen!"
          );
          return;
        }

        urlTextPreviewH1.textContent = inputTextUrlValue;

        displayUrlInIframe(inputTextUrlValue);
      } else {
        alert("Bitte gib eine URL ein!");
      }

      inputTextUrl.value = "";
    });

    inputTextUrl.addEventListener("keyup", function (e) {
      if (e.key === "Enter" || e.keyCode === 13) {
        e.preventDefault();
        inputBtnSend.click();
      }
    });

    const pauseUrl = `https://shimldergamer47.github.io/sdg-pause.html/?text=Pause&blur=10px&fontSize=120px`;
    urlTextPreviewH1.textContent = pauseUrl;
    displayUrlInIframe(pauseUrl);
  }
  urlCreateToken();

  function copyToClipboardToken() {
    copyBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      const textToCopy = urlTextPreviewH1.textContent;

      if (textToCopy === "") {
        alert("Keine URL zum Kopieren vorhanden!");
        return;
      }

      try {
        await navigator.clipboard.writeText(textToCopy);

        const originalText = copyBtn.value;
        copyBtn.value = "Kopiert!";
        copyBtn.style.color = "rgb(0, 255, 0)";

        setTimeout(() => {
          copyBtn.value = originalText;
          copyBtn.style.color = "rgb(255, 255, 255)";
        }, 500);
      } catch (err) {
        console.error("Fehler beim Kopieren:", err);
        alert("Kopieren fehlgeschlagen!");
      }
    });
  }
  copyToClipboardToken();

  function deleteToken() {
    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();

      urlTextPreviewH1.textContent = "";

      inputTextUrl.value = "";

      iframe.src = "about:blank";
      iframe.style.removeProperty("background");
      iframe.style.removeProperty("padding");
      iframe.style.removeProperty("margin");

      const originalText = btnDelete.value;
      btnDelete.value = "Gelöscht!";
      btnDelete.style.color = "rgb(255, 0, 0)";

      setTimeout(() => {
        btnDelete.value = originalText;
        btnDelete.style.color = "rgb(255, 255, 255)";
      }, 500);
    });
  }
  deleteToken();

  const urlMyCssWebsiteDiv = $("urlMyCssWebsiteContainerId");
  const urlMyCssWebsite = $("urlMyCssWebsiteId");

  function urlClickDivToken() {
    const elementArray = [urlMyCssWebsiteDiv, urlMyCssWebsite];

    elementArray.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        urlMyCssWebsite.classList.add("underline-link-css");
      });

      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        urlMyCssWebsite.classList.add("underline-link-css");
      });
    });

    urlMyCssWebsiteDiv.addEventListener("click", (e) => {
      urlMyCssWebsite.click();
    });
  }
  urlClickDivToken();

  const mainDateDiv = $("mainDateContainerId");
  const titleTimeDiv = $("titleTimeContainerId");
  const titleTimeH1 = $("titleTimeId");
  titleTimeH1.innerText = "";
  const titleClockH1 = $("titleClockId");
  titleClockH1.innerText = "";
  const titleDateDiv = $("titleDateContainerId");
  const titleDateH2 = $("titleDateId");
  titleDateH2.innerText = "";

  function clockToken() {
    function clockSecurityToken() {
      const elementArray = [
        mainDateDiv,
        titleTimeDiv,
        titleTimeH1,
        titleClockH1,
        titleDateDiv,
        titleDateH2,
      ];

      const eventArray = ["copy", "dragstart", "keydown", "select"];

      const none = "none";
      const def = "default";
      const dataStyle = {
        fontFamily: robotoBold,
        webkitUserSelect: none,
        userSelect: none,
        cursor: def,
        pointerEvents: none,
      };

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;

          element.addEventListener(event, (e) => e.preventDefault());
        });

        Object.assign(element.style, dataStyle);
      });
    }
    clockSecurityToken();

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).padStart(4, "0");

    titleTimeH1.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    titleClockH1.textContent = "Uhr";
    titleDateH2.textContent = `${day}.${month}.${year}`;
  }
  clockToken();
  setInterval(clockToken, 1);
});
