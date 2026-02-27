// 간단한 JavaScript 파일
console.log('Creativity Support 페이지에 오신 것을 환영합니다!');

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지가 성공적으로 로드되었습니다.');
    
    // 카드에 클릭 이벤트 추가 (선택사항)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('카드 클릭:', this.querySelector('h3').textContent);
        });
    });
});
