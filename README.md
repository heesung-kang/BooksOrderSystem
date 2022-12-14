# Vue

### Project setup
```
npm install
```

### Project deploy
```
npm run deploy
```
### SRC 파일구조
```
* api
  - pay 
    - book.js : kakao api 
    - pay.js : 결제 SDK
* assets : 이미지 파일등...
* components
  - cart : 장바구니 컴포넌트
  - common : 공통 컴포넌트
  - form : Form UI 컴포넌트
  - modal : Modal 컴포넌트
  - mypage : 서점정보 컴포넌트
  - order : 주문 컴포넌트
  - release : 출고 컴포넌트
  - search : 서적 검색 컴포넌트
* mixins : mixin 파일
* plugins : dayjs, vuetify 설정 파일
* router : 라우터
* skeletons : 스켈레톤 파일
* store : Vuex
* styles : global scss
* utils : util js 
* view :  페이지 index
```

# FireStore : 서점, 출판사 공통
### 컬렉션
```
1. bookData : 서적
2. distribution : 배본사 
3. orderRequest : 주문내역 
4. publisherInfo : 출판사 정보 
5. shopInfo : 서점 정보 
6. sid : 출판사 sid 설정 
```

## 부가 설명
### bookData
```
excel 데이터를 json 형태로 변형하여 한번에 업로드 한다. (업데이트 되면 기존 데이터는 삭제된다)
```
### distribution
```
uid를 출판사 uid와 매칭하여 출판사와 관계를 맺는다.
```
### orderRequest
```
shop_order_status : 서점주문상태
0:회신전
1:회신
2:발주:결제완료
3:출고대기
4:출고
5:완료

publisher_reply_status : 출판사 회신 상태
0: 정상
1:품절
2:절판
3:재고부족

order_check : 주문 유무
order_time : 주문서버시간
reply_time : 회신서버시간
order_real_time : 발주서버시간
release_time:출고서버시간
complete_time:수취완료시간
reply_count: 회신수량
totalCount: 발주 총권수
totalPrice:발주 총금액
```
### publisherInfo
```
sid : 서점 고유 넘버
      sid는 sid 컬렉션에 1을 더한 숫자로 출판사가 가입 할때마다 카운팅된다.
```
### shopInfo
```
shopRate : 서점별 공급률
bookRate : 서적별 공급률
payType : 출판사별 결제타입
```
