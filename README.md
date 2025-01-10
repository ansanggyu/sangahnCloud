# **NAS-Like Cloud Service**

## **프로젝트 소개**
NAS(Network Attached Storage)와 유사한 클라우드 스토리지 서비스입니다. 파일 업로드, 공유, 백업, 멀티 디바이스 동기화와 같은 기능을 제공합니다.

## **주요 기능**
1. **저장용량 관리**
    - 사용 가능한 저장 용량 확인.
    - 파일 및 폴더 정리.

2. **파일 공유**
    - QR 코드 생성.
    - 다운로드 제한 및 만료 링크 설정.

3. **보안 설정**
    - 파일 잠금.
    - IP 기반 접근 제한.

4. **자동 백업**
    - 로컬 또는 클라우드로 주기적인 백업 스케줄링.

5. **멀티 디바이스 동기화**
    - 여러 디바이스 간 실시간 파일 동기화.

6. **미디어 스트리밍**
    - 저장된 동영상 및 음악 스트리밍.

7. **RAID 및 저장소 관리**
    - RAID를 통한 데이터 무결성 및 저장소 시각화.

---

## **기술 스택**

### **프론트엔드**
- **React**: 컴포넌트 기반 UI 라이브러리.
- **TypeScript**: 정적 타입 검사로 안정성 제공.
- **Vite**: 빠른 개발 서버 및 빌드 환경.
- **Chakra UI**: 접근성과 다크모드 지원 UI 라이브러리.
- **React Query**: 서버 상태 관리.
- **React Router**: 라우팅 구현.
- **Axios**: HTTP 요청 처리.
- **React Dropzone**: 드래그 앤 드롭 기반 파일 업로드.
- **React Table**: 파일 목록 및 테이블 뷰 제공.
- **React Chart.js 2**: 저장소 시각화.

### **백엔드**
- **Spring Boot**: REST API 서버 개발.
- **MariaDB**: 관계형 데이터베이스로 파일 및 사용자 정보 관리.
- **JWT (JSON Web Token)**: 인증 및 권한 관리.
- **Samba/FTP 서버**: 파일 전송 프로토콜 지원.

### **배포 및 관리**
- **Docker**: 컨테이너화된 배포.
- **AWS**: 클라우드 배포.


# **3-Month Cloud Drive Service Development Roadmap**

## **목표**
- 중급~고급 개발자 수준의 클라우드 드라이브 서비스 구현.
- 주요 기능:
    - 파일 업로드, 다운로드, 삭제, 폴더 관리.
    - JWT 기반 1차 로그인 및 이메일 2차 인증.
    - 실시간 파일 동기화(WebSocket).
    - 머신러닝 기반 이미지 분류 및 태깅.
    - 데이터 시각화 대시보드 및 개인화된 파일 추천.

---

## **1st Month: Core Infrastructure & Basic Features**
### **Week 1: 프로젝트 초기 설정**
#### **Tasks**:
- **프론트엔드**:
    - React 프로젝트 초기화 (Vite).
    - Chakra UI 설치 및 기본 레이아웃 생성 (헤더, 사이드바).
    - React Router를 사용한 페이지 라우팅 구조 설계.
- **백엔드**:
    - Spring Boot 프로젝트 생성 및 의존성 추가 (Spring Web, JPA, MariaDB).
    - MariaDB 설정 및 데이터베이스 연결 테스트.
    - JWT 인증 구현을 위한 기본 Spring Security 설정.
#### **Deliverables**:
- `/api/health` API로 서버 상태 확인 가능.
- 기본 레이아웃(UI) 렌더링.
#### **Learning Goals**:
- Chakra UI의 기본 사용법.
- Spring Boot와 MariaDB 연동.

---

### **Week 2: JWT 기반 1차 로그인**
#### **Tasks**:
- **백엔드**:
    - 회원가입 API (`/api/auth/register`) 및 로그인 API (`/api/auth/login`) 구현.
    - JWT 발급 및 인증 미들웨어 개발.
- **프론트엔드**:
    - 로그인 및 회원가입 페이지 구현.
    - Axios로 API 연동 및 JWT 토큰 저장.
    - 로그인 상태에 따라 UI 변경(로그인/로그아웃 버튼).
#### **Deliverables**:
- 사용자는 1차 로그인(JWT)을 통해 파일 시스템에 접근 가능.
#### **Learning Goals**:
- Spring Security와 JWT 통합.
- Chakra UI의 Form 컴포넌트 학습.

---

### **Week 3: 파일 업로드 및 다운로드**
#### **Tasks**:
- **백엔드**:
    - 파일 업로드 API (`/api/files/upload`) 및 다운로드 API (`/api/files/download/{id}`) 구현.
    - 파일 메타데이터를 DB에 저장하는 JPA 모델 생성.
- **프론트엔드**:
    - React Dropzone을 사용해 파일 업로드 UI 구현.
    - 업로드된 파일을 리스트 형태로 렌더링.
    - Axios로 파일 업로드 및 다운로드 API 연동.
#### **Deliverables**:
- 파일 업로드/다운로드 가능.
- UI에서 업로드된 파일 확인 가능.
#### **Learning Goals**:
- 파일 업로드/다운로드의 백엔드 처리.
- React Dropzone 사용법.

---

## **2nd Month: Advanced Features**
### **Week 4: 폴더 관리 기능**
#### **Tasks**:
- **백엔드**:
    - 폴더 생성 API (`/api/folders/create`) 및 삭제 API (`/api/folders/delete/{id}`) 구현.
    - 폴더와 파일의 계층적 구조를 관리하는 JPA 모델 설계(Self-Referencing Entity).
- **프론트엔드**:
    - 폴더 생성/삭제 UI 추가.
    - 파일과 폴더가 계층적으로 표시되는 리스트 구현.
#### **Deliverables**:
- 폴더 생성 및 삭제 가능.
- UI에서 파일과 폴더 계층 표시.
#### **Learning Goals**:
- 계층적 데이터 관리 및 렌더링.

---

### **Week 5: 이메일 기반 2차 인증**
#### **Tasks**:
- **백엔드**:
    - 이메일 인증 토큰 생성 API (`/api/auth/send-email`).
    - 이메일 인증 확인 API (`/api/auth/verify-email`).
    - Spring Mail을 사용해 이메일 전송 구현.
- **프론트엔드**:
    - 이메일 인증 입력 UI 구현.
    - 인증 실패 시 에러 메시지 표시.
#### **Deliverables**:
- 로그인 후 이메일 인증을 통해 2단계 인증 완료.
#### **Learning Goals**:
- Spring Mail 활용법.
- 프론트엔드에서 2단계 인증 UI 구현.

---

### **Week 6: 이미지 분류 및 태깅**
#### **Tasks**:
- **백엔드**:
    - TensorFlow 또는 PyTorch 모델을 활용한 이미지 분류 서버 구축.
    - 업로드된 이미지를 분석하여 태그를 생성하는 API (`/api/files/analyze`) 구현.
- **프론트엔드**:
    - 파일 리스트에서 이미지 태그 표시.
    - 태그로 검색할 수 있는 필터링 UI 추가.
#### **Deliverables**:
- 이미지에 태그가 자동으로 추가.
- 태그를 활용한 검색 가능.
#### **Learning Goals**:
- 머신러닝 모델 서빙(TensorFlow Serving, FastAPI).

---

## **3rd Month: Real-Time Features & Machine Learning**
### **Week 7: 실시간 파일 동기화**
#### **Tasks**:
- **백엔드**:
    - Spring WebSocket을 사용한 파일 변경 이벤트 전송.
- **프론트엔드**:
    - WebSocket 클라이언트로 실시간 파일 리스트 업데이트.
#### **Deliverables**:
- 파일 업로드/삭제 시 실시간 동기화.
#### **Learning Goals**:
- WebSocket 통신 학습.
- React에서 실시간 UI 업데이트 구현.

---

### **Week 8: 데이터 시각화**
#### **Tasks**:
- **프론트엔드**:
    - Chakra UI와 D3.js를 활용한 대시보드 생성.
    - 저장 용량 분포 및 사용 빈도 시각화.
- **백엔드**:
    - 데이터 시각화를 위한 통계 API (`/api/stats`) 개발.
#### **Deliverables**:
- 데이터 시각화 대시보드.
#### **Learning Goals**:
- 데이터 시각화(D3.js).
- 클라우드 배포 및 성능 최적화.

---

### **Week 9-12: 최종 배포 및 성능 최적화**
#### **Tasks**:
- Docker Compose로 로컬 배포 및 테스트.
- AWS EC2 또는 GCP를 사용해 서비스 배포.
- 성능 테스트 및 최적화.
- 최종 README.md 작성 및 프로젝트 문서화.
#### **Deliverables**:
- 전체 기능 완성 및 배포.
#### **Learning Goals**:
- 클라우드 배포 및 고급 성능 최적화.
