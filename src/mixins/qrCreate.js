const qrCreate = {
  data() {
    return {
      nPay: {
        goods: "",
        price: "",
      },
      qr: "",
      ti: "",
      res: {
        createdQrcode: false,
        paid: false,
      },
      storeId: "n20fz-id19l-02n18-15o48-r59gl",
    };
  },
  methods: {
    //익스플로러 확인
    _isIE() {
      var myNav = navigator.userAgent.toLowerCase();
      return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false;
    },
    _open(pay) {
      // ie version check
      if (this._isIE() && this._isIE() < 10) {
        alert("internet explorer 10 이상 지원합니다.");
        return;
      }
      if (typeof this.qr == "undefined" || this.nPay.goods !== pay.productName || this.nPay.price !== pay.productAmount) {
        this.nPay.goods = pay.productName;
        this.nPay.price = pay.productAmount;
        this._createQrcode();
      }
    },
    _createQrcode() {
      var sendData = "goods=" + encodeURIComponent(btoa(unescape(encodeURIComponent(this.nPay.goods)))) + "&price=" + this.nPay.price + "&ldate=nil";
      //var sendData = 'goods=' + btoa(nPay.goods) + '&price=' + nPay.price + '&ldate=nil';
      var url = "https://api.instapay.kr/s2/sell?" + sendData;
      var xhttp = new XMLHttpRequest();
      const _this = this;
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          _this._resultQrcode(this.responseText);
        }
      };
      xhttp.open("get", url, true);
      xhttp.setRequestHeader("authorization", "Bearer " + this.storeId);
      xhttp.send();
    },
    _resultQrcode(responseText) {
      var response = JSON.parse(responseText);
      if (response.result === "ok") {
        this._create(response.gid);
      }
    },
    _create(i) {
      var url = "https://api.instapay.kr/s2/buy?i=" + i;
      var xhttp = new XMLHttpRequest();
      const _this = this;
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          _this._result(this.responseText);
        }
      };
      xhttp.open("get", url, true);
      xhttp.setRequestHeader("authorization", "Bearer " + this.storeId);
      xhttp.send();
    },
    _result(responseText) {
      var response = JSON.parse(responseText);
      if (response.result === "ok") {
        this.qr = response.qr;
        this.ti = response.ti;
        this.re = response.re;
        this.res.createdQrcode = true;
      }
    },
  },
};
export default qrCreate;
