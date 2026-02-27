// Creativity Support - Smooth Experience
console.log('Creativity Support - Portfolio');

/* ============================================
   SmoothScroll.js 라이브러리 설정
   ============================================
   
   이 라이브러리는 기본 브라우저 스크롤을 부드럽고 자연스러운 
   애니메이션 스크롤로 변경합니다.
   
   CDN: https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.9/SmoothScroll.min.js
   
   ============================================ */

SmoothScroll({
    // animationTime: 스크롤 애니메이션의 지속 시간 (밀리초)
    // 값이 클수록 더 느리고 부드럽게 스크롤
    // 권장: 400-1200 (기본값: 400)
    animationTime: 1600,
    
    // stepSize: 한 번의 스크롤로 이동하는 픽셀 크기
    // 값이 클수록 스크롤이 빠르게 이동
    // 권장: 50-120 (기본값: 100)
    stepSize: 65,
    
    // accelerationDelta: 스크롤 가속도 변화량
    // 연속으로 스크롤할 때 속도가 증가하는 정도
    // 값이 클수록 빠르게 가속
    // 권장: 20-50 (기본값: 50)
    accelerationDelta: 30,
    
    // accelerationMax: 최대 가속도 배율
    // 연속 스크롤 시 최대 몇 배까지 빨라질지 설정
    // 권장: 1-3 (기본값: 3)
    accelerationMax: 2,
    
    // keyboardSupport: 키보드 화살표 키로 스크롤 가능 여부
    // true = 화살표 키 사용 가능, false = 비활성화
    keyboardSupport: true,
    
    // arrowScroll: 화살표 키 한 번에 스크롤되는 픽셀
    // 권장: 30-100 (기본값: 50)
    arrowScroll: 50,
    
    // pulseAlgorithm: 맥박 알고리즘 활성화
    // 스크롤 휠의 물리적 움직임을 더 자연스럽게 시뮬레이션
    // true = 자연스러운 감속, false = 선형 감속
    pulseAlgorithm: true,
    
    // pulseScale: 맥박 효과의 강도
    // 값이 클수록 더 뚜렷한 감속 효과
    // 권장: 2-8 (기본값: 4)
    pulseScale: 4,
    
    // pulseNormalize: 맥박 정규화 값
    // 다양한 입력 장치 간의 스크롤 속도 균일화
    // 권장: 1 (기본값: 1)
    pulseNormalize: 1,
    
    // touchpadSupport: 트랙패드/터치패드 지원
    // MacBook 트랙패드 등에서도 부드러운 스크롤 적용
    touchpadSupport: true
});

/* ============================================
   커스터마이징 팁:
   ============================================
   
   1. 더 빠른 스크롤을 원한다면:
      - stepSize를 90-120으로 증가
      - animationTime을 400-600으로 감소
   
   2. 더 부드럽고 느린 스크롤을 원한다면:
      - stepSize를 50-70으로 감소
      - animationTime을 1000-1500으로 증가
   
   3. 더 자연스러운 감속 효과를 원한다면:
      - pulseAlgorithm을 true로 유지
      - pulseScale을 6-8로 증가
   
   4. 스크롤 가속을 없애려면:
      - accelerationMax를 1로 설정
      - accelerationDelta를 0으로 설정
   
   ============================================ */

// Animation elements detection
function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.pageYOffset;
    const windowBottomPosition = windowTopPosition + windowHeight;
    
    const animationElements = document.querySelectorAll('.work-item, .content-center, .section-title');
    
    animationElements.forEach(element => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = elementTopPosition + elementHeight;
        
        // Check if element is within viewport
        if ((elementBottomPosition >= windowTopPosition) &&
            (elementTopPosition <= windowBottomPosition)) {
            element.classList.add('in-view');
        }
    });
}

/* ============================================
   커스텀 마우스 커서
   ============================================
   
   기본 마우스 커서를 숨기고 커스텀 디자인의 
   원형 커서로 대체합니다.
   
   - 기본: 20px 원형 테두리
   - Hover: 40px 원형으로 확대
   - Click: 0.8배로 축소 애니메이션
   - mix-blend-mode: 배경에 따라 색상 반전
   
   ============================================ */

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

// 마우스 움직임에 따라 커서 위치 업데이트
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover 효과: 클릭 가능한 요소에 마우스 올릴 때 커서 확대
const clickableElements = document.querySelectorAll('a, button, .work-item, .placeholder-image');
clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Click 효과: 클릭 시 커서 축소/복원
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

/* ============================================
   커스텀 커서 수정 방법:
   ============================================
   
   CSS 스타일 변경 (아래 DOMContentLoaded 참고):
   
   1. 커서 크기 변경:
      width, height 값 조정 (현재: 20px)
   
   2. 커서 색상 변경:
      border: 2px solid #색상코드;
   
   3. Hover 크기 변경:
      .cursor.hover의 width, height 조정 (현재: 40px)
   
   4. 애니메이션 속도 변경:
      transition의 0.15s 값 조정
   
   5. mix-blend-mode 제거:
      mix-blend-mode: difference; 라인 삭제
   
   ============================================ */

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Add custom cursor CSS
    const style = document.createElement('style');
    style.textContent = `
        .cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #f5f5f7;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                        width 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                        height 0.15s cubic-bezier(0.16, 1, 0.3, 1);
            mix-blend-mode: difference;
        }
        
        .cursor.hover {
            width: 40px;
            height: 40px;
            background: rgba(245, 245, 247, 0.1);
        }
        
        .work-item, .content-center, .section-title {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .work-item.in-view, .content-center.in-view, .section-title.in-view {
            opacity: 1;
            transform: translateY(0);
        }
        
        * {
            cursor: none !important;
        }
        
        /* 모달 내부는 기본 커서 사용 */
        #workModal,
        #workModal * {
            cursor: auto !important;
        }
        
        #workModal a,
        #workModal button,
        #workModal .modal-close {
            cursor: pointer !important;
        }
    `;
    document.head.appendChild(style);
    
    // Check animations on scroll and resize
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    checkIfInView(); // Initial check
});

