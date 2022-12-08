document.addEventListener("keydown", (e) => {
  // (위)'e'라는 keydown 이벤트를 받아옴.
  // console.log("용사의 왼쪽값", heroElement.style.left);
  /* (위)'용사의 왼쪽값' __빈값만 나옴__ 
  ?? style.left로 가져오면 인라인 값만 가져오기 때문
  속성에서 가져오려면..? getComputedStyle()
  */
  // console.log("용사의 왼쪽값", getComputedStyle(heroElement).left);

  /*(아래) 제대로된 용사의 왼쪽값 가져옴, str형태로 가져오기 때문에 
  split으로 px제거 후 Number함수로 숫자변환*/
  const heroLeft = Number(getComputedStyle(heroElement).left.split("px")[0]);
  // console.log(heroLeft);

  /*(아래) left 값이 화면 크기를 넘어갈 때(10은 움직이는 양 차이에 따른 오차를 줄이기 위한 여유 범위),
  함수를 return(종료)시켜서 더 이상 hero가 넘어가지 않게 해줌*/
  if (
    (heroLeft - 10 <= 0 && e.keyCode === 37) ||
    (heroLeft + 10 >= BG_WIDTH - HERO_WIDTH && e.keyCode === 39)
  ) {
    return;
  }

  /*(아래) 왼쪽 방향키코드 37, 오른쪽 방향키코드 39 
  left값을 받아와서 10px씩 크거나 작아지게 해서 이동.. 
  대신 heroLeft값은 함수안에 넣어주어야 계속 초기화되는 것을 막아줘서 이동시킬 수 있음*/
  if (e.keyCode === 37) {
    heroElement.style.left = heroLeft - 10 + "px";
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeft + 10 + "px";
  }
});
// (위) 좌우 키 입력에 따른 용사 움직이기 구현
