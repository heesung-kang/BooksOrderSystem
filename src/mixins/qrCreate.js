import { createQrcodeApi, createApi, createWaitApi, waitCompleteApi } from "@/api/pay/pay";
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
    //모바일 확인
    _isMoblie() {
      const mCheck = /MID|TB-8504F|SM-T580|Nexus 9|P20HD|SM-P555S|SM-T536|SM-T385K|SM-T530|LG-V607L|MPGIO-10|muPAD/i; // 안드로이드 태블릿 리스트
      const isMobile =
        !mCheck.test(navigator.userAgent) &&
        (/(?=.*Android)(?=.*Mobile Safari).*/i.test(navigator.userAgent) || /iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      return isMobile;
    },
    //익스플로러 확인
    _isIE() {
      const myNav = navigator.userAgent.toLowerCase();
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
        //this.nPay.price = pay.productAmount;
        this.nPay.price = 1;
        this.nPay.ttl = pay.ttl;
        this._createQrcode();
      } else {
        this._createWait();
      }
    },
    _createQrcode() {
      const sendData = `goods=${encodeURIComponent(btoa(unescape(encodeURIComponent(this.nPay.goods))))}&price=${this.nPay.price}&ttl=${
        this.nPay.ttl
      }&ldate=nil`;
      const response = createQrcodeApi(sendData, this.storeId);
      response.then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          this._resultQrcode(res.request.responseText);
        }
      });
    },
    _resultQrcode(responseText) {
      const response = JSON.parse(responseText);
      if (response.result === "ok") {
        this._create(response.gid);
      } else {
        this.result = this.res;
      }
    },
    _create(i) {
      const response = createApi(i, this.storeId);
      response.then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          this._result(res.request.responseText);
        }
      });
    },
    _result(responseText) {
      const response = JSON.parse(responseText);
      if (response.result === "ok") {
        this.qr = response.qr;
        this.ti = response.ti;
        this.re = response.re;
        this.res.createdQrcode = true;
        if (this._isMoblie()) {
          //모바일 딥링크 띄우기
          location.href = this.re;
          this._createWait();
        } else {
          //pc qr 띄우기
          this._createWait();
        }
      } else {
        this.result = this.res;
      }
    },
    _createWait() {
      const response = createWaitApi(this.ti);
      response.then(res => {
        console.log(res);
        if (res.request.readyState === 4 && res.request.status === 200) {
          this._resultWait(res.request.responseText);
        }
      });
    },
    _waitComplete() {
      const response = waitCompleteApi(this.ti);
      response.then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          this._resultWait(res.request.responseText);
        }
      });
    },
    _resultWait(responseText) {
      const response = JSON.parse(responseText);
      if (response.result === "ok") {
        if (response.tstatus === "entry") {
          if (!this._isMoblie()) {
            alert("결제가 진행중 입니다. 창을 닫거나, 새로고침 하시면 오류가 발생할 수 있습니다.");
          }
          this._waitComplete();
        } else {
          this.res.paid = true;
          this.result = this.res;
        }
      } else {
        this.result = this.res;
      }
    },
  },
};
export default qrCreate;