/* ============================================
   Modal 기능
   ============================================
   
   Featured Works 항목을 클릭하면 상세 정보를 
   오버레이 모달로 표시합니다.
   
   ============================================ */

// Work 데이터 (추후 실제 프로젝트 정보로 변경)
const worksData = {
    1: {
        title: "Creative Project 01",
        tags: "#Interactive #AI #Installation",
        description: "인공지능과 인간의 창의성이 만나는 인터랙티브 설치 작품입니다. 관객의 움직임과 소리에 반응하여 실시간으로 변화하는 시각적 경험을 제공합니다.",
        features: [
            "실시간 모션 트래킹 및 반응형 비주얼",
            "생성형 AI를 활용한 동적 패턴 생성",
            "다층적 사운드스케이프 통합"
        ],
        tech: "OpenCV, TensorFlow, TouchDesigner, Max/MSP"
    },
    2: {
        title: "Creative Project 02",
        tags: "#Web #UX/UI #Generative",
        description: "사용자 경험과 생성 알고리즘이 결합된 웹 기반 크리에이티브 플랫폼입니다. 각 사용자의 인터랙션에 따라 고유한 시각적 결과물을 생성합니다.",
        features: [
            "개인화된 생성 알고리즘 엔진",
            "반응형 웹 디자인 시스템",
            "실시간 협업 기능"
        ],
        tech: "React, Three.js, WebGL, Node.js, Socket.io"
    },
    3: {
        title: "Creative Project 03",
        tags: "#AR #Mobile #Experience",
        description: "증강현실 기술을 활용한 모바일 경험 디자인 프로젝트입니다. 일상 공간에 디지털 레이어를 더해 새로운 창의적 가능성을 탐구합니다.",
        features: [
            "ARKit/ARCore 기반 공간 인식",
            "위치 기반 콘텐츠 배치",
            "소셜 공유 및 협업 기능"
        ],
        tech: "Unity, ARKit, ARCore, C#, Firebase"
    },
    4: {
        title: "Creative Project 04",
        tags: "#DataViz #Interactive #Research",
        description: "복잡한 데이터를 직관적이고 아름다운 비주얼로 변환하는 인터랙티브 데이터 시각화 작품입니다. 탐색적 경험을 통해 새로운 인사이트를 발견합니다.",
        features: [
            "다차원 데이터 시각화",
            "인터랙티브 필터링 및 탐색",
            "실시간 데이터 스트리밍"
        ],
        tech: "D3.js, WebGL, Python, Pandas, Flask"
    },
    5: {
        title: "Creative Project 05",
        tags: "#Physical #IoT #Kinetic",
        description: "IoT 센서와 키네틱 구조가 결합된 피지컬 컴퓨팅 작품입니다. 환경 데이터에 반응하여 움직이는 조형물을 통해 데이터의 물리적 구현을 탐구합니다.",
        features: [
            "환경 센서 네트워크 구축",
            "모터 제어 및 동기화 시스템",
            "데이터 수집 및 분석 플랫폼"
        ],
        tech: "Arduino, Raspberry Pi, Python, MQTT, InfluxDB"
    },
    6: {
        title: "Creative Project 06",
        tags: "#Sound #Generative #Performance",
        description: "알고리즘 작곡과 실시간 퍼포먼스가 만나는 사운드 아트 프로젝트입니다. 생성 알고리즘이 만들어내는 음악적 구조와 즉흥성의 조화를 탐구합니다.",
        features: [
            "실시간 알고리즘 작곡 엔진",
            "MIDI 및 OSC 프로토콜 통합",
            "멀티채널 사운드 시스템"
        ],
        tech: "Max/MSP, SuperCollider, Ableton Live, Python"
    }
};

// 모달 열기
function openModal(workId) {
    const modal = document.getElementById('workModal');
    const work = worksData[workId];
    
    if (!work) {
        console.error('Work not found:', workId);
        return;
    }
    
    // 모달 내용 업데이트
    document.getElementById('modalTitle').textContent = work.title;
    document.getElementById('modalTags').textContent = work.tags;
    document.getElementById('modalDescription').textContent = work.description;
    document.getElementById('modalTech').textContent = work.tech;
    
    // Features 리스트 업데이트
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = work.features.map(feature => `<li>${feature}</li>`).join('');
    
    // 모달 표시
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // body 스크롤 방지
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('workModal');
    
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    
    // body 스크롤 복원
    document.body.style.overflow = '';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('workModal');
        if (modal.classList.contains('active')) {
            closeModal();
        }
    }
});

// 모달 외부 클릭시 닫기는 이미 HTML의 onclick="closeModal()"로 처리됨
