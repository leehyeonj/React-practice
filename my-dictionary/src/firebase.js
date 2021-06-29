//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyCGna7F0CJ-ghsIx0Jag1slbjMetEFfjzU",
    authDomain: "my-dic-67bc0.firebaseapp.com",
    projectId: "my-dic-67bc0",
    storageBucket: "my-dic-67bc0.appspot.com",
    messagingSenderId: "717823373051",
    appId: "1:717823373051:web:472016b66e57198921ca5e",
    measurementId: "G-5G6ZVC0FGL"


};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };