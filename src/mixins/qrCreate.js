const qrCreate = {
  data() {
    return {
      nPay: {
        goods: "",
        ttl: 20,
        price: "",
      },
      qr: "",
      result: "",
      ti: "",
      re: "",
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
      if (
        typeof this.qr == "undefined" ||
        this.nPay.goods !== pay.productName ||
        this.nPay.price !== pay.productAmount ||
        this.nPay.ttl !== pay.ttl
      ) {
        this.nPay.goods = pay.productName;
        this.nPay.price = pay.productAmount;
        this.nPay.ttl = pay.ttl;
        this._createQrcode();
      } else {
        this._createWait();
      }
    },
    _createQrcode() {
      var sendData =
        "goods=" +
        encodeURIComponent(btoa(unescape(encodeURIComponent(this.nPay.goods)))) +
        "&price=" +
        this.nPay.price +
        "&ttl=" +
        this.nPay.ttl +
        "&ldate=nil";
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
      } else {
        this.result = this.res;
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
        this._createWait();
      } else {
        this.result = this.res;
      }
    },
    _createWait() {
      var url = "https://api.instapay.kr/s2/wait?ti=" + this.ti;
      var xhttp = new XMLHttpRequest();
      const _this = this;
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          _this._resultWait(this.responseText);
        }
      };
      xhttp.open("get", url, true);
      xhttp.send();
    },

    _resultWait(responseText) {
      var response = JSON.parse(responseText);
      if (response.result === "ok") {
        if (response.tstatus === "entry") {
          alert("결제가 진행중 입니다. 창을 닫거나, 새로고침 하시면 오류가 발생할 수 있습니다.");
          this._waitComplete();
        } else {
          this.res.paid = true;
          this.result = this.res;
        }
      } else {
        this.result = this.res;
      }
    },

    _waitComplete() {
      var url = "https://api.instapay.kr/s2/wait?ti=" + this.ti + "&st=complete";
      var xhttp = new XMLHttpRequest();
      const _this = this;
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          _this._resultWait(this.responseText);
        }
      };
      xhttp.open("get", url, true);
      xhttp.send();
    },
  },
};
export default qrCreate;
