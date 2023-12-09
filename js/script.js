function ToArch(element) {
  // 要素内のテキストを抜き出して配列にする
  var text = element.textContent;
  text = text.split("");

  // 要素内のテキストを１文字ずつかこみ、それらに角度と高さを設定
  element.innerHTML = "";
  for (var int = 0; int < text.length; int++) {
    var divnode = null;

    // 要素の角度
    var divrotate = (360 / text.length) * int;

    divnode = document.createElement("span");
    divnode.innerHTML = text[int];
    divnode.style.position = "absolute";
    divnode.style.height = "50%";
    divnode.style.color = "unset";
    divnode.style.transformOrigin = "bottom center";
    divnode.style.top = "0";
    divnode.style.bottom = "0";
    divnode.style.left = "49.5%";
    divnode.style.transform = "rotate(" + divrotate + "deg)";
    element.appendChild(divnode);
  }
  return element;
}

var archtarget = document.getElementById("header_logo");
ToArch(archtarget);
