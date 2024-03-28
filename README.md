# 도서 관리 프로그램 - CRUD library Project
------------
## 기능 설명

### [로그인 기능]
------------
#### 1. 회원가입
+ 요구한 정보를 입력시 DB에 USER정보를 저장
+ 아이디, 비밀번호 유효성 검사
+ 아이디 중복체크

#### 2. 로그인
+ DB에 저장된 아이디, 비밀번호 입력 성공 시 JWT 토큰 발행
+ 이메일 인증 전까지 임시 사용자 권한 부여

#### 3. 이메일 인증
+ Spring mail 라이브러리를 활용한 이메일 인증
+ 이메일 인증 시 사용자 계정 권한 부여
  
#### 4. 소셜로그인
+ 구글,카카오,네이버 계정 회원가입 및 계정 통합 기능

### [권한 별 기능]
------------
#### 1. ADMIN 관리자 계정 -> 관리자 사용가능한 기능 (도서 등록, 수정, 삭제, 목록 확인)
#### 1. USER 사용자 계정 -> 
#### 1. TEMPORARY USER 임시 사용자 계정 -> 
------------
## 관리자 계정
------------
#### 1. Create
+ 입력한 데이터로 도서 추가하는 기능
+ firebase를 이용한 도서 표지 이미지 저장 가능
    
#### 2. Read
+ 책의 정보(이름, 카테고리, 도서 형태)를 입력하면 해당하는 책을 출력하는 기능
  
#### 4. Update
+ 체크박스로 체크된 도서 수정 기능
    
#### 5. Delete
+ 체크박스로 체크된 도서 삭제 기능
+ 다중, 단일 삭제 모두 가능
    
#### 6. List(all)
+ 저장된 책을 모두 출력하는 기능
  
#### 7. List(category)
+ 도서 정보(카테고리)를 입력하면 해당하는 책을 출력하는 기능

#### 8. List(book type)
+ 도서 정보(도서 형태)를 입력하면 해당하는 책을 출력하는 기능
  
#### 9. List(book name)
+ 도서 정보(이름)를 입력하면 해당하는 책을 출력하는 기능
## 사용자 계정
------------
## 임시사용자 계정
------------