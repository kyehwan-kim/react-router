import React from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <>
      <h1>게시판 페이지 입니다.</h1>
      {/* 루트주소로 사용할 떄는 /board/1 이렇게 써야함 */}
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </>
  );
}
