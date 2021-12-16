let img = document.querySelector('img');
        img.onclick = function() {
          var src = img.getAttribute("src");
          if (src === "off.png") {
            img.setAttribute("src", "on.png")
          } else {
            img.setAttribute("src", "off.png")
          }
        }