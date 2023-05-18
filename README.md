# fe-sprint-coz-shopping
## 솔로프로젝트 (상품 리스트 메인, 상품 리스트, 상품 북마크 리스트)

상태를 Redux로 관리하지 않고 useState를 사용해 진행했습니다.

지금까지 배웠던 걸 토대로 구현, 깃헙 공부에 초점 두었습니다.
Redux 좀 더 공부하고 리팩토링할 예정입니다.

## 프로젝트 설명
상품을 API로 받아 오는 방식입니다.
- 메인 페이지
- 상품 리스트 페이지
- 북마크 리스트 페이지

총 3개의 페이지로 구성되어 있습니다.

## - 메인 페이지
상품, 북마크 상품이 총 4개씩 보여지고 있습니다.

#### 북마크 상품이 없을 경우의 화면입니다.
![스크린샷 2023-05-18 오후 3 39 35](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/c72a5a76-19dd-474d-9fb9-ef9be27a8676)
#### 북마크 상품을 추가했을 경우입니다.
![스크린샷 2023-05-18 오후 3 39 44](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/1dfbc414-6f9f-44e1-8078-608186b50fbf)

#### 상단 로고, 메뉴로 페이지 이동이 가능합니다.
![스크린샷 2023-05-18 오후 3 40 11](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/7b9ac21c-7c31-4330-8006-20861a14f2c1)
1. 로고
- 클릭 시 메인 페이지로 이동합니다.
2. 햄버거 메뉴
- [상품 리스트 페이지] 클릭 시 상품 리스트 페이지로 이동합니다.
- [북마크 리스트 페이지] 클릭 시 상품 리스트 페이지로 이동합니다.

#### 각 상품 이미지 클릭 시 모달창이 나옵니다.
![스크린샷 2023-05-18 오후 3 43 56](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/da9a287f-49d5-4263-8d76-06d722abf3b6)
![스크린샷 2023-05-18 오후 3 44 07](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/fe05a1d7-cb29-46f4-8d29-e714f8da1f83)
- 하단 좌측의 북마크 버튼으로도 북마크 상품을 추가/삭제할 수 있습니다.

---

## - 상품 리스트 페이지
상품 리스트 전체가 보여지는 페이지입니다.
상단에 탭메뉴가 있어 원하는 타입별로 확인이 가능합니다.

#### 상품을 타입별로 확인이 가능합니다.
![스크린샷 2023-05-18 오후 3 44 51](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/94b2deb7-b55d-4465-a1fa-789af9fe43ff)
![스크린샷 2023-05-18 오후 3 45 02](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/c8f148b1-972a-4cf4-ade8-7e66dd3961c3)
- 상단 탭 메뉴로 원하는 타입별로 확인이 가능합니다.
- 북마크 상품도 같이 노출 됩니다.

---

## - 북마크 리스트 페이지
상품 하단에 위치한 별모양 버튼 클릭 시 북마크 리스트에 추가 됩니다.
상품 리스트 페이지와 동일하게 타입별로 확인이 가능합니다.
![스크린샷 2023-05-18 오후 3 47 15](https://github.com/jieun419/fe-sprint-coz-shopping/assets/109754988/512fb2eb-d47e-4417-93bd-d5aaffc9e3cb)
- 북마크 상품만 추가 됩니다.
- 북마크 버튼 클릭 시 해당 페이지에서 삭제 됩니다.
- 상단 탭 메뉴로 원하는 타입별로 확인이 가능합니다.






