import { createQrcodeApi, createApi, createWaitApi, waitCompleteApi } from "@/api/pay/pay";
import isMobile from "@/utils/isMobile";
import isIE from "@/utils/isIE";
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
    };
  },
  methods: {
    _open(pay) {
      if (isIE() && isIE() < 10) {
        alert("internet explorer 10 이상 지원합니다.");
        return;
      }
      if (
        typeof this.qr == "undefined" ||
        this.nPay.goods !== pay.productName ||
        this.nPay.price !== pay.productAmount ||
        this.nPay.ttl !== pay.ttl
      ) {
        //this.nPay.goods = pay.productName;
        this.nPay.price = pay.productAmount;
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
      const response = createQrcodeApi(sendData);
      response
        .then(res => {
          if (res.request.readyState === 4 && res.request.status === 200) {
            this._resultQrcode(res.request.responseText);
          }
        })
        .catch(error => {
          console.log(error);
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
      const response = createApi(i);
      response
        .then(res => {
          if (res.request.readyState === 4 && res.request.status === 200) {
            this._result(res.request.responseText);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    _result(responseText) {
      const response = JSON.parse(responseText);
      if (response.result === "ok") {
        this.qr = response.qr;
        this.ti = response.ti;
        this.re = response.re;
        this.res.createdQrcode = true;
        if (isMobile()) {
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
      response
        .then(res => {
          if (res.request.readyState === 4 && res.request.status === 200) {
            this._resultWait(res.request.responseText);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    _waitComplete() {
      const response = waitCompleteApi(this.ti);
      response
        .then(res => {
          if (res.request.readyState === 4 && res.request.status === 200) {
            this._resultWait(res.request.responseText);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    _resultWait(responseText) {
      const response = JSON.parse(responseText);
      if (response.result === "ok") {
        if (response.tstatus === "entry") {
          if (isMobile()) {
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
    _stop() {
      window.stop();
    },
  },
};
export default qrCreate;
