const fs = require('fs');

// 원본 TSX 파일 읽기
const tsxContent = fs.readFileSync('../remixed-fa52101a.tsx', 'utf8');

// import 문 제거하고 React 전역 변수로 변환
let jsxContent = tsxContent
  .replace(/import React, \{ useState, useEffect \} from 'react';/, '')
  .replace(/import \{ Sparkles, Diamond, Hexagon \} from 'lucide-react';/, '')
  .replace(/export default LifeCycleDiagnosis;/, '');

// HTML 템플릿 생성
const htmlTemplate = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>라이프사이클 진단 - 당신의 인생 패턴을 발견하세요</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
    * {
      font-family: 'Noto Sans KR', sans-serif;
    }
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect } = React;

    // Lucide 아이콘을 React 컴포넌트로 변환
    const Sparkles = (props) => React.createElement('i', {
      ...props,
      'data-lucide': 'sparkles',
      ref: (el) => el && lucide.createIcons()
    });
    const Diamond = (props) => React.createElement('i', {
      ...props,
      'data-lucide': 'diamond',
      ref: (el) => el && lucide.createIcons()
    });
    const Hexagon = (props) => React.createElement('i', {
      ...props,
      'data-lucide': 'hexagon',
      ref: (el) => el && lucide.createIcons()
    });

${jsxContent}

    ReactDOM.render(React.createElement(LifeCycleDiagnosis), document.getElementById('root'));
  </script>
</body>
</html>`;

// HTML 파일 생성
fs.writeFileSync('index.html', htmlTemplate, 'utf8');
console.log('HTML 파일이 성공적으로 생성되었습니다!');