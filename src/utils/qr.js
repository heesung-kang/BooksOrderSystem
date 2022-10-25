var nPay = {
  goods: "",
  price: "",
};
var qr;
var result;
var ti;
var re;
var res = {
  createdQrcode: false,
  paid: false,
};
var storeId = "n20fz-id19l-02n18-15o48-r59gl";

var open = function (pay, callback) {
  // ie version check
  if (_isIE() && _isIE() < 10) {
    alert("internet explorer 10 이상 지원합니다.");
    return;
  }

  if (typeof qr == "undefined" || nPay.goods !== pay.productName || nPay.price !== pay.productAmount) {
    nPay.goods = pay.productName;
    nPay.price = pay.productAmount;
    _createQrcode();
  } else {
    if (_isMoblie()) {
      location.href = re;
      _createWait();
    } else {
      _display();
    }
  }
  result = callback;
};

var close = function () {
  document.getElementById("InstaPayLayer").style.display = "none";
};

var _createQrcode = function () {
  var sendData = "goods=" + encodeURIComponent(btoa(unescape(encodeURIComponent(nPay.goods)))) + "&price=" + nPay.price + "&ldate=nil";
  //var sendData = 'goods=' + btoa(nPay.goods) + '&price=' + nPay.price + '&ldate=nil';
  var url = "https://api.instapay.kr/s2/sell?" + sendData;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      _resultQrcode(this.responseText);
    }
  };
  xhttp.open("get", url, true);
  xhttp.setRequestHeader("authorization", "Bearer " + storeId);
  xhttp.send();
};

var _resultQrcode = function (responseText) {
  var response = JSON.parse(responseText);
  if (response.result === "ok") {
    _create(response.gid);
  } else {
    result(res);
  }
};

var _create = function (i) {
  var url = "https://api.instapay.kr/s2/buy?i=" + i;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      _result(this.responseText);
    }
  };
  xhttp.open("get", url, true);
  xhttp.setRequestHeader("authorization", "Bearer " + storeId);
  xhttp.send();
};
export var qrData;
var _result = function (responseText) {
  var response = JSON.parse(responseText);
  if (response.result === "ok") {
    qrData = response;
    console.log(response);
    qr = response.qr;
    ti = response.ti;
    re = response.re;
    res.createdQrcode = true;
    _createWait();
    // if (_isMoblie()) {
    //   location.href = re;
    //   _createWait();
    // } else {
    //   _display();
    // }
  } else {
    result(res);
  }
};

var _createWait = function () {
  var url = "https://api.instapay.kr/s2/wait?ti=" + ti;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //_resultWait(this.responseText);
    }
  };
  const result = xhttp.open("get", url, true);
  console.log(result);
  xhttp.send();
};

var _waitComplete = function () {
  var url = "https://api.instapay.kr/s2/wait?ti=" + ti + "&st=complete";
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      _resultWait(this.responseText);
    }
  };
  xhttp.open("get", url, true);
  xhttp.send();
};

var _resultWait = function (responseText) {
  var response = JSON.parse(responseText);
  if (response.result === "ok") {
    if (response.tstatus === "entry") {
      if (!_isMoblie()) {
        alert("결제가 진행중 입니다. 창을 닫거나, 새로고침 하시면 오류가 발생할 수 있습니다.");
      }
      _waitComplete();
    } else {
      res.paid = true;
      result(res);
    }
  } else {
    result(res);
  }
};

var _display = function () {
  if (!document.getElementById("InstaPayLayer")) {
    _addPayLayer();
    _bindCloseEvent();
  }

  _addCss();
  _openLayer();
  _createWait();
};

var _addCss = function () {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "instapay.css";

  head.appendChild(link);
};

var _addPayLayer = function () {
  var body = document.body;
  var layer = document.createElement("div");
  var domString =
    "<div id='InstaPayLayer' class='InstaPay__layer'><div class='InstaPay__content'><span id='InstaPayBtnClose' class='InstaPay__btn-close'>X</span><img src='" +
    qr +
    "'><p id='layerProductName'></p><p id='layerProductAmount'></p></div></div>";

  layer.innerHTML = domString;

  body.appendChild(layer);
};

var _bindCloseEvent = function () {
  var instaPayBtnClose = document.getElementById("InstaPayBtnClose");
  instaPayBtnClose.addEventListener("click", function () {
    close();
  });
};

//핸드폰 결제시 띄우는 창?
var _openLayer = function () {
  document.getElementById("InstaPayLayer").style.display = "block";
  document.getElementById("layerProductName").innerHTML = nPay.goods;
  document.getElementById("layerProductAmount").innerHTML = nPay.price + " 원";
};

//모바일 확인
var _isMoblie = function () {
  var filter = "win16|win32|win64|mac";

  return navigator.platform && 0 > filter.indexOf(navigator.platform.toLowerCase());
};

//익스플로러 확인
var _isIE = function () {
  var myNav = navigator.userAgent.toLowerCase();
  return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false;
};

export { open, close };
