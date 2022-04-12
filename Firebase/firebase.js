// firebaseをimportしています
import firebase from "firebase/app";

const firebaseConfig = {
  // 先程Firebaseにアプリを追加するところでコピーしたコードを追加
  apiKey: "AIzaSyD2UKu0H3FBdyUpuN8snR88Db0OJXAkUz8",
  authDomain: "marine-blog.firebaseapp.com",
  projectId: "marine-blog",
  storageBucket: "marine-blog.appspot.com",
  messagingSenderId: "847276512736",
  appId: "1:847276512736:web:8721b182710ec533074785",
  measurementId: "G-7FBDBNCKR0",
};
// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
