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
- 개인 사용자를 위한 클라우드 드라이브 서비스 개발.
- 최신 기술(React, Spring Boot, MariaDB, Chakra UI, JWT, WebSocket, Docker 등) 학습 및 적용.
- 실제 배포 가능한 수준의 완성도 목표.

---

## **1st Month: Core Infrastructure & Basic Features**
### **Week 1: Project Initialization**
- **Tasks**:
    - Spring Boot 프로젝트 생성 및 의존성 추가 (Spring Web, JPA, MariaDB, Spring Security).
    - MariaDB 데이터베이스 설정.
    - React 프로젝트 생성 (Vite 기반) 및 초기 설정.
    - Chakra UI 설치 및 기본 레이아웃 생성.
- **Deliverables**:
    - 백엔드: `/api/health` API로 서버 상태 확인 가능.
    - 프론트엔드: Chakra UI를 활용한 기본 헤더와 사이드바 레이아웃.
- **Learning Goals**:
    - Spring Boot 프로젝트 초기화.
    - Chakra UI 기본 사용법.

---

### **Week 2: User Authentication**
- **Tasks**:
    - 백엔드:
        - Spring Security 및 JWT로 사용자 인증 구현.
        - 회원가입 및 로그인 API 개발 (`/api/auth/register`, `/api/auth/login`).
    - 프론트엔드:
        - 로그인 및 회원가입 페이지 생성.
        - Axios로 API 연동.
    - JWT 기반 세션 관리 구현.
- **Deliverables**:
    - 사용자는 회원가입 및 로그인을 통해 개인 데이터를 관리할 수 있음.
- **Learning Goals**:
    - Spring Security와 JWT 통합.
    - Chakra UI의 Form 컴포넌트 학습.

---

### **Week 3: File Management API**
- **Tasks**:
    - 백엔드:
        - 파일 업로드/다운로드 API 개발 (`/api/files/upload`, `/api/files/download/{id}`).
        - 파일 메타데이터 저장(JPA 모델: `File` 엔티티).
    - 프론트엔드:
        - React Dropzone으로 파일 업로드 UI 구현.
        - 업로드된 파일 목록 표시 (Axios로 파일 리스트 API 연동).
    - 파일 저장 위치: 로컬 디스크.
- **Deliverables**:
    - 사용자 파일 업로드 및 다운로드 가능.
    - 파일 리스트 UI에서 업로드된 파일 확인 가능.
- **Learning Goals**:
    - React Dropzone 사용법.
    - 파일 저장 및 스트리밍 처리(Spring Boot).

---

## **2nd Month: Advanced Features & Security**
### **Week 4: Folder Management**
- **Tasks**:
    - 백엔드:
        - 폴더 생성 및 삭제 API (`/api/folders/create`, `/api/folders/delete/{id}`).
        - 폴더 트리 관리 (JPA의 Self-Referencing Entity 사용).
    - 프론트엔드:
        - 폴더 생성 버튼 및 UI 추가.
        - Axios로 폴더 API 연동.
    - 파일과 폴더 통합 리스트 구현.
- **Deliverables**:
    - 사용자 폴더 생성 및 삭제 가능.
    - 폴더와 파일이 계층적으로 표시됨.
- **Learning Goals**:
    - React에서 계층 구조 렌더링.
    - Spring Boot에서 Self-Referencing Entity 학습.

---

### **Week 5: File Sharing**
- **Tasks**:
    - 백엔드:
        - 파일 공유 API (`/api/files/share`).
        - QR 코드 생성 및 만료 링크 설정.
    - 프론트엔드:
        - 파일 공유 버튼 추가.
        - QR 코드 표시 및 만료 시간 설정 UI.
    - 데이터베이스에 공유 상태 및 만료 정보 저장.
- **Deliverables**:
    - 파일을 공유할 수 있으며 QR 코드 또는 링크 생성 가능.
- **Learning Goals**:
    - Spring Scheduler로 만료된 링크 정리.
    - QR 코드 생성 라이브러리 사용.

---

### **Week 6: User Permissions**
- **Tasks**:
    - 백엔드:
        - 권한 기반 접근 제어(API 보호: 읽기/쓰기/삭제).
        - Spring Security와 데이터베이스 연동.
    - 프론트엔드:
        - 권한에 따른 UI 제어(읽기 전용 사용자는 삭제 버튼 비활성화).
- **Deliverables**:
    - 파일별로 권한 관리 가능.
- **Learning Goals**:
    - Spring Security의 권한 제어.

---

### **Week 7: Real-Time Sync**
- **Tasks**:
    - 백엔드:
        - Spring WebSocket으로 파일 변경 이벤트 전송.
    - 프론트엔드:
        - WebSocket 클라이언트로 실시간 파일 리스트 업데이트.
- **Deliverables**:
    - 파일 업로드/삭제 시 실시간 동기화.
- **Learning Goals**:
    - WebSocket 및 STOMP 프로토콜 학습.

---

## **3rd Month: Optimization & Deployment**
### **Week 8: Data Backup**
- **Tasks**:
    - 백엔드:
        - 스케줄링으로 파일 및 메타데이터 백업.
        - AWS S3에 백업 업로드.
    - 프론트엔드:
        - 백업 상태를 표시하는 UI 추가.
- **Deliverables**:
    - 주기적인 데이터 백업 가능.
- **Learning Goals**:
    - Spring Scheduler와 AWS SDK 사용법.

---

### **Week 9: UI Enhancements**
- **Tasks**:
    - Chakra UI를 활용한 UI 개선.
    - 사용자 경험 중심의 디자인 적용(다크모드, 애니메이션 등).
- **Deliverables**:
    - 완성도 높은 UI 제공.
- **Learning Goals**:
    - Chakra UI의 고급 컴포넌트 활용.

---

### **Week 10-11: Deployment & Scaling**
- **Tasks**:
    - Docker Compose로 전체 애플리케이션 배포.
    - AWS 또는 GCP에 배포.
    - 성능 모니터링 및 최적화.
- **Deliverables**:
    - 서비스가 배포되어 실제 사용자 접근 가능.
- **Learning Goals**:
    - Docker 및 클라우드 배포.

---

### **Week 12: Final Testing & Documentation**
- **Tasks**:
    - 통합 테스트 및 버그 수정.
    - 사용자 매뉴얼 작성.
    - 최종 README.md 정리.
- **Deliverables**:
    - 안정적인 서비스 제공.
    - 완성된 프로젝트 문서화.
